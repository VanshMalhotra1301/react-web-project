import { cn } from '@/utils/cn';

type BadgeVariant = 'default' | 'gold' | 'success' | 'danger' | 'info' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  size?: 'sm' | 'md';
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-brand-navy/10 text-brand-navy',
  gold: 'bg-brand-gold/15 text-brand-gold-dark',
  success: 'bg-brand-emerald/15 text-brand-emerald-dark',
  danger: 'bg-brand-coral/15 text-brand-coral-dark',
  info: 'bg-blue-50 text-blue-700',
  outline: 'border border-border-default text-text-secondary',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

/**
 * Badge component for status labels, categories, and tags.
 */
export function Badge({ children, variant = 'default', className, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
