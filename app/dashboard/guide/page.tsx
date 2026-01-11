import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Rocket, 
  Shield, 
  Zap, 
  Mail, 
  Layout, 
  CreditCard, 
  Search, 
  Gavel, 
  Gift, 
  MessageSquare,
  FileCode,
  FolderTree
} from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="space-y-8 p-8 pt-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Documentation & Guide</h2>
        <p className="text-muted-foreground">
          Everything you need to ship your SaaS in record time.
        </p>
      </div>

      <Tabs defaultValue="starter" className="space-y-4">
        <TabsList>
          <TabsTrigger value="starter">Starter Guide</TabsTrigger>
          <TabsTrigger value="architecture">Architecture & Files</TabsTrigger>
          <TabsTrigger value="legal">Legal Prompts</TabsTrigger>
          <TabsTrigger value="discounts">Partner Perks</TabsTrigger>
        </TabsList>

        <TabsContent value="starter" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  SupaNext Application Guide
                </CardTitle>
              <CardDescription>
                Follow these steps to set up and launch your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg flex items-start gap-3 mb-6">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">What do I do next?</p>
                  <p className="text-sm text-muted-foreground">
                    You are currently using the starter template! To "ship", you simply need to configure your own API keys, 
                    customize the UI, and deploy this exact codebase to Vercel.
                  </p>
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Step 1: Rapid Setup
                </h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                  <p>1. Clone your repository</p>
                  <p>2. Run <span className="text-primary">npm install</span></p>
                  <p>3. Copy <span className="text-primary">.env.example</span> to <span className="text-primary">.env</span></p>
                  <p>4. Add your Supabase and Stripe keys</p>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Step 2: Content & SEO
                </h3>
                <p className="text-sm text-muted-foreground">
                  Update <strong>lib/seo.ts</strong> with your brand name and default description. 
                  This boilerplate includes a fully functional blog structure in <strong>app/blog</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Step 3: Transactional Emails
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use <strong>Resend</strong> by default. Get your API key from resend.com and add it to your 
                  <strong>.env</strong> file as <strong>RESEND_API_KEY</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Step 4: Stripe Configuration
                </h3>
                <p className="text-sm text-muted-foreground">
                  1. Create products in Stripe Dashboard.<br />
                  2. Set up a webhook pointing to <strong>/api/webhooks/stripe</strong>.<br />
                  3. Update price IDs in your configuration.
                </p>
              </section>

              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">Need Help?</p>
                  <p className="text-sm text-muted-foreground">
                    Join our Discord community for support, networking, and lifetime updates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="architecture" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderTree className="h-5 w-5 text-primary" />
                Architecture & File Structure
              </CardTitle>
              <CardDescription>
                Where to find everything in your starter template.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <Layout className="h-4 w-4" />
                    Frontend (App Router)
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li><code className="text-primary">app/</code> - Pages and API routes</li>
                    <li><code className="text-primary">components/</code> - Reusable UI components</li>
                    <li><code className="text-primary">lib/</code> - Shared utilities and libraries</li>
                    <li><code className="text-primary">public/</code> - Static assets (logos, docs)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Backend & Auth
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li><code className="text-primary">supabase/</code> - Database migrations & schema</li>
                    <li><code className="text-primary">lib/supabase/</code> - Supabase client config</li>
                    <li><code className="text-primary">middleware.ts</code> - Auth protection & redirects</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Payments & Billing
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li><code className="text-primary">app/api/billing/</code> - Checkout & Portal APIs</li>
                    <li><code className="text-primary">lib/stripe/</code> - Stripe configuration</li>
                    <li><code className="text-primary">app/api/webhooks/stripe</code> - Webhook handler</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <FileCode className="h-4 w-4" />
                    Configuration
                  </h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li><code className="text-primary">package.json</code> - Dependencies & scripts</li>
                    <li><code className="text-primary">tailwind.config.ts</code> - Theme & styling</li>
                    <li><code className="text-primary">components.json</code> - Shadcn configuration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                Legal & Privacy Prompts
              </CardTitle>
              <CardDescription>
                Copy and paste these prompts into ChatGPT to generate your legal documents.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Terms of Service Prompt</h4>
                  <div className="bg-muted p-4 rounded-lg text-sm italic">
                    "I am launching a SaaS called [PROJECT_NAME] that provides [SERVICE_DESCRIPTION]. 
                    Users pay via Stripe. Generate a professional Terms of Service including sections on 
                    subscriptions, refunds, intellectual property, and user conduct."
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Privacy Policy Prompt</h4>
                  <div className="bg-muted p-4 rounded-lg text-sm italic">
                    "Generate a Privacy Policy for my Next.js SaaS. We use Supabase for auth, Stripe for 
                    payments, and Resend for emails. We collect user emails and billing addresses. 
                    Ensure GDPR and CCPA compliance."
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discounts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                Exclusive Partner Perks
              </CardTitle>
              <CardDescription>
                Over $1,210 worth of discounts to help you grow your SaaS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-bold">Supabase</h4>
                  <p className="text-sm text-muted-foreground">3 months of Pro plan for free.</p>
                    <div className="mt-2 text-xs font-mono bg-muted p-1 inline-block rounded">SUPANEXTPRO</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <h4 className="font-bold">Resend</h4>
                    <p className="text-sm text-muted-foreground">100,000 free emails per month for 1 year.</p>
                    <div className="mt-2 text-xs font-mono bg-muted p-1 inline-block rounded">LAUNCHEMAIL</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <h4 className="font-bold">PostHog</h4>
                    <p className="text-sm text-muted-foreground">Unlimited credits for 6 months.</p>
                    <div className="mt-2 text-xs font-mono bg-muted p-1 inline-block rounded">GROWTHHOG</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <h4 className="font-bold">Vercel</h4>
                    <p className="text-sm text-muted-foreground">$100 in deployment credits.</p>
                    <div className="mt-2 text-xs font-mono bg-muted p-1 inline-block rounded">SUPANEXTSHIP</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
