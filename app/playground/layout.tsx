import { Metadata } from 'next'
import { profile } from '../../lib/site'

export const metadata: Metadata = {
  title: 'Playground - Zaheer Abbas | Interactive AI Demos',
  description: 'Explore interactive AI demos and experiments including agent workflows, RAG systems, and vision operations monitoring. Roadmap for production-ready showcases.',
  keywords: ['AI demos', 'playground', 'interactive', 'machine learning', 'experiments', 'RAG', 'agent workflows'],
  openGraph: {
    title: 'Playground - Zaheer Abbas',
    description: 'Interactive AI demos and experiments',
    type: 'website',
    url: `${profile.siteUrl}/playground`,
    images: [
      {
        url: `${profile.siteUrl}${profile.ogImage}`,
        width: 1200,
        height: 630,
        alt: 'Zaheer Abbas Playground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playground - Zaheer Abbas',
    description: 'Interactive AI demos and experiments',
    images: [`${profile.siteUrl}${profile.ogImage}`],
  },
  alternates: {
    canonical: `${profile.siteUrl}/playground`,
  },
}

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}