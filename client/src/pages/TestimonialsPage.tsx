import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { TestimonialsCarousel } from '@/features/home/components/TestimonialsCarousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const VIDEO_TESTIMONIALS = [
  { id: 1, name: 'Aarav Kumar', exam: 'JEE Advanced Rank 124', thumbnail: '/images/testimonials/v1-thumb.jpg' },
  { id: 2, name: 'Priya Sharma', exam: 'NEET AIR 89', thumbnail: '/images/testimonials/v2-thumb.jpg' },
  { id: 3, name: 'Rahul Verma', exam: 'CBSE 12th District Topper', thumbnail: '/images/testimonials/v3-thumb.jpg' },
];

export default function TestimonialsPage() {
  return (
    <>
      <SEOHead
        title="Student Testimonials & Reviews — Malhotra Classes"
        description="Read what our successful students and their parents have to say about their experience with Malhotra Classes Rohtak."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Testimonials' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Stories of <span className="text-brand-gold">Transformation</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              The true measure of our success lies in the success of our students. Hear directly from the achievers who turned their dreams into reality with us.
            </p>
          </div>
        </Container>
      </div>

      <div className="section-padding">
        <TestimonialsCarousel />
      </div>

      <div className="section-padding bg-surface-secondary">
        <Container>
          <SectionHeading
            subtitle="Watch Their Journey"
            title="Video Testimonials"
            description="Listen to the first-hand experiences of our top rankers as they share their preparation strategies and journey with Malhotra Classes."
          />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_TESTIMONIALS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border-default bg-white shadow-card"
              >
                <div className="relative aspect-video w-full bg-surface-tertiary flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 pl-1 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold font-heading">{video.name}</h3>
                  <p className="text-sm text-white/80">{video.exam}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
