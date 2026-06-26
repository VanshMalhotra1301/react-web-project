import type { SEOMeta } from '@/types';

const SITE_NAME = 'Malhotra Classes';
const SITE_URL = 'https://malhotraclasses.com';
const DEFAULT_OG_IMAGE = '/og-default.jpg';

/**
 * Generate full page title with brand name.
 */
export function getPageTitle(title?: string): string {
  if (!title) return `${SITE_NAME} — Premier Coaching Institute in Rohtak, Haryana`;
  return `${title} | ${SITE_NAME}`;
}

/**
 * Generate canonical URL from pathname.
 */
export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Generate Open Graph meta for a page.
 */
export function getOGMeta(seo: Partial<SEOMeta> & { pathname: string }) {
  return {
    title: seo.title || SITE_NAME,
    description: seo.description || '',
    url: getCanonicalUrl(seo.pathname),
    image: seo.ogImage || DEFAULT_OG_IMAGE,
  };
}

/**
 * Generate Organization schema (JSON-LD).
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Malhotra Classes is Rohtak\'s leading coaching institute offering expert tuition for CBSE, HBSE, ICSE, JEE, NEET, and Olympiad preparation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Model Town',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'admissions',
      areaServed: 'Rohtak',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.facebook.com/malhotraclasses',
      'https://www.instagram.com/malhotraclasses',
      'https://www.youtube.com/@malhotraclasses',
    ],
  };
}

/**
 * Generate LocalBusiness schema (JSON-LD).
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Model Town',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8955,
      longitude: 76.6066,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '20:00',
      },
    ],
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
    },
  };
}

/**
 * Generate Course schema (JSON-LD).
 */
export function getCourseSchema(course: {
  name: string;
  description: string;
  slug: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    ...(course.duration && { timeRequired: course.duration }),
  };
}

/**
 * Generate FAQ schema (JSON-LD).
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article/BlogPosting schema (JSON-LD).
 */
export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image,
      },
    }),
  };
}

/**
 * Generate BreadcrumbList schema (JSON-LD).
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate SearchAction schema for sitelinks search.
 */
export function getSearchActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
