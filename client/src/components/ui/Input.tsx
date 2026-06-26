import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'default' | 'filled';
}

/**
 * Form input with floating labels, validation states, and icon support.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, leftIcon, rightIcon, variant = 'default', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            {label}
            {props.required && <span className="ml-0.5 text-brand-coral">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-text-tertiary">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-xl px-4 py-3 text-sm transition-all duration-200',
              'placeholder:text-text-tertiary',
              'focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold',
              'disabled:bg-surface-tertiary disabled:cursor-not-allowed disabled:opacity-60',
              variant === 'default' && 'border border-border-default bg-white hover:border-border-hover',
              variant === 'filled' && 'border-0 bg-surface-tertiary hover:bg-surface-secondary',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-brand-coral focus:ring-brand-coral/30 focus:border-brand-coral',
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-text-tertiary">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-brand-coral" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-text-tertiary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, type InputProps };

/* ── Textarea variant ── */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-text-primary">
            {label}
            {props.required && <span className="ml-0.5 text-brand-coral">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={4}
          className={cn(
            'w-full rounded-xl border border-border-default bg-white px-4 py-3 text-sm',
            'transition-all duration-200 placeholder:text-text-tertiary',
            'hover:border-border-hover',
            'focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold',
            'resize-y min-h-[100px]',
            error && 'border-brand-coral focus:ring-brand-coral/30',
            className
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-brand-coral" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

/* ── Select variant ── */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-text-primary">
            {label}
            {props.required && <span className="ml-0.5 text-brand-coral">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-xl border border-border-default bg-white px-4 py-3 text-sm',
            'transition-all duration-200 appearance-none',
            'hover:border-border-hover',
            'focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold',
            error && 'border-brand-coral',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-xs text-brand-coral" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
