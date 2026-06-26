import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-navy text-white hover:bg-brand-navy-light shadow-md hover:shadow-lg active:scale-[0.98]',
  secondary:
    'bg-brand-gold text-brand-navy font-semibold hover:bg-brand-gold-dark shadow-gold hover:shadow-lg active:scale-[0.98]',
  outline:
    'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white active:scale-[0.98]',
  ghost:
    'text-brand-navy hover:bg-brand-navy/5 active:bg-brand-navy/10',
  gold:
    'bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light text-brand-navy font-semibold shadow-gold hover:shadow-lg active:scale-[0.98]',
  danger:
    'bg-brand-coral text-white hover:bg-brand-coral-dark shadow-md active:scale-[0.98]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3 text-base gap-2.5',
  xl: 'px-10 py-4 text-lg gap-3',
};

/**
 * Polymorphic button component with variants, sizes, loading state, and icon support.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
