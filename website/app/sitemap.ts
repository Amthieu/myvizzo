import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';

/**
 * Dynamic sitemap generator
 * Add new pages to the routes array
 * Next.js automatically generates /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes - add new pages here
  const routes = [
    '',           // Homepage
    // '/pricing',
    // '/about',
    // '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
