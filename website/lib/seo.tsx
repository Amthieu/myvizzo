import { siteConfig } from './site.config';

/**
 * Structured Data (JSON-LD) generators
 * Use these in page components to add rich snippets
 */

// Organization schema - use on homepage
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/vizzo-logo-white-205x80.png`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.twitter.url,
      siteConfig.social.linkedin.url,
      siteConfig.social.instagram.url,
    ],
  };
}

// Website schema - use on homepage
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

// Product schema - use on product/pricing pages
export function getProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  price?: string;
  currency?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    ...(product.image && { image: `${siteConfig.url}${product.image}` }),
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency || 'USD',
        availability: 'https://schema.org/PreOrder',
      },
    }),
  };
}

// FAQ schema - use on FAQ sections/pages
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

// Local Business schema - if applicable
export function getLocalBusinessSchema(business: {
  name: string;
  address?: string;
  phone?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: siteConfig.url,
    ...(business.address && { address: business.address }),
    ...(business.phone && { telephone: business.phone }),
  };
}

/**
 * JSON-LD Script component helper
 * Usage: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
