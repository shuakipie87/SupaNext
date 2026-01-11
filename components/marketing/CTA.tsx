'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, Zap } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 bg-[#0B0D11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-blue-600 px-6 py-24 sm:px-12 sm:py-32 text-center shadow-[0_0_100px_rgba(37,99,235,0.2)]"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700" />
          
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-400/20 blur-[120px] rounded-full" 
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-10 shadow-2xl"
            >
              <Zap className="h-10 w-10 fill-white" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]"
            >
              Boost your app, <br /> launch, earn
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-blue-100 mb-16 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Join 8050+ makers building the future of SaaS. <br className="hidden sm:block" /> Start shipping today with SupaNext.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild size="lg" className="h-20 px-16 text-xl font-black rounded-2xl bg-[#FFBE1A] text-black hover:bg-[#E5AB17] hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20 group">
                <Link href="/register" className="flex items-center gap-3">
                  Get SupaNext 🚀
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
