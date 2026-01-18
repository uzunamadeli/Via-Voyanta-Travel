import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey });

export const generateViaResponse = async (
  userMessage: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  
  const systemInstruction = `
    Senin adın VİA. "Via Voyanta Travel" adlı turizm acentası web sitesi için çalışan yardımsever, kibar ve bilgili bir yapay zeka asistanısın.
    
    Görevlerin:
    1. Kullanıcılara Kapadokya turları, otelleri ve aktiviteleri hakkında bilgi vermek.
    2. Rezervasyon yapmak isteyenleri yönlendirmek.
    3. Türkiye turizmi hakkında genel soruları yanıtlamak.
    4. Her zaman nazik ve profesyonel bir dil kullanmak.
    
    Bilgi Bankası (Örnek):
    - Balon turları sabah çok erken saatte yapılır.
    - Mağara oteller yazın serin, kışın sıcaktır.
    - Kapadokya'da 'Testi Kebabı' meşhurdur.
    
    Kullanıcı rezervasyon yapmak isterse, onlara web sitesindeki ilgili formu doldurmalarını veya iletişim numarasını aramalarını söyle.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview', // Using the requested advanced model
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "Üzgünüm, şu an yanıt veremiyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bağlantıda bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.";
  }
};