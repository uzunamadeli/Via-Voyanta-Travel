import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const apiKey = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey });

export const generateViaResponse = async (
  userMessage: string, 
  history: { role: string; parts: { text: string }[] }[],
  language: Language
): Promise<string> => {
  
  const langName = language === 'tr' ? 'Turkish' : 'English';

  const systemInstruction = `
    Your name is VİA. You are a helpful, polite, and knowledgeable AI assistant for a tourism agency website called "Via Voyanta Travel".
    
    IMPORTANT: You must respond in ${langName}.
    
    Your Tasks:
    1. Provide information about Cappadocia tours, hotels, and activities.
    2. Guide users who want to make a reservation.
    3. Answer general questions about Turkish tourism.
    4. Always use a polite and professional tone.
    
    Knowledge Base (Examples):
    - Balloon tours are held very early in the morning.
    - Cave hotels are cool in summer and warm in winter.
    - 'Testi Kebab' is famous in Cappadocia.
    
    If the user wants to make a reservation, tell them to fill out the form on the website or call the contact number.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview', 
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
    return result.text || (language === 'tr' ? "Üzgünüm, şu an yanıt veremiyorum." : "I'm sorry, I cannot respond right now.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'tr' ? "Bağlantıda bir sorun oluştu, lütfen daha sonra tekrar deneyiniz." : "A connection error occurred, please try again later.";
  }
};