'use client';

import { motion } from 'framer-motion';
import { Shield, CreditCard, Database, Palette, Zap, Search, Mail, Smartphone, BarChart } from 'lucide-react';

const features = [
  {
    title: 'Secure Authentication',
    description: 'Magic Links, OAuth (Google, GitHub, etc.), and MFA out of the box.',
    icon: Shield,
    color: 'blue'
  },
  {
    title: 'Stripe Integration',
    description: 'Subscriptions, one-time payments, and customer portal pre-configured.',
    icon: CreditCard,
    color: 'emerald'
  },
  {
    title: 'Database Schema',
    description: 'Robust PostgreSQL schema with RLS, migrations, and relationships.',
    icon: Database,
    color: 'purple'
  },
  {
    title: 'SEO Optimized',
    description: 'Metadata, sitemaps, and clean architecture for maximum visibility.',
    icon: Search,
    color: 'yellow'
  },
  {
    title: 'Email Templates',
    description: 'Ready-to-use Resend/Postmark templates for all your notifications.',
    icon: Mail,
    color: 'red'
  },
  {
    title: 'Components Library',
    description: '50+ high-quality Tailwind CSS components for your dashboard.',
    icon: Palette,
    color: 'pink'
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#0B0D11] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-yellow-400 uppercase tracking-[0.2em] mb-4"
          >
            FEATURES
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white mb-8 tracking-tight"
          >
            Everything you need to ship
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Don't reinvent the wheel. We've built the foundation so you can focus on your features.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-[#131313] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="mb-8 relative">
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-gray-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
