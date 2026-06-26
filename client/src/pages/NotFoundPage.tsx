import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" noIndex />
      <div className="section-padding">
        <Container className="text-center">
          <div className="mx-auto max-w-lg">
            <p className="font-accent text-8xl font-bold text-brand-gold/30 sm:text-9xl">404</p>
            <h1 className="mt-4 text-3xl font-bold text-text-primary font-heading sm:text-4xl">
              Page Not Found
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              The page you're looking for doesn't exist or has been moved.
              Let us help you find what you need.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/"
                className="rounded-xl bg-brand-navy px-6 py-3 text-sm font-medium text-white hover:bg-brand-navy-light transition-colors"
              >
                Go Home
              </a>
              <a
                href="/courses"
                className="rounded-xl border border-border-default px-6 py-3 text-sm font-medium text-text-primary hover:border-brand-gold transition-colors"
              >
                Browse Courses
              </a>
              <a
                href="/contact"
                className="rounded-xl border border-border-default px-6 py-3 text-sm font-medium text-text-primary hover:border-brand-gold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
