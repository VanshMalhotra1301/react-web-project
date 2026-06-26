import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

/**
 * Skeleton loader with shimmer animation for loading states.
 */
export function Skeleton({ className, variant = 'rectangular', width, height }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer',
        variant === 'circular' && 'rounded-full',
        variant === 'text' && 'rounded-md h-4',
        variant === 'rectangular' && 'rounded-xl',
        className
      )}
      style={{ width, height }}
      role="status"
      aria-label="Loading..."
    />
  );
}

/** Card skeleton for course/blog cards */
export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border-default bg-white p-6">
      <Skeleton className="mb-4 h-48 w-full" />
      <Skeleton className="mb-2 h-4 w-1/3" variant="text" />
      <Skeleton className="mb-2 h-6 w-3/4" variant="text" />
      <Skeleton className="mb-4 h-4 w-full" variant="text" />
      <Skeleton className="h-4 w-2/3" variant="text" />
      <div className="mt-6 flex items-center gap-3">
        <Skeleton className="h-8 w-8" variant="circular" />
        <Skeleton className="h-4 w-24" variant="text" />
      </div>
    </div>
  );
}

/** Testimonial skeleton */
export function TestimonialSkeleton() {
  return (
    <div className="rounded-2xl border border-border-default bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <Skeleton className="h-12 w-12" variant="circular" />
        <div className="flex-1">
          <Skeleton className="mb-1 h-4 w-32" variant="text" />
          <Skeleton className="h-3 w-24" variant="text" />
        </div>
      </div>
      <Skeleton className="mb-2 h-4 w-full" variant="text" />
      <Skeleton className="mb-2 h-4 w-full" variant="text" />
      <Skeleton className="h-4 w-3/4" variant="text" />
    </div>
  );
}

/** Faculty card skeleton */
export function FacultySkeleton() {
  return (
    <div className="rounded-2xl border border-border-default bg-white p-6 text-center">
      <Skeleton className="mx-auto mb-4 h-32 w-32" variant="circular" />
      <Skeleton className="mx-auto mb-2 h-5 w-32" variant="text" />
      <Skeleton className="mx-auto mb-2 h-4 w-24" variant="text" />
      <Skeleton className="mx-auto h-3 w-40" variant="text" />
    </div>
  );
}
