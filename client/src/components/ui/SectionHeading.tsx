import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useIntersection } from '@/hooks/useIntersection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * Reusable section heading with animated gold underline accent.
 */
export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={cn(
            'mb-3 inline-block font-accent text-sm font-semibold uppercase tracking-[0.2em]',
            theme === 'light' ? 'text-brand-gold' : 'text-brand-gold-light'
          )}
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          theme === 'light' ? 'text-text-primary' : 'text-white'
        )}
      >
        {title}
      </motion.h2>

      {/* Animated underline accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className={cn(
          'mt-4 h-1 w-16 origin-left rounded-full bg-brand-gold',
          align === 'center' && 'mx-auto'
        )}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            'mt-5 max-w-2xl text-lg leading-relaxed',
            align === 'center' && 'mx-auto',
            theme === 'light' ? 'text-text-secondary' : 'text-white/70'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
