import express from 'express';
import path from 'path';
import { PrismaClient } from '../generated/prisma';
import { uploadLocalFileToS3 } from '../services/s3Service';

const router = express.Router();
const prisma = new PrismaClient();

// POST /upload - Upload a hardcoded local audio file
router.post('/upload', async (req, res) => {
  try {
    // Path to local sample audio file
    const localFilePath = path.join(__dirname, '../sample-audio', 'example.mp3');

    // Upload to S3
    const { key, url } = await uploadLocalFileToS3(localFilePath);

    // Save metadata to MongoDB via Prisma
    const audioFile = await prisma.audioFile.create({
      data: {
        s3Key: key,
        originalName: 'example.mp3',
        contentType: 'audio/mpeg',
        url,
        user: {
          connect: {
            id: '1'
          }
        }
      }
    });

    res.status(200).json({
      message: 'File uploaded successfully',
      fileId: audioFile.id,
      url: audioFile.url,
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

export default router;
