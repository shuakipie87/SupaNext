'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, Mail } from 'lucide-react';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thanks for subscribing! We will keep you updated.');
    setEmail('');
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#0B0D11] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 sm:p-20 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Zap className="h-64 w-64 text-white fill-white" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Get the latest updates <br />
              on <span className="underline decoration-yellow-400 underline-offset-8">SupaNext</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 font-medium">
              Join 5,000+ makers getting weekly tips on shipping faster and building better SaaS products.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300 group-focus-within:text-white transition-colors" />
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-16 pl-12 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 transition-all rounded-2xl text-lg font-medium"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="h-16 px-10 bg-[#FFBE1A] hover:bg-[#E5AB17] text-black font-black text-lg rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            <p className="mt-6 text-sm text-blue-200 font-bold uppercase tracking-widest opacity-80">
              No spam. Just value. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
