import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/stripe';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
]);

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get('Stripe-Signature') as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return new Response('Webhook secret not found.', { status: 400 });
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          const subscription = event.data.object as Stripe.Subscription;
          await manageSubscriptionStatusChange(
            subscription.id,
            subscription.customer as string,
            event.type === 'customer.subscription.created'
          );
          break;
        case 'checkout.session.completed':
          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          if (checkoutSession.mode === 'subscription') {
            const subscriptionId = checkoutSession.subscription;
            await manageSubscriptionStatusChange(
              subscriptionId as string,
              checkoutSession.customer as string,
              true
            );
          }
          break;
        default:
          throw new Error('Unhandled relevant event!');
      }
    } catch (error) {
      console.error(error);
      return new Response('Webhook handler failed. View logs.', { status: 400 });
    }
  }

  return NextResponse.json({ received: true });
}

async function manageSubscriptionStatusChange(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  // Get customer's UUID from mapping table.
  // In production, you'd store stripe_customer_id in profiles.
  // For this example, we fetch subscription from Stripe to get metadata if needed
  // or assume we stored the user_id in Stripe metadata during checkout.

  const subscriptionResponse = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['default_payment_method', 'items.data'],
  });

  // Cast to work with latest Stripe SDK types
  const subscriptionData: Record<string, unknown> = subscriptionResponse as unknown as Record<string, unknown>;
  const subscription = subscriptionData;

  const metadata = subscription.metadata as Record<string, string>;
  const userId = metadata?.userId;
  if (!userId) throw new Error('User ID not found in subscription metadata');

  // Get the first subscription item for billing period info
  const items = subscription.items as { data: Array<{ price: { id: string }; quantity?: number; current_period_start?: number; current_period_end?: number }> };
  const subscriptionItem = items.data[0];

  const subscriptionRecord = {
    id: subscription.id as string,
    user_id: userId,
    metadata: metadata,
    status: subscription.status as string,
    price_id: subscriptionItem.price.id,
    quantity: subscriptionItem.quantity,
    cancel_at_period_end: subscription.cancel_at_period_end as boolean,
    cancel_at: subscription.cancel_at ? new Date((subscription.cancel_at as number) * 1000).toISOString() : null,
    canceled_at: subscription.canceled_at ? new Date((subscription.canceled_at as number) * 1000).toISOString() : null,
    current_period_start: subscriptionItem.current_period_start ? new Date(subscriptionItem.current_period_start * 1000).toISOString() : new Date().toISOString(),
    current_period_end: subscriptionItem.current_period_end ? new Date(subscriptionItem.current_period_end * 1000).toISOString() : new Date().toISOString(),
    created_at: new Date((subscription.created as number) * 1000).toISOString(),
    ended_at: subscription.ended_at ? new Date((subscription.ended_at as number) * 1000).toISOString() : null,
    trial_start: subscription.trial_start ? new Date((subscription.trial_start as number) * 1000).toISOString() : null,
    trial_end: subscription.trial_end ? new Date((subscription.trial_end as number) * 1000).toISOString() : null,
  };

  const { error } = await supabaseAdmin
    .from('subscriptions')
    .upsert([subscriptionRecord]);

  if (error) throw error;
  console.log(`Inserted/updated subscription [${subscription.id}] for user [${userId}]`);
}