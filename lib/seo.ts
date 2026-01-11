import { Metadata } from 'next';

export const SEO_CONFIG = {
  title: 'SupaNext Boilerplate',
  description: 'The ultimate Next.js SaaS starter kit.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  author: 'Orchids AI',
};

export function getMetadata(options: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const { title, description, image, noIndex } = options;
  
  return {
    title: title ? `${title} | ${SEO_CONFIG.title}` : SEO_CONFIG.title,
    description: description || SEO_CONFIG.description,
    openGraph: {
      title: title || SEO_CONFIG.title,
      description: description || SEO_CONFIG.description,
      url: SEO_CONFIG.url,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || SEO_CONFIG.title,
      description: description || SEO_CONFIG.description,
      images: image ? [image] : [],
    },
    metadataBase: new URL(SEO_CONFIG.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
