import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/pricing', '/blog', '/login', '/register'].map((route) => ({
    url: `${SEO_CONFIG.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // In a real app, you would fetch your blog posts from a DB or CMS here
  const blogPosts = [
    'build-saas-2026',
    'nextjs-15-guide',
  ].map((slug) => ({
    url: `${SEO_CONFIG.url}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
