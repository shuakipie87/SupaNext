'use client';

import { motion } from 'framer-motion';
import { X, Check, Shield, CreditCard, Database, Palette, Zap } from 'lucide-react';

const problems = [
  { title: 'Authentication', description: 'OAuth, Magic Links, MFA, Session management...', icon: Shield, time: '12 hours' },
  { title: 'Stripe Billing', description: 'Webhooks, checkout sessions, customer portal...', icon: CreditCard, time: '16 hours' },
  { title: 'Database Schema', description: 'Prisma/Drizzle, RLS, migrations, relationships...', icon: Database, time: '8 hours' },
  { title: 'UI Components', description: 'Forms, buttons, modals, dark mode...', icon: Palette, time: '20 hours' },
];

export function Problem() {
  return (
    <section className="py-32 bg-[#0B0D11] border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-yellow-400 uppercase tracking-[0.2em] mb-4"
          >
            THE PAIN
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white mb-8 tracking-tight"
          >
            Stop wasting 100+ hours on boilerplate
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Building a SaaS is hard. Setting up the same things every time is exhausting and kills your momentum.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Without Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#131313] rounded-[2.5rem] border border-white/5 p-10 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-5 mb-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 shadow-lg shadow-red-500/10">
                <X className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">Without SupaNext</h3>
            </div>
            
            <div className="space-y-8">
              {problems.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gray-500 group-hover:bg-red-500/10 group-hover:text-red-400 border border-white/5 transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-black text-white text-lg tracking-tight">{item.title}</span>
                      <span className="text-xs font-black text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-xl uppercase tracking-widest">{item.time}</span>
                    </div>
                    <p className="text-base text-gray-400 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 pt-10 border-t border-white/5 text-center">
              <p className="text-4xl font-black text-white mb-3 tracking-tight">Total: 56+ hours</p>
              <p className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">of repetitive, boring work</p>
            </div>
          </motion.div>

          {/* With Card - DARK THEME */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#131313] rounded-[2.5rem] p-10 sm:p-12 border-2 border-yellow-400/20 shadow-2xl shadow-yellow-400/5 overflow-hidden group"
          >
            {/* FAST Badge */}
            <div className="absolute top-0 right-0 p-12 pointer-events-none">
              <span className="inline-flex items-center px-6 py-2 rounded-full text-xs font-black bg-yellow-400 text-black shadow-2xl shadow-yellow-400/20 tracking-[0.2em] uppercase">
                READY
              </span>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-lg shadow-yellow-400/20">
                  <Check className="h-7 w-7" strokeWidth={4} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">With SupaNext</h3>
              </div>
              
              <div className="space-y-8">
                {problems.map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-black text-white text-lg tracking-tight">{item.title}</span>
                        <span className="text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-xl">SHIPPED</span>
                      </div>
                      <p className="text-base text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 pt-10 border-t border-white/5 text-center">
                <p className="text-4xl font-black text-yellow-400 mb-3 tracking-tight">Total: 0 hours</p>
                <p className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">Already built & tested</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
