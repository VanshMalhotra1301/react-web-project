import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { FloatingCall } from '@/components/common/FloatingCall';
import { ScrollToTop } from '@/components/common/ScrollToTop';

/**
 * Main layout wrapper — wraps all public-facing pages.
 * Includes Header, Footer, floating buttons, and scroll-to-top.
 */
export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-gold focus:px-4 focus:py-2 focus:text-brand-navy focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating elements */}
      <FloatingWhatsApp />
      <FloatingCall />
      <ScrollToTop />
    </div>
  );
}
