'use client';

import { motion } from 'framer-motion';
import { Star, Twitter } from 'lucide-react';

const testimonials = [
  {
    content: "SupaNext saved me at least 2 weeks of work. I had my MVP live in 3 days. Best investment for my SaaS!",
    author: "Alex Rivera",
    role: "Founder, SaaSBox",
    avatar: "https://i.pravatar.cc/150?u=alex",
    handle: "@alex_rivera"
  },
  {
    content: "The Supabase integration is flawless. RLS policies and auth were usually a nightmare, but not with this.",
    author: "Sarah Chen",
    role: "Fullstack Dev",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    handle: "@sarah_codes"
  },
  {
    content: "Cleanest code I've seen in a boilerplate. The AI components are actually useful and easy to customize.",
    author: "Michael Brown",
    role: "Solo Entrepreneur",
    avatar: "https://i.pravatar.cc/150?u=michael",
    handle: "@mike_brown"
  },
  {
    content: "Stripe setup was literally 5 minutes. The webhooks and portal just work. Highly recommend!",
    author: "Elena Rodriguez",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?u=elena",
    handle: "@elena_design"
  },
  {
    content: "I've tried 5 different boilerplates, and this is the only one that uses Next.js 16 patterns correctly.",
    author: "James Wilson",
    role: "Lead Engineer",
    avatar: "https://i.pravatar.cc/150?u=james",
    handle: "@james_wilson"
  },
  {
    content: "The UI components are beautiful. My app looks premium without me spending hours on CSS.",
    author: "David Lee",
    role: "Indie Hacker",
    avatar: "https://i.pravatar.cc/150?u=david",
    handle: "@david_hacker"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#0B0D11] border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-yellow-400 uppercase tracking-[0.2em] mb-4"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white mb-8 tracking-tight"
          >
            8050 makers built tools
          </motion.h2>
          <p className="text-xl text-gray-400 font-medium tracking-tight">They ship faster than ever today and love our boilerplate.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="break-inside-avoid bg-[#131313] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10"
                  />
                  <div>
                    <p className="font-black text-white text-sm leading-tight tracking-tight">{testimonial.author}</p>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{testimonial.handle}</p>
                  </div>
                </div>
                <Twitter className="h-4 w-4 text-gray-700 group-hover:text-[#1DA1F2] transition-colors" />
              </div>
              
              <p className="text-gray-300 font-medium leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
