import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/classroom.jpg', alt: 'Modern Classroom', span: 'col-span-1 row-span-1' },
  { id: 2, src: '/images/gallery/awards.jpg', alt: 'Annual Award Ceremony', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 3, src: '/images/gallery/library.jpg', alt: 'Digital Library', span: 'col-span-1 row-span-1' },
  { id: 4, src: '/images/gallery/lab.jpg', alt: 'Physics Laboratory', span: 'col-span-1 row-span-1' },
  { id: 5, src: '/images/gallery/seminar.jpg', alt: 'Career Guidance Seminar', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 6, src: '/images/gallery/students.jpg', alt: 'Students Group Discussion', span: 'col-span-1 row-span-1' },
];

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Campus Gallery — Malhotra Classes"
        description="Take a visual tour of our state-of-the-art campus, modern classrooms, library, and the vibrant student life at Malhotra Classes."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Gallery' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Life at <span className="text-brand-gold">Malhotra Classes</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              A glimpse into our world-class infrastructure, interactive learning environment, and the vibrant culture of excellence that defines our campus.
            </p>
          </div>
        </Container>
      </div>

      <div className="section-padding bg-surface-secondary">
        <Container>
          <SectionHeading
            subtitle="Visual Tour"
            title="Our Infrastructure & Events"
            description="We provide a conducive environment for focused learning, equipped with modern educational technology."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-3 lg:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-surface-tertiary ${img.span}`}
              >
                {/* Fallback visual since actual images might not exist */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/5 text-brand-navy/20">
                  <span className="font-heading font-bold">{img.alt}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-full translate-y-4 p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-bold font-heading text-lg">{img.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
