import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'bordered' | 'dark';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'li';
  onClick?: () => void;
}

const variantStyles = {
  default: 'bg-white border border-border-default',
  glass: 'glass-light',
  elevated: 'bg-white shadow-card',
  bordered: 'bg-white border-2 border-border-default',
  dark: 'bg-brand-navy-light border border-white/10 text-white',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Base card component with multiple style variants and hover effects.
 */
export function Card({
  children,
  className,
  variant = 'default',
  hover = true,
  padding = 'md',
  as: Component = 'div',
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn('will-change-transform')}
    >
      <Component
        onClick={onClick}
        className={cn(
          'rounded-2xl transition-shadow duration-300',
          variantStyles[variant],
          paddingStyles[padding],
          hover && 'hover:shadow-xl cursor-pointer',
          onClick && 'cursor-pointer',
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}

/* ── Card sub-components for composition ── */

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-lg font-semibold text-text-primary', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('mt-1 text-sm text-text-secondary leading-relaxed', className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mt-4 flex items-center gap-3 pt-4 border-t border-border-default', className)}>
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-xl', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
