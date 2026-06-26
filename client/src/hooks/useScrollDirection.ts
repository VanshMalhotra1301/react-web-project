import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook to detect scroll direction (up/down).
 * Useful for showing/hiding header on scroll.
 */
export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
      ticking.current = false;
      return;
    }

    setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, [threshold]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateScroll]);

  return { scrollDirection, scrollY, isScrolled: scrollY > 50 };
}
