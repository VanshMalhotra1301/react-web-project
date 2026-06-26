import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import { BookOpen, FileText, BarChart, MessageCircle, GraduationCap } from 'lucide-react';

const STEPS = [
  {
    icon: BookOpen,
    step: '01',
    title: 'Concept Building',
    description: 'We start with strong foundational concepts using real-world examples, interactive discussions, and engaging visual aids.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Practice & Application',
    description: 'Students solve curated problem sets of increasing difficulty, developing speed, accuracy, and analytical thinking.',
  },
  {
    icon: BarChart,
    step: '03',
    title: 'Regular Assessment',
    description: 'Weekly chapter tests, monthly cumulative exams, and mock boards help us track each student\'s progress.',
  },
  {
    icon: MessageCircle,
    step: '04',
    title: 'Doubt Resolution',
    description: 'Dedicated doubt-clearing sessions ensure no question goes unanswered. Extra help is always available after class.',
  },
  {
    icon: GraduationCap,
    step: '05',
    title: 'Exam Strategy',
    description: 'Board and competitive exam strategies, time management techniques, and previous year analysis prepare students for exam day.',
  },
];

/**
 * Teaching Methodology — visual step-by-step process flow.
 */
export function TeachingMethodology() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-surface-secondary mesh-bg" aria-label="Our teaching methodology">
      <Container>
        <SectionHeading
          subtitle="Our Methodology"
          title="How We Teach for Success"
          description="Our five-step teaching methodology is designed to transform understanding into excellence, one concept at a time."
        />

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="absolute left-0 right-0 top-[72px] hidden h-0.5 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative text-center"
              >
                {/* Step number with icon */}
                <div className="relative mx-auto mb-5">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-card border border-border-default transition-all duration-300 group-hover:border-brand-gold/30 group-hover:shadow-xl">
                    <step.icon className="h-8 w-8 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                    {step.step}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-text-primary font-heading">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
