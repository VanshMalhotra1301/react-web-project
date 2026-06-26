import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { getTelUrl } from '@/utils/formatters';

const PHONE_NUMBER = '9588598168'; // Replace with actual number

/**
 * Floating call button (positioned above WhatsApp on mobile).
 */
export function FloatingCall() {
  return (
    <motion.a
      href={getTelUrl(PHONE_NUMBER)}
      className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-shadow hover:shadow-xl md:hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call Malhotra Classes"
    >
      <Phone className="h-5 w-5" />
    </motion.a>
  );
}
