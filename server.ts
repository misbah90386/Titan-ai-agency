import express from 'express';
import { GoogleGenAI } from '@google/genai';
import { DEMO_PROPERTIES } from './src/data/demoProperties';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

let vite: any;
if (process.env.NODE_ENV !== 'production') {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  app.use(vite.middlewares);
}

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// System Prompt
const SYSTEM_INSTRUCTION = `
You are the helpful AI Assistant for Titan AI Agency's real estate demonstration.
Your goal is to help users find properties based on the following fictional dataset:
${JSON.stringify(DEMO_PROPERTIES)}

Guidelines:
- Be friendly, professional, and concise.
- Only use information from the dataset provided. If you don't know something, say so.
- Never invent property details.
- Clarify that this is demonstration data.
- Support both Arabic and English. Match the user's language.
- Ask one or two clarifying questions at a time.
- If a user asks for a human, simulate a handoff by saying: "I have forwarded your request to a real estate consultant. They will contact you shortly."
- Be helpful and natural, not robotic.
`;

app.post('/api/chat', async (req, res) => {
    res.status(404).json({ error: 'AI Demo is currently disabled.' });
});

// Serve frontend in production (if applicable) or just dev mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
}

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
