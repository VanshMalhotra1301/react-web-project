import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Trophy, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const HERO_WORDS = [
  'Academic Excellence',
  'Future Leaders',
  'Confident Achievers',
  'Tomorrow\'s Innovators',
];

const FLOATING_STATS = [
  { icon: Trophy, value: 'Expert', label: 'Faculty Members', color: 'text-brand-gold' },
  { icon: Users, value: 'Small', label: 'Batch Sizes', color: 'text-brand-emerald' },
  { icon: BookOpen, value: 'Modern', label: 'Methodology', color: 'text-brand-gold' },
];

/**
 * Full-viewport hero section with animated gradient mesh, typewriter text,
 * floating achievement cards, and premium CTA buttons.
 */
export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden gradient-hero flex items-center" aria-label="Hero">
      {/* Mesh background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-gold/5 blur-[100px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-brand-emerald/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-gold/3 blur-[150px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10 py-20 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-medium text-brand-gold-light">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
                </span>
                Admissions Open for 2026–27
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Shaping{' '}
              <span className="relative">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text-gold"
                >
                  {HERO_WORDS[currentWordIndex]}
                </motion.span>
              </span>
              <br />
              <span className="text-white/90"></span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Rohtak's most trusted coaching institute for{' '}
              <strong className="text-white/80">CBSE, HBSE, ICSE, JEE, NEET, and Olympiad</strong>{' '}
              preparation. Expert faculty, personalised attention, and a track record of producing
              top rankers year after year.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/admissions">
                <Button variant="gold" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Book Free Demo Class
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
                  leftIcon={<BookOpen className="h-4 w-4" />}
                >
                  Explore Courses
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <div>
                <p className="text-sm font-semibold text-white">Join the New Standard of Education</p>
                <p className="text-xs text-white/50">Personalised attention • Modern infrastructure</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating stats cards */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px]">
              {/* Decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full border border-white/5" />
                <div className="absolute h-96 w-96 rounded-full border border-white/3" />
              </div>

              {/* Central logo element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl glass">
                  <img src="/logo.png" alt="" className="h-24 w-24 object-contain" aria-hidden="true" />
                </div>
              </motion.div>

              {/* Floating stat cards */}
              {FLOATING_STATS.map((stat, index) => {
                const positions = [
                  'top-8 left-4',
                  'top-16 right-0',
                  'bottom-12 left-12',
                ];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                    className={`absolute ${positions[index]}`}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                      className="glass rounded-2xl px-5 py-4 shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <div>
                          <p className="font-accent text-2xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/60">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Additional floating element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-4 right-4"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass rounded-2xl px-5 py-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-emerald/20">
                      <Star className="h-5 w-5 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="font-accent text-lg font-bold text-white">100%</p>
                      <p className="text-xs text-white/60">Commitment</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
