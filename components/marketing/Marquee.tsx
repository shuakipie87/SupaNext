'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
    { name: 'Supabase', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' },
    { name: 'Stripe', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
    { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
    { name: 'TypeScript', icon: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
    { name: 'Resend', icon: 'https://raw.githubusercontent.com/resend/resend-node/main/assets/resend-icon.png' },

  { name: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
];

export function Marquee() {
  return (
    <div className="py-20 bg-[#0B0D11] overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <p className="text-center text-xs font-black text-gray-500 uppercase tracking-[0.3em]">
          POWERING MODERN STARTUPS
        </p>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-nowrap gap-12 sm:gap-24 items-center whitespace-nowrap"
        >
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 group/icon">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-500">
                <img src={tech.icon} alt={tech.name} className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
              </div>
              <span className="text-lg sm:text-2xl font-black text-white/20 group-hover/icon:text-white/100 transition-colors duration-500 tracking-tighter">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
