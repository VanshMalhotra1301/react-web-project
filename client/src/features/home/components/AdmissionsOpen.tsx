import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Animated admission banner with countdown urgency.
 */
export function AdmissionsOpen() {
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 8, minutes: 32, seconds: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return prev;
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="relative -mt-12 z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl gradient-gold p-1 shadow-gold"
        >
          <div className="rounded-xl bg-brand-navy p-6 sm:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/20">
                  <Sparkles className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-heading sm:text-2xl">
                    Admissions Open for 2026–27
                  </h2>
                  <p className="text-sm text-white/60">Limited seats available. Enrol now to secure your spot!</p>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex gap-3">
                {timeUnits.map((unit) => (
                  <div key={unit.label} className="text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 sm:h-16 sm:w-16">
                      <span className="font-accent text-xl font-bold text-brand-gold sm:text-2xl">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-white/40">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/admissions">
                <Button variant="gold" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
