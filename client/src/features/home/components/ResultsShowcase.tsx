import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight, TrendingUp, Award } from 'lucide-react';

const RESULTS = [
  { name: 'Aarav Sharma', score: '99.2%', rank: 'District Topper', exam: 'CBSE Class 12', year: '2025' },
  { name: 'Priya Verma', score: '98.8%', rank: 'School Topper', exam: 'CBSE Class 10', year: '2025' },
  { name: 'Rohan Gupta', score: 'AIR 342', rank: 'JEE Advanced', exam: 'JEE Advanced', year: '2025' },
  { name: 'Sneha Malik', score: 'AIR 189', rank: 'NEET UG', exam: 'NEET', year: '2025' },
  { name: 'Arjun Yadav', score: '97.6%', rank: 'City Topper', exam: 'HBSE Class 12', year: '2025' },
  { name: 'Kavya Jain', score: 'KVPY Fellow', rank: 'National Level', exam: 'KVPY', year: '2025' },
];

const HIGHLIGHTS = [
  { value: '45+', label: 'Students Scored 95%+' },
  { value: '12', label: 'District Toppers' },
  { value: '8', label: 'JEE/NEET Selections' },
  { value: '98%', label: 'Pass Rate' },
];

/**
 * Results showcase with toppers cards and highlight stats.
 */
export function ResultsShowcase() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding" aria-label="Our results">
      <Container>
        <SectionHeading
          subtitle="Proven Track Record"
          title="Our Students Shine Year After Year"
          description="Consistency in producing top rankers across board and competitive exams is what sets Malhotra Classes apart."
        />

        {/* Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-4 text-center"
            >
              <p className="font-accent text-2xl font-bold text-brand-gold-dark sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-secondary">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Topper Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((result, index) => (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              className="group flex items-center gap-4 rounded-2xl border border-border-default bg-white p-5 transition-all hover:border-brand-gold/30 hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5">
                <Award className="h-6 w-6 text-brand-gold" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-text-primary font-heading truncate">{result.name}</h4>
                <p className="text-sm text-text-secondary">{result.exam} • {result.year}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-emerald/10 px-2 py-0.5 text-xs font-semibold text-brand-emerald-dark">
                    <TrendingUp className="h-3 w-3" />
                    {result.score}
                  </span>
                  <span className="text-xs text-text-tertiary">{result.rank}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <Link to="/results">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All Results
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
