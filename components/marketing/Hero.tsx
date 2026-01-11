'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Terminal } from 'lucide-react';

import { SupaNextOrbit } from './SupaNextOrbit';

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 sm:pt-36 sm:pb-48 bg-[#0B0D11] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Version Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Version 2.2</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-8">
              Ship your startup <br />
              in days, <span className="bg-white text-black px-4 rounded-xl inline-block -rotate-1">not weeks</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-medium">
              The ultimate Next.js boilerplate with everything you need to build and scale your SaaS. 
              Auth, Billing, Emails, SEO, and more, pre-configured for you.
            </p>
            
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
                <Button asChild size="lg" className="h-16 px-10 text-lg font-black rounded-2xl bg-[#FFBE1A] hover:bg-[#E5AB17] text-black shadow-2xl shadow-[#FFBE1A]/20 transition-all duration-300 hover:-translate-y-1 active:scale-95">
                  <Link href="/register" className="flex items-center gap-2">
                    <Zap className="h-5 w-5 fill-black" />
                    Get SupaNext
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg font-black rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 active:scale-95">
                  <Link href="/dashboard/guide" className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Live Demo
                  </Link>
                </Button>
              </div>

            {/* Git Command */}
            <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Terminal className="h-5 w-5 text-gray-500" />
                <code className="text-sm font-mono text-gray-300">git clone supa-next</code>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <SupaNextOrbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

