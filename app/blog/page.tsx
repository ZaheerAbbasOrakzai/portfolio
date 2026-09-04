import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PremiumCard } from '../../components/ui/PremiumCard'
import { PremiumBadge } from '../../components/ui/PremiumBadge'
import { articles } from '../../lib/data/articles'
import { profile } from '../../lib/site'

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
)

export const metadata: Metadata = {
  title: 'AI Engineering Articles | Zaheer Abbas',
  description: 'Technical articles on LLM systems, RAG, multi-agent workflows, Arabic NLP, and production ML engineering from Zaheer Abbas.',
  keywords: ['AI engineering articles', 'LLM systems', 'RAG systems', 'multi-agent AI', 'MLOps', 'Arabic NLP'],
  alternates: {
    canonical: `${profile.siteUrl}/blog`,
  },
  openGraph: {
    title: 'AI Engineering Articles | Zaheer Abbas',
    description: 'Technical articles on LLM systems, RAG, multi-agent workflows, and production ML engineering.',
    type: 'website',
    url: `${profile.siteUrl}/blog`,
    images: [{ url: `${profile.siteUrl}${profile.ogImage}`, width: 1200, height: 630, alt: 'Zaheer Abbas blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering Articles | Zaheer Abbas',
    description: 'Technical articles on LLM systems, RAG, multi-agent workflows, and production ML engineering.',
    images: [`${profile.siteUrl}${profile.ogImage}`],
  },
}

const platformColors: Record<string, string> = {
  Medium: 'from-green-500 to-emerald-500',
  'Dev.to': 'from-purple-500 to-pink-500',
  'Personal Blog': 'from-blue-500 to-cyan-500',
  LinkedIn: 'from-blue-600 to-blue-500',
}

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),_transparent_35%)]" />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white">
            <ArrowLeftIcon />
            Back to home
          </Link>
        </div>

        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/75 mb-3">Insights & research</p>
          <h1 className="text-5xl font-bold text-white sm:text-6xl">AI engineering articles backed by production experience</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">Deep technical writing covering LLM systems, agent orchestration, Arabic NLP, and ML operations for enterprise AI products.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <PremiumCard key={article.id} variant="glass" className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src={article.thumbnail} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                <div className="absolute right-4 top-4 px-4 py-2 rounded-full bg-black/60 text-xs font-semibold text-white shadow-lg shadow-black/30" style={{ backgroundImage: 'linear-gradient(135deg, rgba(37, 99, 235, 0.85), rgba(168, 85, 247, 0.85))' }}>
                  {article.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${platformColors[article.platform]}`}>{article.platform}</div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4">{article.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-6">{article.excerpt}</p>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-3">
                    <CalendarIcon />
                    <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon />
                    <span>{article.readingTime}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href={article.url} className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-gradient-to-r from-slate-900 via-cyan-500/20 to-violet-500/20 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(6,182,212,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:via-sky-500/20 hover:to-violet-500/30 hover:shadow-[0_16px_50px_rgba(6,182,212,0.25)] sm:w-auto">
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">Read full article</span>
                    <span className="rounded-full bg-white/10 p-1.5 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </main>
  )
}
