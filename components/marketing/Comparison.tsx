'use client';

import { Check, X, Zap } from 'lucide-react';

const features = [
  { name: 'Authentication (Email + OAuth)', supanext: true, manual: '2 days' },
  { name: 'Stripe Subscriptions & Webhooks', supanext: true, manual: '3 days' },
  { name: 'User Dashboard & Settings', supanext: true, manual: '2 days' },
  { name: 'Team Management (RBAC)', supanext: true, manual: '4 days' },
  { name: 'Transactional Emails (Resend)', supanext: true, manual: '1 day' },
  { name: 'Database Schema & RLS', supanext: true, manual: '2 days' },
  { name: 'Responsive UI (Tailwind)', supanext: true, manual: '3 days' },
];

export function Comparison() {
  return (
    <section className="py-32 bg-[#0B0D11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Stop wasting time on <span className="text-red-500">repetitive code</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Building from scratch takes weeks. SupaNext gets you to production in hours.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid md:grid-cols-3 border-b border-white/10">
            <div className="p-8 font-black text-gray-500 uppercase tracking-widest text-sm">Feature</div>
            <div className="p-8 font-black text-yellow-400 uppercase tracking-widest text-sm bg-yellow-400/5 border-x border-white/10 flex items-center gap-2">
              <Zap className="h-4 w-4 fill-yellow-400" />
              SupaNext
            </div>
            <div className="p-8 font-black text-gray-500 uppercase tracking-widest text-sm">Manual Build</div>
          </div>

          {features.map((feature, idx) => (
            <div key={idx} className="grid md:grid-cols-3 border-b last:border-0 border-white/10 group hover:bg-white/[0.02] transition-colors">
              <div className="p-8 text-white font-bold">{feature.name}</div>
              <div className="p-8 bg-yellow-400/5 border-x border-white/10 flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
                <span className="ml-3 text-emerald-400 font-black text-sm uppercase tracking-widest">Included</span>
              </div>
              <div className="p-8 flex items-center text-gray-500 font-bold">
                <span className="text-red-500/50 mr-2">—</span>
                {feature.manual}
              </div>
            </div>
          ))}

          <div className="grid md:grid-cols-3 bg-white/5">
            <div className="p-8 text-white font-black text-xl">Total Time</div>
            <div className="p-8 bg-yellow-400/10 border-x border-white/10 flex items-center">
              <span className="text-2xl font-black text-white tracking-tighter">1 hour</span>
            </div>
            <div className="p-8 text-gray-400 font-black text-xl tracking-tighter">17+ days</div>
          </div>
        </div>
      </div>
    </section>
  );
}
