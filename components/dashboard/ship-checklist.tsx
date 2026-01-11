'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, ChevronRight, Rocket, Shield, Zap, Mail, Layout } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const steps = [
    {
      id: 'env',
      title: 'Configure Environment Variables',
      description: 'Add your Supabase and Stripe keys to your .env file.',
      icon: Shield,
      link: '/dashboard/guide',
    },
    {
      id: 'db',
      title: 'Initialize Database Schema',
      description: 'Run the migrations in your Supabase SQL editor to set up tables.',
      icon: Layout,
      link: '/dashboard/guide',
    },
    {
      id: 'stripe',
      title: 'Connect Stripe Products',
      description: 'Create your products in Stripe and update the price IDs in your config.',
      icon: Zap,
      link: '/dashboard/guide',
    },
    {
      id: 'email',
      title: 'Setup Transactional Emails',
      description: 'Configure Resend or Mailgun for welcome emails and magic links.',
      icon: Mail,
      link: '/dashboard/guide',
    },
    {
      id: 'deploy',
      title: 'Ship to Vercel',
      description: 'Push your code to GitHub and deploy your first SaaS in minutes.',
      icon: Rocket,
      link: '/dashboard/guide',
    },

];

export function ShipChecklist() {
  const [completed, setCompleted] = useState<string[]>([]);

  const toggleStep = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const progress = Math.round((completed.length / steps.length) * 100);

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
              <CardTitle className="text-xl flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                Launch with SupaNext
              </CardTitle>
            <CardDescription>
              Complete these steps to get your SaaS ready for production.
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{progress}%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Progress</div>
          </div>
        </div>
        <div className="w-full bg-primary/10 h-2 rounded-full mt-4 overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-500 ease-in-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step) => {
          const isCompleted = completed.includes(step.id);
          const Icon = step.icon;
          
          return (
            <div 
              key={step.id}
              className={cn(
                "group flex items-start gap-4 p-3 rounded-lg border transition-all cursor-pointer",
                isCompleted ? "bg-background/50 border-transparent opacity-75" : "bg-background border-border hover:border-primary/50"
              )}
              onClick={() => toggleStep(step.id)}
            >
              <div className="mt-1">
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className={cn(
                    "font-semibold leading-none",
                    isCompleted && "line-through text-muted-foreground"
                  )}>
                    {step.title}
                  </h4>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
          <Button className="w-full mt-4" variant="outline" asChild>
            <Link href="/dashboard/guide">
              View Full Documentation
            </Link>
          </Button>

      </CardContent>
    </Card>
  );
}
