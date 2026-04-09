'use client';

import type { Lesson, User } from '@/lib/definitions';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useMemo, Suspense } from 'react';
import { Sidebar } from '@/components/devtube/Sidebar';
import { VideoPlayer } from '@/components/devtube/VideoPlayer';
import { LessonContent } from '@/components/devtube/LessonContent';
import { CourseHeader } from '@/components/devtube/CourseHeader';

function CourseComponent({ lessons, user }: { lessons: Lesson[]; user: User }) {
  const searchParams = useSearchParams();
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const lessonId = searchParams.get('lesson');
    if (lessonId) {
      const foundLesson = lessons.find((l) => l.id === lessonId);
      setCurrentLesson(foundLesson || lessons[0]);
    } else {
      setCurrentLesson(lessons[0]);
    }
  }, [searchParams, lessons]);

  const nextLesson = useMemo(() => {
    if (!currentLesson) return null;
    const currentIndex = lessons.findIndex((l) => l.id === currentLesson.id);
    return lessons[currentIndex + 1] || null;
  }, [currentLesson, lessons]);

  const handleSelectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    window.history.pushState(null, '', `?lesson=${lesson.id}`);
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      handleSelectLesson(nextLesson);
    }
  };

  if (!currentLesson) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading course...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-card text-foreground">
      <Sidebar
        lessons={lessons}
        currentLessonId={currentLesson.id}
        onSelectLesson={handleSelectLesson}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <CourseHeader userEmail={user.email} />
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto bg-background">
            <VideoPlayer youtubeVideoId={currentLesson.youtubeVideoId} />
            <LessonContent
              title={currentLesson.title}
              description={currentLesson.description}
              onNextLesson={handleNextLesson}
              hasNextLesson={!!nextLesson}
            />
          </div>
        </div>
      </main>
    </div>
  );
}


export default function CourseClient({ lessons, user }: { lessons: Lesson[]; user: User }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseComponent lessons={lessons} user={user} />
    </Suspense>
  )
}
