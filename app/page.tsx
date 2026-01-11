import Link from 'next/link'
import { Zap, Check, Star, ArrowRight, Menu } from 'lucide-react'
import { Hero } from '../components/marketing/Hero'
import { Marquee } from '../components/marketing/Marquee'
import { Comparison } from '../components/marketing/Comparison'
import { Newsletter } from '../components/marketing/Newsletter'
import { Features } from '../components/marketing/Features'
import { CTA } from '../components/marketing/CTA'
import { Problem } from '../components/marketing/Problem'
import { Testimonials } from '../components/marketing/Testimonials'
import { FAQ } from '../components/marketing/FAQ'
import { Button } from '../components/ui/button'
import { CheckoutButton } from '../components/billing/CheckoutButton'

const pricingFeatures = [
  'Next.js 16 Boilerplate',
  'Supabase Auth & DB',
  'Stripe Integration',
  'Advanced AI Components',
  'Priority Support',
  'Unlimited Projects',
  'Lifetime Updates'
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0D11] antialiased selection:bg-[#FFBE1A] selection:text-black">
      {/* Premium Dark Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0B0D11]/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFBE1A] group-hover:bg-[#E5AB17] transition-all shadow-lg shadow-[#FFBE1A]/20 group-hover:scale-105">
              <Zap className="h-5 w-5 text-black fill-black" />
            </div>
            <span className="font-black text-xl text-white tracking-tight">SupaNext</span>
          </Link>
          
            <nav className="hidden md:flex items-center gap-10">
              {['Pricing', 'Blog', 'Docs'].map((item) => (
                <Link 
                  key={item} 
                  href={
                    item === 'Blog' ? '/blog' : 
                    item === 'Docs' ? '/dashboard/guide' : 
                    `#${item.toLowerCase()}`
                  } 
                  className="text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {item}
                </Link>
              ))}
            </nav>
          
          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden sm:block text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
              Login
            </Link>
            <Button asChild size="lg" className="h-11 px-6 rounded-xl font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:-translate-y-0.5">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

        <main className="flex-1">
          <Hero />
          <Marquee />
          
          {/* Prominent Testimonial */}
          <section className="py-20 bg-[#0B0D11] relative">
             <div className="mx-auto max-w-4xl px-4">
                <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="h-32 w-32 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <img src="https://i.pravatar.cc/150?u=42" className="h-16 w-16 rounded-2xl object-cover border-2 border-yellow-400" alt="Avatar" />
                      <div>
                        <h4 className="font-black text-white text-lg">Marc Lou</h4>
                        <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Serial Entrepreneur</p>
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white leading-tight italic">
                      "This is exactly what I wish I had when I started my first SaaS. Build and ship in days, not months. Highly recommended!"
                    </p>
                  </div>
                </div>
             </div>
          </section>
  
          <Problem />
          <Comparison />
          <Features />
          
          {/* Pricing Section - One Plan Match */}
          <section id="pricing" className="py-32 bg-[#0B0D11] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20">
                <p className="text-sm font-black text-yellow-400 uppercase tracking-[0.2em] mb-4">PRICING</p>
                <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
                  Supercharge your startup
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                  One-time payment. Lifetime access. Everything included.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto relative group">
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-[#FFBE1A]/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-[#131313] rounded-[2.5rem] border border-white/10 p-10 sm:p-12 shadow-2xl transition-all hover:scale-[1.01] hover:border-white/20">
                  {/* Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-6 py-2 rounded-full text-xs font-black bg-[#FFBE1A] text-black shadow-2xl shadow-[#FFBE1A]/30 tracking-[0.2em] uppercase">
                      BEST VALUE
                    </span>
                  </div>
                  
                  {/* Header */}
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-black text-white mb-8 tracking-tight">
                      Full Bundle
                    </h3>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-3xl text-gray-600 line-through font-bold tracking-tighter">$299</span>
                      <div className="flex items-baseline">
                        <span className="text-8xl font-black text-white tracking-tighter">$29</span>
                        <span className="text-gray-500 text-sm font-black ml-2 uppercase tracking-widest">USD</span>
                      </div>
                    </div>
                  </div>
  
                  {/* Features List */}
                  <ul className="space-y-5 mb-12">
                    {pricingFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-5 text-base font-bold text-gray-300">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex-shrink-0">
                          <Check className="h-4 w-4" strokeWidth={4} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <CheckoutButton className="w-full h-20 text-xl font-black rounded-2xl bg-[#FFBE1A] hover:bg-[#E5AB17] text-black shadow-2xl shadow-[#FFBE1A]/20 transition-all hover:-translate-y-1 active:scale-95 group">
                    <span className="flex items-center gap-3">
                      <Zap className="h-6 w-6 fill-black" />
                      Get SupaNext Now
                    </span>
                  </CheckoutButton>
                  
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          className="h-9 w-9 rounded-full border-2 border-[#131313] object-cover shadow-sm"
                          src={`https://i.pravatar.cc/150?u=${i + 140}`}
                          alt=""
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.2em]">
                      Pay once. Use forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <Testimonials />
          <FAQ />
          <Newsletter />
          <CTA />
        </main>

      {/* Dark Footer */}
      <footer className="bg-[#0B0D11] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-16">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFBE1A]">
                  <Zap className="h-5 w-5 text-black fill-black" />
                </div>
                <span className="font-black text-xl text-white tracking-tight">SupaNext</span>
              </Link>
              <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-10">
                The ultimate Next.js boilerplate to ship your SaaS in record time. Built for developers by developers.
              </p>
            </div>
            
              <div>
                <h4 className="font-black text-white text-xs mb-8 uppercase tracking-[0.2em]">Product</h4>
                <ul className="space-y-4">
                  {['Features', 'Pricing', 'Blog', 'Docs'].map((item) => (
                    <li key={item}>
                      <Link 
                        href={
                          item === 'Blog' ? '/blog' : 
                          item === 'Docs' ? '/dashboard/guide' : 
                          `#${item.toLowerCase()}`
                        } 
                        className="text-sm font-bold text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            
            <div>
              <h4 className="font-black text-white text-xs mb-8 uppercase tracking-[0.2em]">Resources</h4>
              <ul className="space-y-4">
                {['Components', 'Roadmap', 'Support', 'Terms'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-white text-xs mb-8 uppercase tracking-[0.2em]">Social</h4>
              <ul className="space-y-4">
                {['Twitter', 'GitHub', 'LinkedIn', 'YouTube'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} SupaNext. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
