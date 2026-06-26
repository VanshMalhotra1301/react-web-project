import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageTitle, getCanonicalUrl } from '@/utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders all SEO meta tags via React Helmet.
 * Includes title, description, canonical, Open Graph, Twitter Card, and optional JSON-LD.
 */
export function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = '/og-default.jpg',
  ogType = 'website',
  noIndex = false,
  keywords,
  jsonLd,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const fullTitle = getPageTitle(title);
  const canonical = getCanonicalUrl(canonicalPath || pathname);
  const metaDescription =
    description ||
    'Malhotra Classes is Rohtak\'s premier coaching institute for CBSE, HBSE, ICSE, JEE, NEET, and Olympiad preparation. Expert faculty, proven results, and personalised attention.';

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Malhotra Classes" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
