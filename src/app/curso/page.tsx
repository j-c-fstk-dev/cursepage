import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import type { Lesson, User } from '@/lib/definitions';
import CourseClient from './CourseClient';

export const dynamic = 'force-dynamic';

async function getLessons(): Promise<Lesson[]> {
  const lessons = await prisma.lesson.findMany({
    orderBy: {
      orderIndex: 'asc',
    },
  });
  return lessons;
}

export default async function CursoPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  if (!session.isAuthorized) {
    redirect('/acesso-negado');
  }

  const lessons = await getLessons();

  if (lessons.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        No lessons available yet.
      </div>
    );
  }

  const user: User = {
    id: session.id,
    email: session.email,
    isAuthorized: session.isAuthorized,
  };

  return <CourseClient lessons={lessons} user={user} />;
}
