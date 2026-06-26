import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/utils/formatters';

const WHATSAPP_NUMBER = '+919588598168'; // Replace with actual number
const DEFAULT_MESSAGE =
  'Hello! I am interested in learning more about Malhotra Classes. Could you share details about your courses and admission process?';

/**
 * Floating WhatsApp button with tooltip and pulse animation.
 */
export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass-dark rounded-xl px-4 py-3 text-sm text-white shadow-xl max-w-[240px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 rounded-full bg-white p-0.5 text-gray-500 shadow-md hover:text-gray-700"
              aria-label="Close tooltip"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="font-medium">Need help? 💬</p>
            <p className="mt-1 text-xs text-white/70">
              Chat with us on WhatsApp for instant assistance!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={getWhatsAppUrl(WHATSAPP_NUMBER, DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <MessageCircle className="h-7 w-7 fill-current" />
      </motion.a>
    </div>
  );
}
