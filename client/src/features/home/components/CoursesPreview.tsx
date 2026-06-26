import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useIntersection } from '@/hooks/useIntersection';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';

const FEATURED_COURSES = [
  {
    title: 'Class 9–10 Board Preparation',
    slug: 'class-9-10',
    board: 'CBSE / HBSE',
    description: 'Comprehensive preparation for Class 9 and 10 board exams with focus on conceptual clarity and exam strategies.',
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    duration: '12 Months',
    batchSize: '25 Students',
    rating: 4.9,
    popular: true,
  },
  {
    title: 'Class 11–12 Board Preparation',
    slug: 'class-11-12',
    board: 'CBSE / HBSE',
    description: 'Expert coaching for Class 11–12 board exams in Science and Commerce streams with dedicated faculty.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    duration: '24 Months',
    batchSize: '20 Students',
    rating: 4.8,
    popular: false,
  },
  {
    title: 'JEE Foundation Course',
    slug: 'jee-foundation',
    board: 'Competitive',
    description: 'Build a strong foundation for JEE Main and Advanced with our structured programme starting from Class 8.',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    duration: '24 Months',
    batchSize: '15 Students',
    rating: 4.9,
    popular: true,
  },
  {
    title: 'NEET Foundation Course',
    slug: 'neet-foundation',
    board: 'Competitive',
    description: 'Comprehensive NEET preparation with expert Biology, Chemistry, and Physics coaching from Class 9 onwards.',
    subjects: ['Biology', 'Chemistry', 'Physics'],
    duration: '24 Months',
    batchSize: '15 Students',
    rating: 4.8,
    popular: false,
  },
  {
    title: 'Class 6–8 Foundation',
    slug: 'class-6-8',
    board: 'CBSE / HBSE',
    description: 'Strong academic foundation for middle-school students with focus on reasoning, concepts, and study habits.',
    subjects: ['Mathematics', 'Science', 'English'],
    duration: '12 Months',
    batchSize: '30 Students',
    rating: 4.7,
    popular: false,
  },
  {
    title: 'Olympiad & NTSE Preparation',
    slug: 'olympiad-ntse',
    board: 'Competitive',
    description: 'Specialised coaching for Science Olympiad, Maths Olympiad, and NTSE with focus on analytical problem solving.',
    subjects: ['Mathematics', 'Science', 'Mental Ability'],
    duration: '6 Months',
    batchSize: '15 Students',
    rating: 4.9,
    popular: true,
  },
];

/**
 * Featured courses preview with horizontal scroll cards.
 */
export function CoursesPreview() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding" aria-label="Our courses">
      <Container>
        <SectionHeading
          subtitle="Our Courses"
          title="Programmes Designed for Success"
          description="From foundational learning to competitive exam mastery — choose the right path for your academic journey."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={`/courses/${course.slug}`}
                className="group block h-full rounded-2xl border border-border-default bg-white p-6 transition-all duration-300 hover:border-brand-gold/30 hover:shadow-xl"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <Badge variant={course.popular ? 'gold' : 'default'} size="md">
                    {course.board}
                  </Badge>
                  {course.popular && (
                    <Badge variant="success" size="sm">Popular</Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-text-primary font-heading group-hover:text-brand-gold transition-colors">
                  {course.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-2">
                  {course.description}
                </p>

                {/* Subjects */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {course.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-md bg-surface-tertiary px-2 py-0.5 text-xs text-text-secondary"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between border-t border-border-default pt-4 text-xs text-text-tertiary">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {course.batchSize}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-medium text-brand-gold-dark">
                    <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                    {course.rating}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link to="/courses">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All Courses
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
