import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get recommended podcasts based on user interests
router.get('/podcasts/recommended', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // Get user's interests
    const userInterests = await prisma.userInterest.findMany({
      where: { userId },
      include: {
        interest: true,
      },
    });

    // Get interest names
    const interestNames = userInterests.map(ui => ui.interest.name);

    // Find podcasts that match user's interests
    const recommendedPodcasts = await prisma.podcastSummary.findMany({
      where: {
        keywords: {
          hasSome: interestNames,
        },
      },
      include: {
        audio: true,
      },
      orderBy: {
        // You can add more sophisticated ordering based on:
        // - User engagement
        // - Content freshness
        // - Popularity
        // For now, we'll just order by most recent
        audio: {
          uploadDate: 'desc',
        },
      },
      take: 20, // Limit to 20 recommendations
    });

    res.json(recommendedPodcasts);
  } catch (error) {
    console.error('Error fetching recommended podcasts:', error);
    res.status(500).json({ error: 'Failed to fetch recommended podcasts' });
  }
});

export default router; 