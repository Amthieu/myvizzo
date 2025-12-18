import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';

/**
 * Robots.txt generator
 * Next.js automatically generates /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
