'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Card from './Card'

interface ProjectCardProps {
  title: string
  tagline: string
  highlights?: string[]
  caseStudyHref?: string
  repoHref?: string
  icon?: string
  accent?: 'indigo' | 'blue' | 'emerald' | 'violet' | 'rose' | 'amber'
  thumbnail?: string
}

const accentMap = {
  indigo: {
    bg: 'from-indigo/15 to-slate-950/60',
    ring: 'border-indigo/15',
    text: 'text-indigo-300',
    glow: 'bg-indigo/10',
    button: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  },
  blue: {
    bg: 'from-blue/15 to-slate-950/60',
    ring: 'border-blue/15',
    text: 'text-blue-300',
    glow: 'bg-blue/10',
    button: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  },
  emerald: {
    bg: 'from-emerald/15 to-slate-950/60',
    ring: 'border-emerald/15',
    text: 'text-emerald-300',
    glow: 'bg-emerald/10',
    button: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  },
  violet: {
    bg: 'from-violet/15 to-slate-950/60',
    ring: 'border-violet/15',
    text: 'text-violet-300',
    glow: 'bg-violet/10',
    button: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  },
  rose: {
    bg: 'from-rose/15 to-slate-950/60',
    ring: 'border-rose/15',
    text: 'text-rose-300',
    glow: 'bg-rose/10',
    button: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  },
  amber: {
    bg: 'from-amber/15 to-slate-950/60',
    ring: 'border-amber/15',
    text: 'text-amber-300',
    glow: 'bg-amber/10',
    button: 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tagline,
  highlights = [],
  caseStudyHref = '#',
  repoHref = '#',
  icon = '🤖',
  accent = 'indigo',
  thumbnail
}) => {
  const theme = accentMap[accent as keyof typeof accentMap] || accentMap.indigo
  const [imageError, setImageError] = useState(false)

  return (
    <Card
      as="article"
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div className="relative flex h-full flex-col space-y-5 p-5 sm:p-6">
        {thumbnail && !imageError ? (
          <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-900/70">
            <Image
              src={thumbnail}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className={`mb-4 flex h-36 items-center justify-center rounded-[1.4rem] border ${theme.ring} bg-gradient-to-br ${theme.bg} text-4xl`}>
            <span>{icon}</span>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.ring} text-2xl sm:h-14 sm:w-14 shrink-0`}>
            <span>{icon}</span>
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Featured Project</p>
            <h3 className="text-lg font-semibold text-white sm:text-xl leading-snug break-words">{title}</h3>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-300">{tagline}</p>

        {highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-slate-300">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className={`mt-2 inline-flex h-2 w-2 shrink-0 rounded-full ${theme.text}`} aria-hidden="true" />
                <span className="break-words">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={caseStudyHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-[12px] border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            aria-label={`View case study for ${title}`}
          >
            Case Study
          </a>
          {repoHref && repoHref !== '#' && (
            <a
              href={repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[44px] items-center justify-center rounded-[12px] px-4 py-2 text-sm font-semibold transition ${theme.button}`}
              aria-label={`View repository for ${title}`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
