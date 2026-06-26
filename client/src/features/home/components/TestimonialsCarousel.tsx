import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    course: 'Class 12 CBSE',
    batch: '2024–25',
    rating: 5,
    text: 'Malhotra Classes transformed my understanding of Physics and Mathematics completely. The faculty explained every concept with such clarity that even the most difficult topics became easy. I scored 97% in my boards, and I owe it all to the dedication of the teachers here.',
    achievement: 'Scored 97% in CBSE Board Exams',
  },
  {
    name: 'Rahul Verma',
    course: 'JEE Foundation',
    batch: '2023–25',
    rating: 5,
    text: 'The JEE foundation course at Malhotra Classes gave me the competitive edge I needed. The problem-solving approach, regular mock tests, and personal mentoring sessions helped me crack JEE Main with an excellent rank. Best coaching in Rohtak, hands down!',
    achievement: 'JEE Main AIR under 500',
  },
  {
    name: 'Mrs. Rekha Gupta',
    course: 'Parent',
    batch: '2024–25',
    rating: 5,
    text: 'As a parent, I was looking for a coaching institute that genuinely cares about students. Malhotra Classes exceeded my expectations. Regular parent-teacher meetings, progress reports, and the personal attention my daughter received were remarkable. Her confidence has soared.',
    achievement: 'Daughter scored 95%+ in boards',
  },
  {
    name: 'Amit Kumar',
    course: 'NEET Foundation',
    batch: '2023–25',
    rating: 5,
    text: 'The Biology and Chemistry faculty at Malhotra Classes are exceptional. Their teaching methodology for NEET preparation is systematic and thorough. The regular assessments and doubt-clearing sessions ensured I was always well-prepared. Thank you for believing in me!',
    achievement: 'NEET UG Selection — 650+ Score',
  },
  {
    name: 'Kavya Jain',
    course: 'Class 10 HBSE',
    batch: '2024–25',
    rating: 5,
    text: 'I joined Malhotra Classes in Class 9 and the improvement in my academics has been tremendous. The study material, regular tests, and the supportive environment made learning enjoyable. I topped my school and scored 98% in HBSE boards!',
    achievement: 'HBSE Class 10 School Topper',
  },
];

/**
 * Testimonials carousel with ratings, quotes, and navigation.
 */
export function TestimonialsCarousel() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[currentIndex]!;

  return (
    <section ref={ref} className="section-padding bg-surface-secondary" aria-label="Student testimonials">
      <Container>
        <SectionHeading
          subtitle="What They Say"
          title="Voices of Success"
          description="Hear from the students, parents, and professionals who have experienced the Malhotra Classes difference."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl bg-white p-8 shadow-card sm:p-12">
            {/* Quote icon */}
            <Quote className="absolute left-6 top-6 h-10 w-10 text-brand-gold/15 sm:left-8 sm:top-8 sm:h-14 sm:w-14" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="mb-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-gold/10 text-lg font-bold text-brand-gold-dark">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary font-heading">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.course} • {testimonial.batch}</p>
                    {testimonial.achievement && (
                      <p className="mt-0.5 text-xs font-medium text-brand-emerald-dark">
                        🏆 {testimonial.achievement}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-brand-gold'
                        : 'w-2 bg-border-default hover:bg-border-hover'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default text-text-secondary transition-colors hover:border-brand-gold hover:text-brand-gold"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default text-text-secondary transition-colors hover:border-brand-gold hover:text-brand-gold"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
