import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-surface dark:bg-surface-dark rounded-xl shadow-lg p-6 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
