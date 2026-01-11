'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function SupaNextOrbit() {
  const logos = [
    { name: 'Next.js', x: -120, y: -80, scale: 1.2, icon: (
      <svg viewBox="0 0 128 128" className="h-12 w-12 invert">
        <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.4v33.3h-9.2V40.1h9.2l41.1 54.1c11.7-7.6 19.3-20.5 19.3-35.2 0-23.4-18.9-42.3-42.3-42.3-4.1 0-8 0.6-11.7 1.7L44.5 15.6C50.6 14.5 57.2 14 64 14c27.6 0 50 22.4 50 50s-22.4 50-50 50c-10.4 0-20.1-3.2-28.1-8.6l73.9-96.9C102.5 4.3 84.4 0 64 0z"/>
      </svg>
    )},
    { name: 'Tailwind', x: 120, y: -100, scale: 1.1, icon: (
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-400">
          <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
        <div className="text-[10px] font-bold text-white/50 mt-1 uppercase tracking-tighter">Tailwind</div>
      </div>
    )},
    { name: 'Resend', x: -130, y: 40, scale: 1, icon: (
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center text-black font-black text-2xl">R</div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm">Resend</span>
          <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">DNS records</span>
        </div>
      </div>
    )},
    { name: 'Stripe', x: 130, y: 10, scale: 1, icon: (
      <div className="flex items-center gap-2">
         <div className="h-10 w-10 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-500/20">S</div>
         <div className="flex flex-col">
          <span className="text-white font-bold text-sm leading-tight">Stripe<br/><span className="text-gray-400">Lemon Squeezy</span></span>
        </div>
      </div>
    )},
    { name: 'Auth', x: -140, y: 160, scale: 1, icon: (
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white fill-white">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.5 1.1 2.5 2.5S13.4 12 12 12s-2.5-1.1-2.5-2.5S10.6 7 12 7zm0 10c-2.33 0-4.31-1.46-5.11-3.5 1.12-.66 2.45-1 3.86-1h2.5c1.41 0 2.74.34 3.86 1-.8 2.04-2.78 3.5-5.11 3.5z"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">NextAuth</span>
          <span className="text-[10px] text-gray-400 font-bold">Google login • Magic link</span>
        </div>
      </div>
    )},
    { name: 'Database', x: 120, y: 170, scale: 1, icon: (
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-10 w-10 text-emerald-500 fill-emerald-500">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg leading-tight">MongoDB<br/><span className="text-gray-400">Supabase</span></span>
        </div>
      </div>
    )},
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
      {/* Hand-drawn Scribble Circle */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-white/10 pointer-events-none">
        <motion.path
          d="M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,190 10,150 10,100 C10,50 50,10 100,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,15 C145,15 185,55 185,100 C185,145 145,185 100,185 C55,185 15,145 15,100 C15,55 55,15 100,15"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="10,2"
          className="opacity-20"
        />
      </svg>

      {/* Center Group */}
      <div className="relative z-10 w-full h-full">
        {logos.map((logo) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: logo.scale }}
            transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
            className="absolute"
            style={{ 
              left: `calc(50% + ${logo.x}px)`, 
              top: `calc(50% + ${logo.y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {logo.icon}
          </motion.div>
        ))}

        {/* Text bottom */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center w-full">
            <p className="text-gray-500 text-xs font-bold leading-relaxed max-w-[250px] mx-auto">
                + all the boring stuff (SEO tags, API calls, customer support)
            </p>
        </div>

        {/* Arrow and Git Clone */}
        <div className="absolute -bottom-[5%] left-[60%]">
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-yellow-400 rotate-[30deg]">
                <path d="M10,10 Q50,10 50,50 T90,90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M85,80 L92,92 L80,92" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="mt-4 -ml-20">
                <code className="text-2xl font-black text-[#FFBE1A] font-mono tracking-tighter">
                   git clone supa-next
                </code>
            </div>
        </div>
      </div>
    </div>
  );
}
