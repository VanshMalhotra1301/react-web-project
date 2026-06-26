import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
  narrow?: boolean;
}

/**
 * Max-width container with responsive padding.
 */
export function Container({
  children,
  className,
  as: Component = 'div',
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-4xl' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </Component>
  );
}
