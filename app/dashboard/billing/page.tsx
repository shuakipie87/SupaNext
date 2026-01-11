import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PricingCards } from '@/components/billing/pricing-cards'
import { createPortalSession } from '@/lib/actions/billing'
import { redirect } from 'next/navigation'
import { CheckCircle2, AlertCircle, CreditCard, Calendar, Zap } from 'lucide-react'
import Link from 'next/link'

const PLAN_NAMES: Record<string, string> = {
  'price_1SoOa2L2RGzmfvoIXytBxSCa': 'Pro Monthly',
  'price_1SoOa2L2RGzmfvoIrqA9PS9f': 'Pro Yearly',
  'price_1SoOa3L2RGzmfvoIhU1SJqcC': 'Enterprise Monthly',
  'price_1SoOa3L2RGzmfvoIJVR5DrT8': 'Enterprise Yearly',
}

export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; canceled?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user.id)
    .in('status', ['active', 'trialing'])
    .single()

  const { data: profile } = await supabase
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single()

  const hasActiveSubscription = !!subscription
  const planName = subscription?.price_id ? PLAN_NAMES[subscription.price_id] || 'Premium' : 'Free'
  const currentPeriodEnd = subscription?.current_period_end 
    ? new Date(subscription.current_period_end).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : null

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Billing</h2>
        <p className="text-muted-foreground">
          Manage your subscription and billing details.
        </p>
      </div>

      {params.success && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <div>
            <p className="font-medium text-emerald-600">Payment successful!</p>
            <p className="text-sm text-muted-foreground">Your subscription is now active.</p>
          </div>
        </div>
      )}

      {params.canceled && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          <div>
            <p className="font-medium text-amber-600">Payment canceled</p>
            <p className="text-sm text-muted-foreground">Your subscription was not created.</p>
          </div>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Current Plan
          </CardTitle>
          <CardDescription>
            {hasActiveSubscription 
              ? `You are currently on the ${planName} plan.`
              : 'You are currently on the Free plan.'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <p className="font-medium text-lg">{planName}</p>
              {hasActiveSubscription ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {subscription.cancel_at_period_end 
                      ? `Cancels on ${currentPeriodEnd}`
                      : `Renews on ${currentPeriodEnd}`
                    }
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    subscription.status === 'active' 
                      ? 'bg-emerald-500/10 text-emerald-600'
                      : subscription.status === 'trialing'
                      ? 'bg-blue-500/10 text-blue-600'
                      : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {subscription.status === 'trialing' ? 'Trial' : subscription.status}
                  </span>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Up to 3 projects, basic features
                </p>
              )}
            </div>
            {profile?.stripe_customer_id ? (
              <form action={createPortalSession}>
                <Button variant="outline" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Manage Subscription
                </Button>
              </form>
            ) : (
              <Button variant="outline" asChild>
                <Link href="/pricing">View Plans</Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {!hasActiveSubscription && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Upgrade your plan</h3>
          <PricingCards userId={user?.id} />
        </div>
      )}
    </div>
  )
}
