import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Trophy, Users, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us — Malhotra Classes Rohtak"
        description="Learn about the history, vision, and mission of Malhotra Classes. Rohtak's premier coaching institute for CBSE, JEE, and NEET preparation."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'About Us' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Nurturing <span className="text-brand-gold">Excellence</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Malhotra Classes is the modern cornerstone of academic success in Rohtak, committed to transforming students into confident achievers.
            </p>
          </div>
        </Container>
      </div>

      {/* Our Story */}
      <div className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-text-primary font-heading sm:text-4xl">
                Our Story
              </h2>
              <div className="prose prose-lg text-text-secondary">
                <p>
                  Founded by passionate educators, Malhotra Classes was built on a single, unwavering commitment: providing quality education that goes beyond rote memorisation. We recognized a need for a modern, highly-personalized approach to competitive exam coaching in Rohtak.
                </p>
                <p>
                  We are deeply invested in adapting teaching methodologies to keep pace with changing examination patterns, integrating modern technology while providing the rigorous personal mentorship that defines true academic excellence.
                </p>
                <p>
                  Today, Malhotra Classes stands ready to help aspiring students achieve their dreams of becoming NTSE scholars, successful IIT/NEET aspirants, and board exam toppers.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 to-brand-gold/40 mix-blend-multiply" />
              <div className="h-full w-full bg-surface-secondary flex items-center justify-center">
                <span className="text-text-tertiary">Modern Campus Photo</span>
              </div>
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20 text-white">
                <p className="font-accent text-4xl font-bold text-brand-gold">100%</p>
                <p className="font-medium">Commitment to Success</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Vision, Mission, Values */}
      <div className="section-padding bg-surface-secondary">
        <Container>
          <SectionHeading
            subtitle="Our Core Philosophy"
            title="What Drives Us"
            description="Our vision, mission, and core values serve as the guiding light for everything we do at Malhotra Classes."
          />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border-default bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/10">
                <Eye className="h-8 w-8 text-brand-gold-dark" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-text-primary font-heading">Our Vision</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                To be the most trusted educational institution in India, known for academic excellence, ethical practices, and the holistic development of every student who walks through our doors.
              </p>
            </div>

            <div className="rounded-2xl border border-border-default bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-emerald/10">
                <Target className="h-8 w-8 text-brand-emerald-dark" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-text-primary font-heading">Our Mission</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                To ignite the spark of curiosity in young minds, build strong conceptual foundations, and equip students with the analytical skills required to excel in competitive exams and in life.
              </p>
            </div>

            <div className="rounded-2xl border border-border-default bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Heart className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-text-primary font-heading">Our Values</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Integrity, dedication, and student-centricity. We believe that every child is unique, and with the right guidance, anyone can achieve academic greatness.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Us Detailed */}
      <div className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-text-primary font-heading">
                The Malhotra Advantage
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
                    <Trophy className="h-6 w-6 text-brand-gold-dark" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-text-primary font-heading">Expert Mentorship</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Our faculty consists of highly dedicated subject experts who are committed to producing top rankers in CBSE, HBSE, JEE, and NEET.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
                    <Users className="h-6 w-6 text-brand-gold-dark" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-text-primary font-heading">Personalised Attention</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      With small batch sizes, we ensure that every student's weaknesses are identified and addressed through personal mentoring.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
                    <BookOpen className="h-6 w-6 text-brand-gold-dark" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-text-primary font-heading">Comprehensive Study Material</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Meticulously crafted notes, DPPs, and mock test papers that align perfectly with the latest examination patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-navy p-8 text-white lg:p-12">
              <h3 className="mb-4 text-2xl font-bold font-heading">Start Your Journey</h3>
              <p className="mb-8 text-white/80">
                Experience the Malhotra Classes difference. Secure your academic future with Rohtak's premier coaching institute.
              </p>
              <div className="space-y-4">
                <Link to="/courses" className="block">
                  <Button variant="gold" fullWidth size="lg">
                    Explore Our Courses
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="outline" fullWidth size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
