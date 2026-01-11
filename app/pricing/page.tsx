import { PricingCards } from '@/components/billing/pricing-cards';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

export const metadata = {
  title: 'Pricing - SupaNext',
  description: 'Choose the perfect plan for your needs',
};

export default async function PricingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Get everything you need to build and scale your SaaS. Pay once, use forever.
            </p>
          </div>

        <PricingCards userId={user?.id} />

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-2">Is this a one-time payment?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Pay once and get lifetime access to SupaNext + CodeFast. No recurring charges or subscriptions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards (Visa, MasterCard, American Express) through our secure payment partner Stripe.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-2">Do I get lifetime updates?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! Your purchase includes all future updates to both SupaNext and CodeFast at no extra cost.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-2">Can I use this for multiple projects?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Build unlimited projects with your purchase. There are no limits on the number of projects you can create.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center pb-8">
          <p className="text-muted-foreground text-sm">
            Need a custom plan? <a href="mailto:support@supanext.com" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
