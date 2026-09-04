import { Metadata } from 'next'
import { profile } from '../../lib/site'

export const metadata: Metadata = {
  title: 'Contact - Zaheer Abbas | Get in Touch',
  description: 'Get in touch with Zaheer Abbas for AI engineering consultations, project inquiries, or collaboration opportunities. Multiple contact channels available.',
  keywords: ['contact', 'hire', 'consultation', 'AI engineering', 'collaboration'],
  openGraph: {
    title: 'Contact - Zaheer Abbas',
    description: 'Get in touch with Zaheer Abbas for AI engineering consultations and collaboration',
    type: 'website',
    url: `${profile.siteUrl}/contact`,
    images: [
      {
        url: `${profile.siteUrl}${profile.ogImage}`,
        width: 1200,
        height: 630,
        alt: 'Zaheer Abbas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Zaheer Abbas',
    description: 'Get in touch with Zaheer Abbas for AI engineering consultations',
    images: [`${profile.siteUrl}${profile.ogImage}`],
  },
  alternates: {
    canonical: `${profile.siteUrl}/contact`,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}