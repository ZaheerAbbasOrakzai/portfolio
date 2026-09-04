'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PremiumCard } from '../ui/PremiumCard';
import { PremiumBadge } from '../ui/PremiumBadge';
import { articles } from '../../lib/data/articles';

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M21 14v6H3V3h6" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
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

const BookOpenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M2 6a2 2 0 0 1 2-2h6a3 3 0 0 1 3 3v13H4a2 2 0 0 1-2-2Z" />
    <path d="M22 6a2 2 0 0 0-2-2h-6a3 3 0 0 0-3 3v13h11a2 2 0 0 0 2-2Z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 7v4l8 8 8-8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
    <circle cx="9" cy="9" r="1.5" />
  </svg>
)

const platformColors = {
  'Medium': 'from-green-500 to-emerald-500',
  'Dev.to': 'from-purple-500 to-pink-500',
  'Personal Blog': 'from-blue-500 to-cyan-500',
  'LinkedIn': 'from-blue-600 to-blue-500'
};

const platformIcons = {
  'Medium': '📝',
  'Dev.to': '👨‍💻',
  'Personal Blog': '📖',
  'LinkedIn': '💼'
};

export const PremiumBlog: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-5">
            Latest{' '}
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
              Articles
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            Insights, tutorials, and deep dives into AI, machine learning, and modern web development
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <BookOpenIcon />
            Featured Articles
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(article => article.featured).map((article, index) => (
              <div key={article.id} className="group hover:-translate-y-1 transition-all duration-500">
                <PremiumCard variant="glass" hover className="h-full rounded-3xl overflow-hidden">
                  {/* Article Thumbnail */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Platform Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-4 py-2 bg-gradient-to-r ${platformColors[article.platform]} rounded-2xl text-white text-sm font-bold flex items-center gap-2 shadow-lg`}>
                        <span>{platformIcons[article.platform]}</span>
                        <span>{article.platform}</span>
                      </div>
                    </div>

                    {/* Reading Time */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-2xl text-white text-sm font-medium border border-white/10">
                        <ClockIcon />
                        <span>{article.readingTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="space-y-5 p-8">
                    <div>
                      <PremiumBadge variant="primary" className="text-xs mb-3">
                        {article.category}
                      </PremiumBadge>
                      <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-text-secondary text-base leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-text-tertiary">
                        <CalendarIcon />
                        <span>{formatDate(article.publishedDate)}</span>
                      </div>
                      
                      <Link
                        href={article.url}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-slate-900 via-cyan-500/20 to-violet-500/20 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(6,182,212,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:via-sky-500/20 hover:to-violet-500/30 hover:shadow-[0_16px_44px_rgba(6,182,212,0.25)] sm:w-auto"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">Read Article</span>
                        <span className="rounded-full bg-white/10 p-1.5 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRightIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <TagIcon />
            Recent Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <div key={article.id} className="h-full group hover:-translate-y-1 transition-all duration-500">
                <PremiumCard variant="glass" hover className="h-full rounded-3xl overflow-hidden">
                  {/* Article Thumbnail */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Platform Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1.5 bg-gradient-to-r ${platformColors[article.platform]} rounded-xl text-white text-xs font-bold shadow-lg`}>
                        {platformIcons[article.platform]}
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="space-y-4 flex-1 flex flex-col p-6">
                    <div className="flex-1">
                      <PremiumBadge variant="secondary" className="text-xs mb-3">
                        {article.category}
                      </PremiumBadge>
                      <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-primary-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-xs text-text-tertiary">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon />
                          <span>{formatDate(article.publishedDate)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ClockIcon />
                          <span>{article.readingTime}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={article.url}
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-slate-900 via-cyan-500/20 to-violet-500/20 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(6,182,212,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:via-sky-500/20 hover:to-violet-500/30 hover:shadow-[0_14px_40px_rgba(6,182,212,0.22)]"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">Read Article</span>
                        <span className="rounded-full bg-white/10 p-1.5 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRightIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://medium.com/@zaheerabbasorakzai"
            target="_blank"
            rel="noreferrer"
            className="group mx-auto inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-slate-900 via-cyan-500/20 to-violet-500/20 px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_46px_rgba(6,182,212,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:via-sky-500/20 hover:to-violet-500/30 hover:shadow-[0_18px_55px_rgba(6,182,212,0.24)] sm:w-auto"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">View All Articles on Medium</span>
            <span className="rounded-full bg-white/10 p-1.5 transition-transform duration-300 group-hover:translate-x-1">
              <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumBlog;
