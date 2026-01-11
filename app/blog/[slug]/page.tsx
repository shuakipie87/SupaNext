import { getMetadata } from '@/lib/seo';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getMetadata({
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: `Read about ${slug.replace(/-/g, ' ')} on our blog.`,
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span>Jan 10, 2026</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <div className="prose prose-lg max-w-none">
        <p>This is a placeholder for your blog post content. You can use MDX or fetch content from a CMS like Sanity, Contentful, or even a simple Supabase table.</p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Why this matters</h2>
        <p>Your blog is a key part of your SEO strategy. Use it to share updates, guides, and insights that bring value to your users and attract organic traffic.</p>
      </div>
    </div>
  );
}
