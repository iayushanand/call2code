import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function generateResponse(query: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: query,
  });
}
