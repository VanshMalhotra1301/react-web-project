import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useIntersection } from '@/hooks/useIntersection';
import { GraduationCap, Users, Award, BookOpen, TrendingUp, Clock } from 'lucide-react';
import { formatIndianNumber } from '@/utils/formatters';

const COUNTERS = [
  { icon: Clock, value: 20, suffix: '+', label: 'Years of Excellence', color: 'from-brand-gold/20 to-brand-gold/5' },
  { icon: Users, value: 15000, suffix: '+', label: 'Students Mentored', color: 'from-brand-emerald/20 to-brand-emerald/5' },
  { icon: Award, value: 500, suffix: '+', label: 'Board Toppers', color: 'from-blue-500/20 to-blue-500/5' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Success Rate', color: 'from-purple-500/20 to-purple-500/5' },
  { icon: BookOpen, value: 50, suffix: '+', label: 'Expert Courses', color: 'from-brand-coral/20 to-brand-coral/5' },
  { icon: GraduationCap, value: 200, suffix: '+', label: 'Selections in JEE/NEET', color: 'from-teal-500/20 to-teal-500/5' },
];

function AnimatedNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  const display = target >= 1000 ? formatIndianNumber(count) : count.toString();

  return (
    <span className="font-accent text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
      {display}{suffix}
    </span>
  );
}

/**
 * Scroll-triggered animated counter section with icons and labels.
 */
export function AnimatedCounters() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-surface-secondary" aria-label="Key statistics">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {COUNTERS.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${counter.color} transition-transform duration-300 group-hover:scale-110`}>
                <counter.icon className="h-6 w-6 text-text-primary" />
              </div>
              <AnimatedNumber target={counter.value} suffix={counter.suffix} isVisible={isVisible} />
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-text-tertiary sm:text-sm">
                {counter.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
