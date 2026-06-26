import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCourseBySlug } from '@/data/courses';
import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Clock, Users, BookOpen, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { getCourseSchema } from '@/utils/seo';
import { Helmet } from 'react-helmet-async';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const schema = getCourseSchema({
    name: course.title,
    description: course.description,
    providerName: 'Malhotra Classes',
  });

  return (
    <>
      <SEOHead
        title={`${course.title} — Malhotra Classes`}
        description={course.description}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Courses', href: '/courses' },
              { label: course.title }
            ]}
            className="mb-8 text-white/70"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge variant="gold" size="md">{course.category.toUpperCase()}</Badge>
                {course.board && <Badge variant="outline" size="md" className="border-white/20 text-white">{course.board}</Badge>}
              </div>
              <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl">
                {course.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions">
                  <Button variant="gold" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Enrol Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                  leftIcon={<Download className="h-4 w-4" />}
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:ml-auto lg:w-full lg:max-w-md">
              <h3 className="mb-6 text-xl font-semibold text-white font-heading">Course Overview</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/60">Duration</p>
                    <p className="text-lg font-semibold text-white">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-emerald/20 text-brand-emerald">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/60">Batch Size</p>
                    <p className="text-lg font-semibold text-white">{course.batchSize}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/60">Eligibility</p>
                    <p className="text-lg font-semibold text-white">{course.eligibility}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-text-primary font-heading sm:text-3xl">
                About the Programme
              </h2>
              <div className="prose prose-lg max-w-none text-text-secondary">
                <p className="whitespace-pre-line leading-relaxed">
                  {course.longDescription}
                </p>
              </div>

              <h2 className="mb-6 mt-12 text-2xl font-bold text-text-primary font-heading sm:text-3xl">
                Subjects Covered
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.subjects.map(subject => (
                  <div key={subject} className="flex items-center gap-2 rounded-xl border border-border-default bg-surface-secondary px-4 py-3 font-medium text-text-primary">
                    <BookOpen className="h-4 w-4 text-brand-gold" />
                    {subject}
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12 text-2xl font-bold text-text-primary font-heading sm:text-3xl">
                Key Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {course.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 rounded-xl bg-surface-secondary p-4"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-emerald" />
                    <span className="font-medium text-text-primary">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar Sticky CTA */}
            <div className="relative">
              <div className="sticky top-28 rounded-2xl border border-border-default bg-white p-6 shadow-card">
                <h3 className="mb-2 text-xl font-bold text-text-primary font-heading">
                  Ready to excel?
                </h3>
                <p className="mb-6 text-sm text-text-secondary">
                  Join the most trusted coaching institute in Rohtak and secure your future.
                </p>
                <div className="space-y-3">
                  <Link to="/admissions" className="block">
                    <Button variant="primary" fullWidth size="lg">
                      Apply for Admission
                    </Button>
                  </Link>
                  <Button variant="outline" fullWidth size="lg">
                    Request Call Back
                  </Button>
                </div>
                <div className="mt-6 border-t border-border-default pt-6 text-center">
                  <p className="text-sm font-medium text-text-primary">Have questions?</p>
                  <a href="tel:+919876543210" className="mt-1 block font-accent text-xl font-bold text-brand-navy">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
