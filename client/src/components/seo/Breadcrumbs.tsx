import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';
import { getBreadcrumbSchema } from '@/utils/seo';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation with BreadcrumbList schema markup.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const { pathname } = useLocation();

  const allItems = [{ label: 'Home', href: '/' }, ...items];
  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: item.href || pathname,
  }));

  return (
    <>
      {/* Schema markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema(schemaItems))}
        </script>
      </Helmet>

      {/* Visual breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className={cn('py-4', className)}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-tertiary">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index === 0 && <Home className="h-3.5 w-3.5" />}

                {isLast ? (
                  <span className="font-medium text-text-primary" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      to={item.href || '/'}
                      className="transition-colors hover:text-brand-gold"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-text-tertiary" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
