import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Camera,
  Video,
  Globe,
  ArrowRight,
  Send,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { useState } from 'react';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Faculty', href: '/faculty' },
  { label: 'Results', href: '/results' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

const courseLinks = [
  { label: 'Class 6–8 Foundation', href: '/courses/class-6-8' },
  { label: 'Class 9–10 Board Prep', href: '/courses/class-9-10' },
  { label: 'Class 11–12 Board Prep', href: '/courses/class-11-12' },
  { label: 'JEE Foundation', href: '/courses/jee-foundation' },
  { label: 'NEET Foundation', href: '/courses/neet-foundation' },
  { label: 'Olympiad / NTSE', href: '/courses/olympiad-ntse' },
  { label: 'CUET Preparation', href: '/courses/cuet' },
];

const resourceLinks = [
  { label: 'Free Notes', href: '/free-notes' },
  { label: 'Study Material', href: '/study-material' },
  { label: 'Mock Tests', href: '/mock-tests' },
  { label: 'Career Guidance', href: '/career-guidance' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Fee Structure', href: '/fee-structure' },
  { label: 'Scholarships', href: '/scholarships' },
];

const socialLinks = [
  { icon: MessageCircle, href: 'https://facebook.com/malhotraclasses', label: 'Facebook' },
  { icon: Camera, href: 'https://instagram.com/malhotraclasses', label: 'Instagram' },
  { icon: Video, href: 'https://youtube.com/@malhotraclasses', label: 'YouTube' },
  { icon: Globe, href: 'https://linkedin.com/company/malhotraclasses', label: 'LinkedIn' },
];

/**
 * Comprehensive footer with newsletter, links, contact, map, and trust badges.
 */
export function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submit logic
    setEmail('');
  };

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
            <div>
              <h3 className="text-xl font-bold font-heading">Stay Updated</h3>
              <p className="mt-1 text-sm text-white/60">
                Get the latest study tips, exam updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/30"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="gold" size="md">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Malhotra Classes" className="h-16 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Malhotra Classes is Rohtak's most trusted coaching institute, nurturing academic excellence
              since 2005. We provide expert guidance for CBSE, HBSE, ICSE, JEE, NEET, and Olympiad
              preparation with a proven track record of outstanding results.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-brand-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@malhotraclasses.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-brand-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
                info@malhotraclasses.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-brand-gold mt-0.5" />
                <span>Near Model Town, Rohtak, Haryana 124001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0 text-brand-gold" />
                <span>Mon–Sat: 7:00 AM – 8:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all hover:bg-brand-gold/20 hover:text-brand-gold"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/40 md:flex-row">
            <p>© {currentYear} Malhotra Classes. All rights reserved. Learn • Grow • Succeed</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
