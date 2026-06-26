import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import { ChevronDown } from 'lucide-react';
import { getFAQSchema } from '@/utils/seo';
import { Helmet } from 'react-helmet-async';

const FAQS = [
  {
    question: 'What courses does Malhotra Classes offer?',
    answer: 'We offer comprehensive coaching for Class 6 through 12 (CBSE, HBSE, and ICSE boards), JEE Foundation, NEET Foundation, Olympiad, NTSE, and CUET preparation. We cover subjects including Mathematics, Science, Physics, Chemistry, Biology, English, and Computer Science.',
  },
  {
    question: 'What is the batch size at Malhotra Classes?',
    answer: 'We maintain small batch sizes of 15–30 students to ensure personalised attention and effective learning. Competitive exam batches are limited to 15 students, while regular board preparation batches accommodate up to 25–30 students.',
  },
  {
    question: 'How can I enrol my child at Malhotra Classes?',
    answer: 'You can enrol by visiting our centre near Model Town, Rohtak, calling us at +91 98765 43210, or filling out the online admission form on our website. We also offer a free demo class so your child can experience our teaching methodology before committing.',
  },
  {
    question: 'Do you offer scholarships for meritorious students?',
    answer: 'Yes! We offer merit-based scholarships of up to 50% on tuition fees based on academic performance, entrance test scores, and financial need. Students can apply for scholarships through our dedicated scholarship programme.',
  },
  {
    question: 'What is the fee structure?',
    answer: 'Our fee structure varies by course and class level. We offer flexible payment options including monthly, quarterly, and annual plans. EMI options are also available. Please visit our Fee Structure page or contact us for detailed fee information.',
  },
  {
    question: 'Do you provide study material?',
    answer: 'Yes, we provide comprehensive study material including chapter-wise notes, practice worksheets, previous year papers with solutions, and topic-wise question banks. Free downloadable notes are also available on our website for select topics.',
  },
  {
    question: 'What are the timings of classes?',
    answer: 'We offer flexible batch timings to accommodate school schedules: Morning batches (7 AM – 9 AM), Afternoon batches (2 PM – 4 PM), and Evening batches (5 PM – 7 PM). Weekend batches are also available for certain courses.',
  },
  {
    question: 'Do you offer online classes?',
    answer: 'Yes, we offer hybrid learning with both online and offline modes. Our online classes feature live interactive sessions, recorded lectures for revision, digital study material, and online assessments — all accessible from anywhere in Haryana.',
  },
];

/**
 * FAQ accordion with smooth animations and FAQ schema markup.
 */
export function FAQSection() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="section-padding" aria-label="Frequently asked questions">
      {/* FAQ Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema(FAQS))}
        </script>
      </Helmet>

      <Container narrow>
        <SectionHeading
          subtitle="Got Questions?"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about Malhotra Classes, our courses, admissions, and more."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border-default bg-white transition-colors hover:border-brand-gold/20"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
                id={`faq-trigger-${index}`}
                aria-controls={`faq-content-${index}`}
              >
                <span className="pr-4 text-base font-semibold text-text-primary font-heading">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text-tertiary transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-brand-gold' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
