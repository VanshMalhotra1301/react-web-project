import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

/**
 * Location section with Google Maps embed and contact info.
 */
export function LocationSection() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-surface-secondary" aria-label="Our location">
      <Container>
        <SectionHeading
          subtitle="Visit Us"
          title="Find Us in the Heart of Rohtak"
          description="Located centrally near Model Town, our campus is easily accessible from all parts of Rohtak city."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Contact cards */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border-default bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
                  <MapPin className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Address</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Near Model Town, Rohtak,<br />Haryana 124001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border-default bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-emerald/10">
                  <Phone className="h-5 w-5 text-brand-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Phone</h3>
                  <a href="tel:+919876543210" className="mt-1 block text-sm text-text-secondary hover:text-brand-gold">
                    +91 98765 43210
                  </a>
                  <a href="tel:+919876543211" className="block text-sm text-text-secondary hover:text-brand-gold">
                    +91 98765 43211
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border-default bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Email</h3>
                  <a href="mailto:info@malhotraclasses.com" className="mt-1 block text-sm text-text-secondary hover:text-brand-gold">
                    info@malhotraclasses.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border-default bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Timings</h3>
                  <p className="mt-1 text-sm text-text-secondary">Mon – Sat: 7:00 AM – 8:00 PM</p>
                  <p className="text-sm text-text-secondary">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rohtak+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-navy-light"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2">
            <div className="h-full min-h-[400px] overflow-hidden rounded-2xl border border-border-default bg-surface-tertiary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55914.38582505728!2d76.5617!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d84613d8abef5%3A0x46081f8c6c8e4a92!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Malhotra Classes location in Rohtak, Haryana"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
