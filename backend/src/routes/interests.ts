import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all available interests
router.get('/interests', async (req, res) => {
  try {
    const interests = await prisma.interest.findMany({
      orderBy: {
        category: 'asc',
      },
    });
    res.json(interests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch interests' });
  }
});

// Save user interests
router.post('/interests', authenticateToken, async (req, res) => {
  try {
    const { interests } = req.body;
    const userId = req.user.id;

    // First, delete existing interests
    await prisma.userInterest.deleteMany({
      where: { userId },
    });

    // Then create new interests
    const userInterests = await prisma.userInterest.createMany({
      data: interests.map((interestId: string) => ({
        userId,
        interestId,
      })),
    });

    res.json({ message: 'Interests saved successfully', userInterests });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save interests' });
  }
});

// Get user's interests
router.get('/user/interests', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const userInterests = await prisma.userInterest.findMany({
      where: { userId },
      include: {
        interest: true,
      },
    });
    res.json(userInterests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user interests' });
  }
});

export default router; 