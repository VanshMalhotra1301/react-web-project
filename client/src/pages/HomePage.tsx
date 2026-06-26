import { SEOHead } from '@/components/seo/SEOHead';
import { getOrganizationSchema, getLocalBusinessSchema, getSearchActionSchema } from '@/utils/seo';
import { HeroSection } from '@/features/home/components/HeroSection';
import { AdmissionsOpen } from '@/features/home/components/AdmissionsOpen';
import { AnimatedCounters } from '@/features/home/components/AnimatedCounters';
import { WhyChooseUs } from '@/features/home/components/WhyChooseUs';
import { TeachingMethodology } from '@/features/home/components/TeachingMethodology';
import { CoursesPreview } from '@/features/home/components/CoursesPreview';
import { TopFaculty } from '@/features/home/components/TopFaculty';
import { ResultsShowcase } from '@/features/home/components/ResultsShowcase';
import { TestimonialsCarousel } from '@/features/home/components/TestimonialsCarousel';
import { FAQSection } from '@/features/home/components/FAQSection';
import { LocationSection } from '@/features/home/components/LocationSection';
import { CTABanner } from '@/features/home/components/CTABanner';

/**
 * Home page — the flagship landing experience for Malhotra Classes.
 */
export default function HomePage() {
  const schemas = [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getSearchActionSchema(),
  ];

  return (
    <>
      <SEOHead
        title="Best Coaching Institute in Rohtak — CBSE, HBSE, JEE, NEET Preparation"
        description="Malhotra Classes is Rohtak's leading coaching institute. Expert faculty, proven results for CBSE, HBSE, ICSE, JEE, NEET, and Olympiad preparation. Book your free demo class today!"
        keywords={[
          'best coaching institute in Rohtak',
          'tuition in Rohtak',
          'CBSE coaching Rohtak',
          'HBSE coaching Rohtak',
          'JEE coaching Rohtak',
          'NEET coaching Rohtak',
          'maths tuition Rohtak',
          'science tuition Rohtak',
        ]}
        jsonLd={schemas}
      />

      <HeroSection />
      <AdmissionsOpen />
      <AnimatedCounters />
      <WhyChooseUs />
      <TeachingMethodology />
      <CoursesPreview />
      <TopFaculty />
      <ResultsShowcase />
      <TestimonialsCarousel />
      <FAQSection />
      <LocationSection />
      <CTABanner />
    </>
  );
}
