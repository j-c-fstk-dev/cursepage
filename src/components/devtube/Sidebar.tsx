import type { Lesson } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: string;
  onSelectLesson: (lesson: Lesson) => void;
}

export function Sidebar({
  lessons,
  currentLessonId,
  onSelectLesson,
}: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-80 bg-card border-r border-zinc-800">
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className={cn(
                'w-full flex items-center gap-3 rounded-lg p-2 text-left text-sm transition-colors',
                currentLessonId === lesson.id
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'hover:bg-muted'
              )}
            >
              <div className='relative w-16 h-9 rounded-md overflow-hidden shrink-0'>
                <Image
                  src={`https://i.ytimg.com/vi/${lesson.youtubeVideoId}/mqdefault.jpg`}
                  alt={lesson.title}
                  fill
                  sizes="4rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white/80" />
                </div>
              </div>
              <div className="flex-1">
                <p className="leading-tight">{lesson.title}</p>
                <span className="text-xs text-muted-foreground">
                  Lesson {index + 1}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
