import {GoogleGenAI} from '@google/genai';
// import { GEMINI_AI_KEY } from './constants';
const GEMINI_AI_KEY = import.meta.env.VITE_GEMINI_AI_KEY

const geminiAI = new GoogleGenAI({apiKey:GEMINI_AI_KEY  });

export default geminiAI