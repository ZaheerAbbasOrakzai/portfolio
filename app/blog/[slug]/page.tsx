import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../../../lib/data/articles'
import { generateArticleSchema } from '../../../lib/seo'
import { profile } from '../../../lib/site'

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
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

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = articles.find((item) => item.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found | Zaheer Abbas',
    }
  }

  return {
    title: `${article.title} | Zaheer Abbas`,
    description: article.excerpt,
    keywords: [article.category, 'AI engineering', 'Zaheer Abbas'],
    alternates: {
      canonical: `${profile.siteUrl}${article.url}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `${profile.siteUrl}${article.url}`,
      images: [{ url: `${profile.siteUrl}${article.thumbnail}`, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`${profile.siteUrl}${article.thumbnail}`],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug)

  if (!article) {
    notFound()
  }

  const renderSection = (section: (typeof article.sections)[number], index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2
            key={`${section.type}-${index}`}
            className="mb-4 mt-10 text-2xl font-semibold text-white sm:text-3xl"
          >
            {section.text}
          </h2>
        )
      case 'list':
        return (
          <ul
            key={`${section.type}-${index}`}
            className="mb-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-300 lg:pl-8"
          >
            {section.items.map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`} className="marker:text-cyan-400">{item}</li>
            ))}
          </ul>
        )
      case 'callout':
        return (
          <div
            key={`${section.type}-${index}`}
            className="mb-8 rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6 shadow-[0_20px_60px_rgba(8,15,34,0.45)]"
          >
            <h3 className="mb-3 text-xl font-semibold text-cyan-200">{section.title}</h3>
            <p className="text-lg leading-8 text-slate-200">{section.text}</p>
          </div>
        )
      case 'metrics':
        return (
          <div
            key={`${section.type}-${index}`}
            className="mb-8 grid gap-4 md:grid-cols-3"
          >
            {section.items.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border border-white/10 bg-slate-950/80 p-5 shadow-lg shadow-black/20">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        )
      case 'table':
        return (
          <div
            key={`${section.type}-${index}`}
            className="mb-8 overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/70"
          >
            <div className="border-b border-white/10 bg-white/5 px-5 py-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-300">
                <thead className="bg-white/5 text-xs uppercase tracking-[0.24em] text-slate-400">
                  <tr>
                    {section.headers.map((header) => (
                      <th key={header} className="px-5 py-4">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, rowIndex) => (
                    <tr key={`${row.join('-')}-${rowIndex}`} className="border-t border-white/10 odd:bg-white/[0.02]">
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`} className="px-5 py-4 align-top leading-7">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      default:
        return (
          <p
            key={`${section.type}-${index}`}
            className="mb-6 text-lg leading-8 text-slate-300"
          >
            {section.text}
          </p>
        )
    }
  }

  const articleSchema = generateArticleSchema(article)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: profile.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${profile.siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `${profile.siteUrl}${article.url}` },
    ],
  }

  return (
    <main className="relative overflow-hidden bg-slate-950 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),_transparent_35%)]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">
            <ArrowLeftIcon />
            Back to articles
          </Link>
        </div>

        <article className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-black/25">
          <div className="mb-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">{article.category}</div>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{article.title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{article.excerpt}</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-300 shadow-xl shadow-slate-950/20">
              <div className="flex items-center gap-2 text-slate-400">
                <CalendarIcon />
                <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ClockIcon />
                <span>{article.readingTime}</span>
              </div>
              <div className="rounded-3xl bg-slate-950/70 px-4 py-3 text-center text-white">Published on {article.platform}</div>
            </div>
          </div>

          <div className="relative mb-10 h-80 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70">
            <Image src={article.thumbnail} alt={article.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          <div className="space-y-2">
            {article.sections.map((section, index) => renderSection(section, index))}
          </div>
        </article>
      </div>
    </main>
  )
}
