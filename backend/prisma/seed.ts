import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const interests = [
  // Technology
  { name: 'Programming', category: 'Technology' },
  { name: 'Web Development', category: 'Technology' },
  { name: 'Mobile Development', category: 'Technology' },
  { name: 'Data Science', category: 'Technology' },
  { name: 'Artificial Intelligence', category: 'Technology' },
  { name: 'Cybersecurity', category: 'Technology' },

  // Academic
  { name: 'Mathematics', category: 'Academic' },
  { name: 'Science', category: 'Academic' },
  { name: 'History', category: 'Academic' },
  { name: 'Literature', category: 'Academic' },
  { name: 'Languages', category: 'Academic' },
  { name: 'Philosophy', category: 'Academic' },

  // Creative
  { name: 'Art', category: 'Creative' },
  { name: 'Music', category: 'Creative' },
  { name: 'Design', category: 'Creative' },
  { name: 'Photography', category: 'Creative' },
  { name: 'Writing', category: 'Creative' },
  { name: 'Film', category: 'Creative' },

  // Professional
  { name: 'Business', category: 'Professional' },
  { name: 'Marketing', category: 'Professional' },
  { name: 'Finance', category: 'Professional' },
  { name: 'Psychology', category: 'Professional' },
  { name: 'Leadership', category: 'Professional' },
  { name: 'Entrepreneurship', category: 'Professional' },

  // Health & Wellness
  { name: 'Fitness', category: 'Health & Wellness' },
  { name: 'Nutrition', category: 'Health & Wellness' },
  { name: 'Mental Health', category: 'Health & Wellness' },
  { name: 'Yoga', category: 'Health & Wellness' },
  { name: 'Meditation', category: 'Health & Wellness' },
  { name: 'Sports', category: 'Health & Wellness' },
];

async function main() {
  console.log('🌱 Starting seed...');

  try {
    // Clear existing interests
    await prisma.userInterest.deleteMany({});
    await prisma.interest.deleteMany({});

    // Create new interests
    const createdInterests = await prisma.interest.createMany({
      data: interests,
    });

    console.log(`✅ Created ${createdInterests.count} interests`);
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
