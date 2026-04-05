import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LessonContentProps {
  title: string;
  description: string;
  onNextLesson: () => void;
  hasNextLesson: boolean;
}

export function LessonContent({
  title,
  description,
  onNextLesson,
  hasNextLesson,
}: LessonContentProps) {
  return (
    <div className="flex-1 p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        {hasNextLesson && (
          <Button onClick={onNextLesson} className="shrink-0">
            Next Lesson
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>{description}</p>
      </div>
    </div>
  );
}
