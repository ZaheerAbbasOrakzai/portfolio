import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import SiteShell from '../components/layout/SiteShell'
import { profile } from '../lib/site'
import { generatePersonSchema, generateWebSiteSchema, generateOrganizationSchema } from '../lib/seo'
import { prefersReducedMotion } from '../lib/accessibility'
import { fontBody, fontDisplay, fontMono, fontVariables } from '../lib/fonts'

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: 'Zaheer Abbas - AI Engineer & Systems Architect',
    template: '%s | Zaheer Abbas'
  },
  description: 'AI / Machine Learning Engineer specializing in machine learning models, RAG systems, autonomous multi-agent coordination, and full-stack software development.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Multi-Agent Systems',
    'LLM Applications',
    'Full-Stack Developer',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'Production ML',
    'Computer Vision',
    'AI Systems',
    'Data Science',
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/icon-192.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/icon-192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/icon-512.png' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    siteName: `${profile.name}'s Portfolio`,
    title: 'Zaheer Abbas - AI Engineer & Systems Architect',
    description: 'AI Engineer specializing in multi-agent systems, LLM applications, and production-grade AI infrastructure.',
    images: [
      {
        url: `${profile.siteUrl}${profile.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${profile.name} - AI Engineer`,
        type: 'image/png',
      },
      {
        url: `${profile.siteUrl}${profile.ogImage}`,
        width: 800,
        height: 600,
        alt: `${profile.name} - AI Engineer`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ZaheerAbbas',
    creator: '@ZaheerAbbas',
    title: 'Zaheer Abbas - AI Engineer & Systems Architect',
    description: 'AI Engineer specializing in multi-agent systems, LLM applications, and production-grade AI infrastructure.',
    images: [`${profile.siteUrl}${profile.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: profile.siteUrl,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Zaheer Abbas',
  },
  applicationName: 'Zaheer Abbas Portfolio',
  referrer: 'strict-origin-when-cross-origin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = generatePersonSchema()
  const websiteSchema = generateWebSiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" data-theme="dark" className={fontVariables}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Viewport and theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#020617" />
        <meta name="color-scheme" content="dark" />

        {/* SEO Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zaheer Abbas" />
        
        {/* Verification tags */}
        <meta name="google-site-verification" content="your-verification-code" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${fontBody.className} bg-primary text-secondary antialiased`} suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-3 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
          Skip to main content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
