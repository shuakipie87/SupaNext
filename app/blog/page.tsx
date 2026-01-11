import Link from 'next/link';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata({
  title: 'Blog',
  description: 'Latest updates and guides for building SaaS applications.',
});

const posts = [
  {
    title: "How to Build a SaaS in 2026",
    slug: "build-saas-2026",
    date: "Jan 10, 2026",
    description: "The ultimate guide to launching your next big idea fast."
  },
    {
      title: "Why Next.js 16 is a Game Changer",
      slug: "nextjs-16-guide",
      date: "Jan 05, 2026",
      description: "Deep dive into the latest features of Next.js 16."
    }
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="grid gap-10">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
