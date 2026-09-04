import React, { Suspense } from 'react';
import { Metadata } from 'next';
import PortfolioGallery from '../../components/portfolio/PortfolioGallery';
import { profile } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Portfolio - Zaheer Abbas | AI Engineer & Full-Stack Developer',
  description: 'Explore my portfolio of AI/ML projects, web applications, and research initiatives. Featuring smart city platforms, multi-agent systems, and advanced NLP solutions.',
  keywords: ['portfolio', 'AI projects', 'machine learning', 'full-stack development', 'smart cities', 'multi-agent systems', 'NLP'],
  openGraph: {
    title: 'Portfolio - Zaheer Abbas',
    description: 'Explore my portfolio of AI/ML projects and full-stack development work',
    type: 'website',
    url: `${profile.siteUrl}/portfolio`,
    images: [
      {
        url: `${profile.siteUrl}${profile.ogImage}`,
        width: 1200,
        height: 630,
        alt: 'Zaheer Abbas Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Zaheer Abbas',
    description: 'Explore my portfolio of AI/ML projects and full-stack development work',
    images: [`${profile.siteUrl}${profile.ogImage}`],
  },
  alternates: {
    canonical: `${profile.siteUrl}/portfolio`,
  },
};
const PortfolioLoading = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-emerald-400/5 pointer-events-none" />
    <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
    <div className="relative mx-auto max-w-[1280px] space-y-8">
      <div className="space-y-4">
        <div className="h-10 w-64 animate-pulse rounded-lg bg-gradient-to-r from-slate-800 to-slate-900" />
        <div className="h-6 w-96 animate-pulse rounded bg-gradient-to-r from-slate-800 to-slate-900" />
      </div>
      
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/50 to-slate-900/60 p-6 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded bg-gradient-to-r from-slate-800 to-slate-900" />
          <div className="h-10 animate-pulse rounded-lg bg-gradient-to-r from-slate-800 to-slate-900" />
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-8 animate-pulse rounded-full bg-gradient-to-r from-slate-800 to-slate-900" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/90 p-6 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 animate-pulse rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900" />
                <div className="space-y-2">
                  <div className="h-4 w-32 animate-pulse rounded bg-gradient-to-r from-slate-800 to-slate-900" />
                  <div className="h-6 w-48 animate-pulse rounded bg-gradient-to-r from-slate-800 to-slate-900" />
                </div>
              </div>
              <div className="h-16 animate-pulse rounded bg-gradient-to-r from-slate-800 to-slate-900" />
              <div className="flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-full bg-gradient-to-r from-slate-800 to-slate-900" />
                <div className="h-6 w-20 animate-pulse rounded-full bg-gradient-to-r from-slate-800 to-slate-900" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function PortfolioPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-emerald-400/5 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-[1280px] p-8">
        <Suspense fallback={<PortfolioLoading />}>
          <PortfolioGallery />
        </Suspense>
      </div>
    </section>
  );
}
