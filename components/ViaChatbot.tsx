import React, { useState, useRef, useEffect } from 'react';
import { generateViaResponse } from '../services/geminiService';
import { BAD_WORDS } from '../constants';
import { ChatMessage } from '../types';

const ViaChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Merhaba! Ben VİA, Via Voyanta Travel asistanıyım. Kapadokya seyahatiniz için size nasıl yardımcı olabilirim?'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const checkProfanity = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return BAD_WORDS.some(word => lowerText.includes(word));
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    
    // Add User Message
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    // Profanity Filter
    if (checkProfanity(userText)) {
      setTimeout(() => {
        const warningMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: 'Lütfen üslubunuzu düzeltiniz. Size yardımcı olmak için buradayım ancak saygılı bir iletişim kurmalıyız.'
        };
        setMessages(prev => [...prev, warningMsg]);
        setIsLoading(false);
      }, 500); // Small artificial delay for realism
      return;
    }

    // Call Gemini API
    try {
      const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await generateViaResponse(userText, historyForApi);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Bir hata oluştu, lütfen tekrar deneyin.',
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button - Navy and Sky Blue Gradient */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center ${isOpen ? 'bg-blue-950 rotate-90' : 'bg-gradient-to-r from-blue-900 to-sky-500'}`}
      >
         {isOpen ? (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
         ) : (
            <div className="relative">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400 border border-blue-500"></span>
                </span>
            </div>
         )}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 transform origin-bottom-right border border-slate-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header - Navy Gradient */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-800 p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white font-bold border border-white/20">
                V
            </div>
            <div>
                <h3 className="text-white font-bold text-lg">VİA Asistan</h3>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                    <span className="text-sky-100 text-xs">Çevrimiçi | Gemini 3 Pro</span>
                </div>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-sky-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-800 rounded-bl-none border border-slate-200'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                     <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                     </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-200 rounded-b-2xl">
            <form onSubmit={handleSend} className="flex gap-2 relative">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Bir soru sorun..." 
                    className="flex-1 bg-slate-100 text-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder-slate-500"
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="bg-blue-950 text-white p-3 rounded-xl hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
            </form>
            <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400">AI cevapları hatalı olabilir. Kontrol ediniz.</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default ViaChatbot;