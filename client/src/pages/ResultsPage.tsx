import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResultsShowcase } from '@/features/home/components/ResultsShowcase';
import { Trophy, Star, Target } from 'lucide-react';

export default function ResultsPage() {
  return (
    <>
      <SEOHead
        title="Our Results & Success Stories — Malhotra Classes"
        description="Explore the outstanding academic results achieved by students of Malhotra Classes in JEE, NEET, and CBSE Board Exams."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Results' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Celebrating <span className="text-brand-gold">Excellence</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Our consistent track record of producing city toppers and securing top ranks in national-level competitive exams is a testament to our unmatched teaching methodology.
            </p>
          </div>
        </Container>
      </div>

      {/* Key Stats Overview */}
      <div className="-mt-10 relative z-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border-default bg-white p-6 shadow-card text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold-dark">
                <Trophy className="h-7 w-7" />
              </div>
              <p className="font-accent text-3xl font-bold text-brand-navy">500+</p>
              <p className="mt-1 text-sm font-medium text-text-secondary">IIT/NIT Selections</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-border-default bg-white p-6 shadow-card text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald-dark">
                <Target className="h-7 w-7" />
              </div>
              <p className="font-accent text-3xl font-bold text-brand-navy">300+</p>
              <p className="mt-1 text-sm font-medium text-text-secondary">Medical Selections</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl border border-border-default bg-white p-6 shadow-card text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Star className="h-7 w-7" />
              </div>
              <p className="font-accent text-3xl font-bold text-brand-navy">1000+</p>
              <p className="mt-1 text-sm font-medium text-text-secondary">Board Toppers (95%+)</p>
            </motion.div>
          </div>
        </Container>
      </div>

      <div className="section-padding">
        <ResultsShowcase />
      </div>

      <div className="section-padding bg-surface-secondary">
        <Container>
          <SectionHeading
            subtitle="Previous Years"
            title="Consistent Legacy of Success"
            description="Our results over the past 5 years demonstrate our commitment to academic excellence across all disciplines."
          />
          
          <div className="overflow-x-auto rounded-2xl border border-border-default bg-white shadow-sm">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-surface-tertiary">
                <tr>
                  <th className="px-6 py-4 font-bold text-text-primary font-heading">Year</th>
                  <th className="px-6 py-4 font-bold text-text-primary font-heading">JEE (Main + Adv)</th>
                  <th className="px-6 py-4 font-bold text-text-primary font-heading">NEET</th>
                  <th className="px-6 py-4 font-bold text-text-primary font-heading">CBSE 12th (90%+)</th>
                  <th className="px-6 py-4 font-bold text-text-primary font-heading">CBSE 10th (90%+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                <tr className="transition-colors hover:bg-surface-secondary">
                  <td className="px-6 py-4 font-medium text-text-primary">2025</td>
                  <td className="px-6 py-4 text-text-secondary">85 Selections</td>
                  <td className="px-6 py-4 text-text-secondary">42 Selections</td>
                  <td className="px-6 py-4 text-text-secondary">156 Students</td>
                  <td className="px-6 py-4 text-text-secondary">210 Students</td>
                </tr>
                <tr className="transition-colors hover:bg-surface-secondary">
                  <td className="px-6 py-4 font-medium text-text-primary">2024</td>
                  <td className="px-6 py-4 text-text-secondary">78 Selections</td>
                  <td className="px-6 py-4 text-text-secondary">35 Selections</td>
                  <td className="px-6 py-4 text-text-secondary">142 Students</td>
                  <td className="px-6 py-4 text-text-secondary">195 Students</td>
                </tr>
                <tr className="transition-colors hover:bg-surface-secondary">
                  <td className="px-6 py-4 font-medium text-text-primary">2023</td>
                  <td className="px-6 py-4 text-text-secondary">65 Selections</td>
                  <td className="px-6 py-4 text-text-secondary">30 Selections</td>
                  <td className="px-6 py-4 text-text-secondary">120 Students</td>
                  <td className="px-6 py-4 text-text-secondary">180 Students</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </>
  );
}
