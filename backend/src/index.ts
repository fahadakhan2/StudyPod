// server.ts
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import podcastAudioRoutes from './routes/podcastAudioRoutes';
import ttsRoutes from './routes/TTSRoute'; 
import TTSandGemeniCombined from './routes/TTSandGemeniCombined';
import audioStorageRoutes from './routes/audioStorageRoutes';
import interestsRouter from './routes/interests';
import podcastsRouter from './routes/podcasts';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use('/podcast-audio', podcastAudioRoutes);
app.use('/tts-server', ttsRoutes);
app.use('/tts-gemini', TTSandGemeniCombined);
app.use('/audio-storage', audioStorageRoutes);
app.use('/api', interestsRouter);
app.use('/api', podcastsRouter);

// Root test route
app.get('/', (req: Request, res: Response) => {
  res.send('StudyPod API is running - Convert your study materials to podcasts!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
