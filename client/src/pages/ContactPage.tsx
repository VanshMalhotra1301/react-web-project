import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { LocationSection } from '@/features/home/components/LocationSection';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <SEOHead
        title="Contact Us — Malhotra Classes Rohtak"
        description="Get in touch with Malhotra Classes. Visit our campus in Rohtak, call us, or send us a message for admission inquiries and course details."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Contact Us' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              We'd Love to Hear From <span className="text-brand-gold">You</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Whether you have a question about our courses, fee structure, or need career guidance, our team is ready to answer all your questions.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Form & Location */}
      <div className="section-padding">
        <Container>
          <div className="mb-16 rounded-3xl bg-surface-secondary p-6 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-text-primary font-heading">Send Us a Message</h2>
              <p className="mb-10 text-text-secondary">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/20 text-brand-emerald">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-text-primary font-heading">Message Sent!</h3>
                  <p className="text-text-secondary">
                    Thank you for reaching out. We have received your message and will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm sm:p-10 text-left">
                  <div className="grid gap-6 sm:grid-cols-2 mb-6">
                    <Input label="Full Name" placeholder="John Doe" required />
                    <Input label="Phone Number" type="tel" placeholder="10-digit number" required />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 mb-6">
                    <Input label="Email Address" type="email" placeholder="john@example.com" />
                    <Input label="Subject" placeholder="e.g. Admission Inquiry" required />
                  </div>
                  <div className="mb-8">
                    <Textarea label="Your Message" placeholder="How can we help you?" rows={5} required />
                  </div>
                  <div className="text-center">
                    <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="min-w-[200px]">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>

        <LocationSection />
      </div>
    </>
  );
}
