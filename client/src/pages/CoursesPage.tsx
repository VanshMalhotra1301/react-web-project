import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { COURSES } from '@/data/courses';
import { ArrowRight, Clock, Users } from 'lucide-react';

export default function CoursesPage() {
  return (
    <>
      <SEOHead
        title="Our Courses — CBSE, JEE, NEET Coaching in Rohtak"
        description="Explore our comprehensive range of courses for Class 6-12, JEE Foundation, NEET Foundation, and Olympiad preparation at Malhotra Classes."
      />
      
      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Courses' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Programmes Designed for <span className="text-brand-gold">Excellence</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Whether you are building a strong foundation in middle school, preparing for crucial board exams, or aiming for top engineering and medical colleges, we have the right programme for you.
            </p>
          </div>
        </Container>
      </div>

      <div className="section-padding bg-surface-secondary">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-default bg-white shadow-card transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 w-full bg-gradient-to-br from-brand-navy/10 to-brand-gold/10">
                  <div className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold text-brand-navy/20">
                    {course.title}
                  </div>
                  {course.popular && (
                    <div className="absolute right-4 top-4">
                      <Badge variant="gold">Popular</Badge>
                    </div>
                  )}
                  {course.board && (
                    <div className="absolute left-4 top-4">
                      <Badge variant="default">{course.board}</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-text-primary font-heading line-clamp-2">
                    {course.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                    {course.description}
                  </p>

                  {/* Meta stats */}
                  <div className="mb-6 grid grid-cols-2 gap-4 border-y border-border-default py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-tertiary text-text-secondary">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">Duration</p>
                        <p className="text-sm font-medium text-text-primary">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-tertiary text-text-secondary">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">Batch Size</p>
                        <p className="text-sm font-medium text-text-primary">{course.batchSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <Link
                    to={`/courses/${course.slug}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-navy-light"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
