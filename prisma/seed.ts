import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  // Clear existing lessons
  await prisma.lesson.deleteMany();

  const lessons = [
    {
      title: 'Welcome to the Course!',
      description: 'An introduction to the course structure and what you will learn. We will cover the basics of our tech stack and project goals.',
      youtubeVideoId: 'V1s-kO3vY7o', // Example ID
      orderIndex: 1,
    },
    {
      title: 'Setting Up Your Development Environment',
      description: 'Follow these steps to get your local development environment configured correctly. This includes installing Node.js, setting up your code editor, and cloning the project repository.',
      youtubeVideoId: 'U3k_oD2nF8c', // Example ID
      orderIndex: 2,
    },
    {
      title: 'Deep Dive into Next.js App Router',
      description: 'Explore the features of the Next.js App Router, including layouts, server components, and data fetching strategies. We will build a small example to solidify the concepts.',
      youtubeVideoId: 'hEdYwz13c3I', // Example ID
      orderIndex: 3,
    },
  ];

  for (const lesson of lessons) {
    const newLesson = await prisma.lesson.create({
      data: lesson,
    })
    console.log(`Created lesson with id: ${newLesson.id}`)
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('123456', salt);

  await prisma.user.upsert({
    where: { email: 'test@user.com' },
    update: {
      password: hashedPassword,
      isAuthorized: true,
    },
    create: {
      email: 'test@user.com',
      password: hashedPassword,
      isAuthorized: true,
    },
  });
  console.log(`Created or updated user: test@user.com`);

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
