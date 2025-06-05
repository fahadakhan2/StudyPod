// routes/TTSRoute.ts
import { Router, Request, Response } from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const router = Router();
const PLAYHT_URL = 'https://api.play.ht/api/v2/tts/stream';

const USER_ID = process.env.PLAYHT_USER_ID;
const API_KEY = process.env.PLAYHT_API_KEY;
const VOICE = process.env.PLAYHT_VOICE;

if (!USER_ID || !API_KEY || !VOICE) {
  throw new Error(
    'Missing one of PLAYHT_USER_ID, PLAYHT_API_KEY, or PLAYHT_VOICE in environment'
  );
}

// Base folder where we’ll save the MP3 files
const OUTPUT_DIR = path.join(__dirname, '../../generated_audio');

// Base folder where we’ll write log entries
const LOG_DIR = path.join(__dirname, '../../logs');
const LOG_FILE = path.join(LOG_DIR, 'tts.log');

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { text, filename } = req.body;

    // --- Logging logic ---
    // Ensure the "logs" directory exists
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }

    // Create a timestamped log entry
    const timestamp = new Date().toISOString();
    const safeFilename = filename ? filename.replace(/[^a-zA-Z0-9_\-]/g, '_') : 'N/A';
    const snippet = typeof text === 'string' ? text.slice(0, 50).replace(/\s+/g, ' ') : '';
    const logEntry = `${timestamp} - TTS request received. Text snippet: "${snippet}..." | Filename: ${safeFilename}\n`;

    // Append the log entry (non-blocking)
    fs.appendFile(LOG_FILE, logEntry, (err) => {
      if (err) {
        console.error('Logging error:', err);
      }
    });
    // --- End logging logic ---

    if (!text) {
      res.status(400).json({ error: 'Missing text in request body' });
      return;
    }

    // Create the output directory if it doesn’t exist yet
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Decide on an output filename. If the client provided one, use that (with .mp3);
    // otherwise, use a timestamp-based name.
    const safeName = filename
      ? filename.replace(/[^a-zA-Z0-9_\-]/g, '_') + '.mp3'
      : `${Date.now()}.mp3`;
    const outputFilePath = path.join(OUTPUT_DIR, safeName);

    // Build PlayHT payload (note: sample_rate is a number, not a string)
    const payload = {
      voice_engine: 'Play3.0',
      text,
      voice: VOICE,
      output_format: 'mp3',
      sample_rate: 44100,
      speed: 1,
    };

    // Request a streaming TTS from PlayHT
    const response = await fetch(PLAYHT_URL, {
      method: 'POST',
      headers: {
        accept: 'audio/mpeg',
        'content-type': 'application/json',
        'X-USER-ID': USER_ID,
        AUTHORIZATION: API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok || !response.body) {
      const errText = await response.text().catch(() => '');
      console.error('PlayHT API error:', response.status, errText);
      res.status(502).json({ error: 'PlayHT TTS streaming failed' });
      return;
    }

    // Create a writable stream to our output file
    const fileStream = fs.createWriteStream(outputFilePath);

    // Pipe the PlayHT stream into that file
    (response.body as NodeJS.ReadableStream).pipe(fileStream);

    // Once writing is finished, let the client know where it landed
    fileStream.on('finish', () => {
      res.json({
        message: 'TTS audio saved successfully',
        file: safeName,
        path: outputFilePath,
      });
    });

    // Handle errors while writing to disk
    fileStream.on('error', (fsErr) => {
      console.error('File write error:', fsErr);
      res.status(500).json({ error: 'Failed to write MP3 to disk' });
    });
  } catch (err) {
    console.error('TTSRoute error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', (_req: Request, res: Response) => {
  res.send('TTS server OK');
});

export default router;
