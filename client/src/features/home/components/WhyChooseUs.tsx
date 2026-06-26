import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import {
  GraduationCap,
  Users,
  Brain,
  Target,
  Lightbulb,
  ShieldCheck,
  Headphones,
  BarChart3,
} from 'lucide-react';

const REASONS = [
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description: 'Learn from Rohtak\'s finest educators with decades of combined experience in competitive and board exam coaching.',
    color: 'bg-brand-gold/10 text-brand-gold-dark',
  },
  {
    icon: Target,
    title: 'Result-Oriented Approach',
    description: 'Our proven methodology has consistently delivered top rankers across CBSE, HBSE, JEE, NEET, and Olympiad examinations.',
    color: 'bg-brand-emerald/10 text-brand-emerald-dark',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'Limited students per batch ensures personalised attention, doubt resolution, and active participation for every learner.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Brain,
    title: 'Conceptual Learning',
    description: 'We focus on building strong fundamentals through conceptual clarity rather than rote memorisation for lasting understanding.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: BarChart3,
    title: 'Regular Assessments',
    description: 'Weekly tests, monthly exams, and detailed performance analytics help students track progress and improve continuously.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Lightbulb,
    title: 'Modern Infrastructure',
    description: 'Air-conditioned classrooms, digital boards, a well-stocked library, and dedicated doubt-clearing sessions enhance the experience.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our student support team is available for academic queries, career counselling, and parent communication throughout the year.',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted by Parents',
    description: 'Over 15,000 families have trusted Malhotra Classes for their children\'s academic journey across two decades.',
    color: 'bg-brand-gold/10 text-brand-gold-dark',
  },
];

/**
 * Why Choose Us — bento grid of value propositions.
 */
export function WhyChooseUs() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding" aria-label="Why choose Malhotra Classes">
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Malhotra Classes Advantage"
          description="Discover what makes us Rohtak's most trusted name in education. Every aspect of our institute is designed for your success."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-border-default bg-white p-6 transition-all duration-300 hover:border-brand-gold/30 hover:shadow-xl"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${reason.color} transition-transform duration-300 group-hover:scale-110`}>
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary font-heading">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
