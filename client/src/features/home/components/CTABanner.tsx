import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useIntersection } from '@/hooks/useIntersection';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

/**
 * Full-width conversion CTA banner with gradient background.
 */
export function CTABanner() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden" aria-label="Call to action">
      {/* Background */}
      <div className="gradient-hero py-20 lg:py-24">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-emerald/5 blur-[120px]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-medium text-brand-gold-light">
              <Sparkles className="h-4 w-4" />
              Start Your Journey Today
            </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-heading">
              Ready to Unlock Your{' '}
              <span className="gradient-text-gold">Full Potential?</span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Join thousands of successful students who transformed their academic journey with
              Malhotra Classes. Book a free demo class and experience the difference.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/admissions">
                <Button variant="gold" size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Book Free Demo Class
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button
                  variant="ghost"
                  size="xl"
                  className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
                  leftIcon={<Phone className="h-5 w-5" />}
                >
                  Call: +91 98765 43210
                </Button>
              </a>
            </div>

            <p className="mt-6 text-sm text-white/40">
              📍 Near Model Town, Rohtak • ⏰ Mon–Sat, 7 AM – 8 PM
            </p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
