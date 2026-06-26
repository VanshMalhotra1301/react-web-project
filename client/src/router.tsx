import { lazy, Suspense, type ReactElement } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

/* ── Page-level loading fallback ── */
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-brand-gold/20 border-t-brand-gold" />
        <p className="text-sm text-text-tertiary">Loading...</p>
      </div>
    </div>
  );
}

/* ── Lazy-loaded page components ── */
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const CourseDetailPage = lazy(() => import('@/pages/CourseDetailPage'));
const FacultyPage = lazy(() => import('@/pages/FacultyPage'));
const ResultsPage = lazy(() => import('@/pages/ResultsPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const AchievementsPage = lazy(() => import('@/pages/AchievementsPage'));
const AdmissionsPage = lazy(() => import('@/pages/AdmissionsPage'));
const FeeStructurePage = lazy(() => import('@/pages/FeeStructurePage'));
const ScholarshipsPage = lazy(() => import('@/pages/ScholarshipsPage'));
const CareerGuidancePage = lazy(() => import('@/pages/CareerGuidancePage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'));
const FreeNotesPage = lazy(() => import('@/pages/FreeNotesPage'));
const StudyMaterialPage = lazy(() => import('@/pages/StudyMaterialPage'));
const MockTestsPage = lazy(() => import('@/pages/MockTestsPage'));
const OnlineClassesPage = lazy(() => import('@/pages/OnlineClassesPage'));
const OfflineClassesPage = lazy(() => import('@/pages/OfflineClassesPage'));
const FAQsPage = lazy(() => import('@/pages/FAQsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const RefundPolicyPage = lazy(() => import('@/pages/RefundPolicyPage'));
const SitemapPage = lazy(() => import('@/pages/SitemapPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/* ── Wrap each lazy page in Suspense ── */
function withSuspense(Component: React.LazyExoticComponent<() => ReactElement>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </Suspense>
  );
}

/* ── Route configuration ── */
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'courses', element: withSuspense(CoursesPage) },
      { path: 'courses/:slug', element: withSuspense(CourseDetailPage) },
      { path: 'faculty', element: withSuspense(FacultyPage) },
      { path: 'results', element: withSuspense(ResultsPage) },
      { path: 'testimonials', element: withSuspense(TestimonialsPage) },
      { path: 'gallery', element: withSuspense(GalleryPage) },
      { path: 'achievements', element: withSuspense(AchievementsPage) },
      { path: 'admissions', element: withSuspense(AdmissionsPage) },
      { path: 'fee-structure', element: withSuspense(FeeStructurePage) },
      { path: 'scholarships', element: withSuspense(ScholarshipsPage) },
      { path: 'career-guidance', element: withSuspense(CareerGuidancePage) },
      { path: 'blog', element: withSuspense(BlogPage) },
      { path: 'blog/:slug', element: withSuspense(BlogDetailPage) },
      { path: 'free-notes', element: withSuspense(FreeNotesPage) },
      { path: 'study-material', element: withSuspense(StudyMaterialPage) },
      { path: 'mock-tests', element: withSuspense(MockTestsPage) },
      { path: 'online-classes', element: withSuspense(OnlineClassesPage) },
      { path: 'offline-classes', element: withSuspense(OfflineClassesPage) },
      { path: 'faqs', element: withSuspense(FAQsPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: 'privacy-policy', element: withSuspense(PrivacyPolicyPage) },
      { path: 'terms', element: withSuspense(TermsPage) },
      { path: 'refund-policy', element: withSuspense(RefundPolicyPage) },
      { path: 'sitemap', element: withSuspense(SitemapPage) },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
];

export const router = createBrowserRouter(routes);
