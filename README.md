# 🚀 SupaNext - Next.js 16 SaaS Starter Template

> The Ultimate Next.js & Supabase SaaS Starter Kit. Mobile-first, pixel-perfect, and production-ready.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![React](https://img.shields.io/badge/React-19-61dafb)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB-3ECF8E)
![Stripe](https://img.shields.io/badge/Stripe-v20-635BFF)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Setup](#-environment-setup)
- [Implementation Guide](#-implementation-guide)
- [Core Features](#-core-features)
- [API Routes](#-api-routes)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📋 Overview

SupaNext is an elite, AI-guided SaaS boilerplate designed to reduce time-to-market from weeks to hours. It integrates best-in-class technologies to solve common pain points: **Authentication**, **Billing**, and **Team Management**.

### Why SupaNext?

- ⚡ **Production-Ready**: Battle-tested architecture with enterprise patterns
- 🔐 **Secure by Default**: Row Level Security (RLS) with Supabase
- 💳 **Billing Built-In**: Stripe subscriptions & one-time payments
- 👥 **Multi-Tenancy**: Invite-based team management with RBAC
- 🎨 **Modern UI/UX**: Tailwind CSS, Shadcn/UI, Framer Motion, Dark Mode
- 🐳 **DevOps Ready**: Docker, CI/CD, Type-safe architecture

---

## 📸 Screenshots

### Landing Page
![Landing Page](./images/landingpage.jpg)
*Beautiful, modern landing page with hero section, features, and call-to-action*

### Dashboard Overview
![Dashboard](./images/dashbaoard.jpg)
*The main dashboard with statistics, quick actions, and navigation sidebar*

### Team Management
![Team Management](./images/teams.jpg)
*Create teams, invite members, and manage roles (Owner, Member, Viewer)*

### Billing & Subscriptions
![Billing](./images/billing.jpg)
*Stripe-powered subscription management with plan selection*

### Settings
![Settings](./images/settings.jpg)
*User profile settings, preferences, and account management*

### Documentation
![Documentation](./images/documentation.jpg)
*Built-in documentation and guides for your SaaS product*

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.1 (App Router + Turbopack) |
| **Language** | TypeScript (Strict Mode) |
| **Frontend** | React 19 |
| **Bundler** | Turbopack (default in Next.js 16) |
| **Database** | PostgreSQL (via Supabase) |
| **Auth** | Supabase Auth (Email + OAuth) |
| **Payments** | Stripe v20.1.2 (API: 2025-12-15.clover) |
| **Styling** | Tailwind CSS + Shadcn/UI |
| **Animations** | Framer Motion |
| **State** | TanStack Query |
| **Forms** | React Hook Form + Zod |
| **Email** | Resend |
| **Infrastructure** | Docker + GitHub Actions |

---

## 📁 Project Structure

```
supanext/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth group (login, register)
│   │   ├── login/
│   │   └── register/
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   ├── stripe/
│   │   ├── teams/
│   │   └── webhooks/
│   ├── dashboard/                # Protected dashboard pages
│   │   ├── billing/              # Subscription management
│   │   ├── guide/                # Documentation guide
│   │   ├── settings/             # User settings
│   │   ├── team/                 # Team management
│   │   ├── layout.tsx            # Dashboard layout
│   │   └── page.tsx              # Dashboard home
│   ├── blog/                     # Blog pages
│   ├── pricing/                  # Pricing page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── components/                   # React components
│   ├── ui/                       # Shadcn UI components
│   ├── dashboard/                # Dashboard-specific components
│   ├── billing/                  # Billing components
│   ├── teams/                    # Team management components
│   └── ...                       # Other shared components
├── lib/                          # Utility functions & configs
│   ├── supabase/                 # Supabase client setup
│   ├── stripe.ts                 # Stripe configuration
│   ├── auth.ts                   # Auth utilities
│   └── utils.ts                  # General utilities
├── types/                        # TypeScript type definitions
├── public/                       # Static assets
├── supabase/                     # Supabase migrations
├── .github/                      # GitHub Actions workflows
├── middleware.ts                 # Next.js middleware (auth) *
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
├── Dockerfile                    # Docker configuration
└── docker-compose.yml            # Docker Compose setup
```

> **Note**: In Next.js 16, the `middleware.ts` file convention is deprecated. Future versions will require renaming to `proxy.ts`. See [Next.js migration guide](https://nextjs.org/docs/messages/middleware-to-proxy) for details.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.0 or later (recommended for Next.js 16)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Supabase** account ([supabase.com](https://supabase.com))
- **Stripe** account ([stripe.com](https://stripe.com))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/supanext.git
cd supanext

# 2. Install dependencies
npm install --legacy-peer-deps
# or
bun install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Fill in your environment variables (see next section)

# 5. Start development server (uses Turbopack by default)
npm run dev
# or
bun dev
```

Visit `http://localhost:3000` to see the app.

---

## 🔐 Environment Setup

Create a `.env.local` file based on `.env.example`:

```bash
# Supabase - Get from Supabase Dashboard > Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe - Get from Stripe Dashboard > Developers > API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App URL - Used for auth redirects and Stripe callbacks
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Resend - For transactional emails (optional)
RESEND_API_KEY=re_...

# Analytics (Optional)
NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### Getting Your Keys

#### Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Navigate to **Settings** > **API**
3. Copy the **URL** and **anon public** key to your `.env.local`
4. Copy **service_role** key (keep this secret!)

#### Stripe Setup
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Navigate to **Developers** > **API keys**
3. Copy **Publishable key** and **Secret key**
4. For webhook secret, see [Stripe Integration](#stripe-integration) section

---

## 📖 Implementation Guide

### Step 1: Database Setup (Supabase)

1. **Create Required Tables**

   Run the following SQL in Supabase SQL Editor:

   ```sql
   -- Profiles table (extends auth.users)
   CREATE TABLE profiles (
     id UUID REFERENCES auth.users PRIMARY KEY,
     email TEXT,
     full_name TEXT,
     avatar_url TEXT,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- Enable RLS
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

   -- Profile policies
   CREATE POLICY "Users can view own profile" ON profiles
     FOR SELECT USING (auth.uid() = id);
   CREATE POLICY "Users can update own profile" ON profiles
     FOR UPDATE USING (auth.uid() = id);

   -- Teams table
   CREATE TABLE teams (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     slug TEXT UNIQUE NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- Team members junction table
   CREATE TABLE team_members (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     role TEXT CHECK (role IN ('owner', 'member', 'viewer')) DEFAULT 'member',
     created_at TIMESTAMPTZ DEFAULT NOW(),
     UNIQUE(team_id, user_id)
   );

   -- Subscriptions table (Stripe)
   CREATE TABLE subscriptions (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID REFERENCES auth.users(id),
     stripe_customer_id TEXT,
     stripe_subscription_id TEXT,
     status TEXT,
     price_id TEXT,
     current_period_start TIMESTAMPTZ,
     current_period_end TIMESTAMPTZ,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

2. **Set Up Database Triggers**

   ```sql
   -- Auto-create profile on user signup
   CREATE OR REPLACE FUNCTION handle_new_user()
   RETURNS TRIGGER AS $$
   BEGIN
     INSERT INTO public.profiles (id, email, full_name)
     VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql SECURITY DEFINER;

   CREATE TRIGGER on_auth_user_created
     AFTER INSERT ON auth.users
     FOR EACH ROW EXECUTE FUNCTION handle_new_user();
   ```

### Step 2: Authentication Configuration

1. **Configure Auth Providers** (Supabase Dashboard)
   - Go to **Authentication** > **Providers**
   - Enable **Email** (with email confirmation if desired)
   - Enable OAuth providers (Google, GitHub, etc.)

2. **Configure Redirect URLs**
   - Go to **Authentication** > **URL Configuration**
   - Set **Site URL**: `http://localhost:3000` (or production URL)
   - Add **Redirect URLs**:
     - `http://localhost:3000/auth/callback`
     - `https://yourdomain.com/auth/callback`

3. **Middleware Protection**

   The `middleware.ts` file handles route protection:

   ```typescript
   // Protected routes: /dashboard/*
   // Auth routes: /login, /register (redirect if logged in)
   ```

### Step 3: Stripe Integration

1. **Create Products in Stripe Dashboard**
   - Go to **Products** > **Add Product**
   - Create your pricing tiers (e.g., Starter, Pro, Enterprise)
   - Copy the **Price IDs** (price_xxx)

2. **Set Up Webhooks**

   **For Local Development:**
   ```bash
   # Install Stripe CLI
   brew install stripe/stripe-cli/stripe

   # Login and forward webhooks
   stripe login
   stripe listen --forward-to localhost:3000/api/webhooks/stripe

   # Copy the webhook secret (whsec_...) to .env.local
   ```

   **For Production:**
   - Go to **Developers** > **Webhooks**
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Select events:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`

3. **Configure Pricing Plans**

   Update your pricing configuration in the codebase to match your Stripe products.

### Step 4: Running the Application

```bash
# Development (with Turbopack - blazing fast HMR)
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build (also uses Turbopack)
npm run build
npm run start
```

> 💡 **Next.js 16** uses Turbopack as the default bundler, providing significantly faster builds and hot module replacement compared to webpack.

---

## ✨ Core Features

### 🔐 Authentication
- Email/password authentication
- OAuth providers (Google, GitHub, etc.)
- Session management with cookies
- Protected routes via middleware
- Profile management

### 💳 Billing & Subscriptions
- Stripe Checkout integration
- Subscription management
- Plan upgrades/downgrades
- Billing portal access
- Webhook handling for real-time updates

### 👥 Team Management
- Create teams with unique slugs
- Invite team members by email
- Role-based access control (Owner, Member, Viewer)
- Team switcher in dashboard
- Remove team members

### 🎨 UI/UX
- Responsive design (mobile-first)
- Dark/Light mode toggle
- Shadcn/UI components
- Framer Motion animations
- Toast notifications
- Loading states

### 🏗 Developer Experience
- TypeScript strict mode
- ESLint + Prettier
- Path aliases (`@/components/...`)
- Docker support
- GitHub Actions CI/CD

---

## 🔌 API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/callback` | GET | OAuth callback handler |
| `/api/stripe/checkout` | POST | Create Stripe checkout session |
| `/api/stripe/portal` | POST | Create Stripe billing portal |
| `/api/webhooks/stripe` | POST | Stripe webhook handler |
| `/api/teams` | GET, POST | Team CRUD operations |
| `/api/teams/[id]/members` | GET, POST | Team members management |

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Docker

```bash
# Build image
docker build -t supanext .

# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f
```

### Production Checklist

- [ ] Set all environment variables
- [ ] Configure Stripe webhooks for production URL
- [ ] Enable email confirmation in Supabase
- [ ] Set up custom domain
- [ ] Configure CDN/caching
- [ ] Set up error monitoring (Sentry)
- [ ] Set up analytics (PostHog, Vercel Analytics)

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Setup Guide](./setup.md) | Detailed setup instructions |
| [Step-by-Step Guide](./stepbystepguide.md) | Complete implementation walkthrough |
| [Supabase Configuration](./supabase.md) | Database schema and RLS policies |
| [Stripe Integration](./stripe.md) | Payment setup guide |
| [API Documentation](./postman.md) | API endpoints and examples |
| [Production Guide](./PRODUCTION_READY_GUIDE.md) | Production deployment checklist |

---

## 🧰 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 📊 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                          │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐ │
│  │  React UI   │  │ TanStack     │  │  Supabase Client        │ │
│  │  (Shadcn)   │  │ Query        │  │  (Auth + Realtime)      │ │
│  └─────────────┘  └──────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     NEXT.JS SERVER (Edge/Node)                   │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐ │
│  │ Middleware  │  │ Server       │  │  API Routes             │ │
│  │ (Auth)      │  │ Actions      │  │  (Webhooks)             │ │
│  └─────────────┘  └──────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                           │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐ │
│  │  Supabase   │  │   Stripe     │  │      Resend             │ │
│  │  (DB+Auth)  │  │  (Payments)  │  │     (Email)             │ │
│  └─────────────┘  └──────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

## 💬 Support

- 📧 Email: support@supanext.com
- 💬 Discord: [Join our community](https://discord.gg/supanext)
- 📖 Docs: [docs.supanext.com](https://docs.supanext.com)

---

<p align="center">
  Built with ❤️ using Next.js, Supabase, and Stripe
</p>