'use client';

import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createCheckoutSession } from '@/lib/actions/billing';
import { cn } from '@/lib/utils';

interface PricingProps {
  userId?: string;
}

const SUPANEXT_CODEFAST_PRICE_ID = 'price_1SoSmgL2RGzmfvoIX9pzuBtw';

const features = [
  'Next.js 16 Boilerplate',
  'Supabase Auth & DB',
  'Stripe Integration',
  'Advanced AI Components',
  'Priority Support',
  'Unlimited Projects',
  'Lifetime Updates'
];

export function PricingCards({ userId }: PricingProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await createCheckoutSession(SUPANEXT_CODEFAST_PRICE_ID);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-12">
      <div 
        className="relative flex flex-col rounded-3xl p-8 bg-muted/30 border-2 border-primary shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
          BUNDLE
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-black text-foreground mb-4">
            SupaNext <span className="text-primary">+</span> <span className="text-green-500">CodeFast</span>
          </h3>
          <div className="flex items-baseline gap-4">
            <span className="text-2xl text-muted-foreground line-through decoration-primary/50">$129</span>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-black text-foreground">$29</span>
              <span className="text-muted-foreground font-bold text-xs uppercase ml-1">USD</span>
            </div>
          </div>
        </div>

        <div className="mb-8 p-6 rounded-2xl bg-background/50 border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
              <Star className="h-5 w-5 fill-current" />
            </div>
            <h4 className="font-bold text-green-500">CodeFast ($299 value)</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4 font-medium">Learn to code in weeks, not months</p>
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>12 hours of content</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Build a SaaS from 0</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Entrepreneur mindset</span>
            </li>
          </ul>
          <div className="flex -space-x-2 overflow-hidden mb-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
                src={`https://i.pravatar.cc/150?u=${i + 10}`}
                alt="Student"
              />
            ))}
          </div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">1,000+ students love CodeFast</p>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-sm font-semibold text-foreground/90">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={handleCheckout}
          disabled={loading}
          className="w-full h-14 text-lg font-black rounded-xl bg-green-500 hover:bg-green-600 shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all active:scale-95"
        >
          {loading ? 'Processing...' : 'Get SupaNext + CodeFast'}
        </Button>
        <p className="mt-4 text-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Pay once. Build unlimited projects!
        </p>
      </div>
    </div>
  );
}
