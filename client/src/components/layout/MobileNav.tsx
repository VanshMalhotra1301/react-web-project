import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, ExternalLink } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import type { NavItem } from '@/types';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

/**
 * Full-screen mobile navigation with smooth slide-in animation and accordion menus.
 */
export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border-default px-6 py-4">
                <img src="/logo.png" alt="Malhotra Classes" className="h-14 w-auto" />
              </div>

              {/* Nav Items */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {items.map((item) => (
                  <div key={item.label} className="border-b border-border-default/50 last:border-0">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleItem(item.label)}
                          className="flex w-full items-center justify-between px-3 py-3.5 text-base font-medium text-text-primary"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 text-text-tertiary transition-transform duration-200',
                              expandedItem === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-2 pl-4">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    onClick={onClose}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-brand-gold/5 hover:text-brand-gold"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="block px-3 py-3.5 text-base font-medium text-text-primary transition-colors hover:text-brand-gold"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border-default p-6 space-y-3">
                <Button variant="secondary" fullWidth onClick={onClose}>
                  Book Free Demo
                </Button>
                <Button variant="outline" fullWidth onClick={onClose}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>

                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-text-secondary">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-1.5 hover:text-brand-gold"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call
                  </a>
                  <span className="text-border-default">|</span>
                  <a
                    href="mailto:info@malhotraclasses.com"
                    className="flex items-center gap-1.5 hover:text-brand-gold"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
