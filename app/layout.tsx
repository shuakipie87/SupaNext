import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "SupaNext | AI-Guided SaaS Boilerplate",
    template: "%s | SupaNext",
  },
  description: "Production-ready Next.js 16 SaaS boilerplate with Supabase, Stripe, and AI integration.",
  keywords: ["Next.js", "Supabase", "Stripe", "SaaS", "Boilerplate"],
  authors: [{ name: "SupaNext Team" }],
  creator: "SupaNext Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "SupaNext",
    description: "The Ultimate Next.js & Supabase SaaS Starter Kit",
    siteName: "SupaNext",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}