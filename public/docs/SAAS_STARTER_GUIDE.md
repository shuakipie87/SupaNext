# SupaNext Guide & Documentation

Welcome to your new SaaS boilerplate! This project is designed to help you ship your product in record time.

## 🚀 The "Next Steps" Logic

After a user subscribes to your platform, they are essentially getting access to this starter template. Your goal is to customize this codebase into your unique product.

### Where are the files?
You are currently looking at the starter template files! 
- **Frontend**: Next.js 16 (App Router) in the `app/` directory.
- **Components**: UI components in `components/ui/` (shadcn/ui).
- **Backend**: Supabase for Database & Auth.
- **Payments**: Stripe integration in `app/api/billing/` and `lib/stripe/`.
- **Emails**: Resend integration in `lib/resend.ts` (if applicable).

### Quick Start Checklist
1. **Clone & Install**: Run `npm install` in your local terminal.
2. **Environment Variables**: Copy `.env.example` to `.env` and fill in your keys.
3. **Database Schema**: Use the SQL migrations found in `supabase/migrations` or follow the guide in the dashboard.
4. **Stripe Products**: Create your products in the Stripe Dashboard and update the price IDs in your configuration files.
5. **Branding**: Update `lib/seo.ts` and the logo in `components/` to match your brand.

## 💡 Support
For any issues, please refer to the internal documentation on your dashboard at `/dashboard/guide`.

---
*Happy Shipping!*
