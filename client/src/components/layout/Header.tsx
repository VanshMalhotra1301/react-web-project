import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Search,
  ChevronDown,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Calculator,
  Atom,
  Dna,
  Globe,
  Monitor,
  Award,
  Target,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import { MobileNav } from './MobileNav';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'Class 6–8 (Foundation)', href: '/courses/class-6-8', icon: 'book' },
      { label: 'Class 9–10 (Board Prep)', href: '/courses/class-9-10', icon: 'graduation' },
      { label: 'Class 11–12 (Board Prep)', href: '/courses/class-11-12', icon: 'graduation' },
      { label: 'JEE Foundation', href: '/courses/jee-foundation', icon: 'target' },
      { label: 'NEET Foundation', href: '/courses/neet-foundation', icon: 'dna' },
      { label: 'Olympiad / NTSE', href: '/courses/olympiad-ntse', icon: 'award' },
      { label: 'CUET Preparation', href: '/courses/cuet', icon: 'globe' },
      { label: 'Mathematics', href: '/courses/mathematics', icon: 'calculator' },
      { label: 'Science', href: '/courses/science', icon: 'flask' },
      { label: 'Computer Science', href: '/courses/computer-science', icon: 'monitor' },
    ],
  },
  { label: 'Faculty', href: '/faculty' },

  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Free Notes', href: '/free-notes' },
      { label: 'Study Material', href: '/study-material' },
      { label: 'Mock Tests', href: '/mock-tests' },
      { label: 'Blog', href: '/blog' },
      { label: 'Career Guidance', href: '/career-guidance' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const courseIcons: Record<string, React.ReactNode> = {
  book: <BookOpen className="h-4 w-4" />,
  graduation: <GraduationCap className="h-4 w-4" />,
  flask: <FlaskConical className="h-4 w-4" />,
  calculator: <Calculator className="h-4 w-4" />,
  atom: <Atom className="h-4 w-4" />,
  dna: <Dna className="h-4 w-4" />,
  globe: <Globe className="h-4 w-4" />,
  monitor: <Monitor className="h-4 w-4" />,
  award: <Award className="h-4 w-4" />,
  target: <Target className="h-4 w-4" />,
};

/**
 * Premium responsive header with glassmorphism, mega-menu, and mobile drawer.
 */
export function Header() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener('click', handleClick);
    }
    return () => document.removeEventListener('click', handleClick);
  }, [activeDropdown]);

  const isHidden = scrollDirection === 'down' && isScrolled && !mobileMenuOpen;

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-brand-navy text-white lg:block">
        <Container>
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                +91 98765 43210
              </span>
              <span className="text-white/40">|</span>
              <span>info@malhotraclasses.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-brand-gold/20 px-3 py-0.5 text-brand-gold-light font-medium">
                🎓 Admissions Open 2026–27
              </span>
              <Link to="/admissions" className="transition-colors hover:text-brand-gold">
                Apply Now →
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <motion.header
        initial={false}
        animate={{ y: isHidden ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'glass-light shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Malhotra Classes — Home"
            >
              <img
                src="/logo.png"
                alt="Malhotra Classes"
                className="h-16 w-auto lg:h-20"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        'text-text-primary hover:text-brand-gold hover:bg-brand-gold/5',
                        activeDropdown === item.label && 'text-brand-gold bg-brand-gold/5'
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        'text-text-primary hover:text-brand-gold hover:bg-brand-gold/5',
                        location.pathname === item.href && 'text-brand-gold'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          'absolute left-0 top-full z-50 mt-1 rounded-xl bg-white p-2 shadow-xl border border-border-default',
                          item.label === 'Courses' ? 'w-[480px] grid grid-cols-2 gap-0.5' : 'w-56'
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-brand-gold/5 hover:text-brand-gold"
                          >
                            {child.icon && courseIcons[child.icon] && (
                              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                                {courseIcons[child.icon]}
                              </span>
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side CTAs */}
            <div className="flex items-center gap-2">
              <button
                className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-tertiary hover:text-text-primary"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => window.location.href = '/admissions'}
              >
                Book Free Demo
              </Button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-text-primary transition-colors hover:bg-surface-tertiary lg:hidden"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Navigation */}
      {isMobile && (
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          items={NAV_ITEMS}
        />
      )}
    </>
  );
}
