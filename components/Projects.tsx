'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ui/ProjectCard'
import { portfolioProjects } from '../lib/data/portfolio-data'

const Projects: React.FC = () => {
  const featuredProjects = portfolioProjects.filter(project => project.featured).slice(0, 3)

  // Map old accent values to new elite color scheme
  const accentMapping: Record<string, 'indigo' | 'blue' | 'emerald' | 'violet' | 'rose' | 'amber'> = {
    cyan: 'indigo',
    emerald: 'emerald',
    violet: 'violet',
    orange: 'amber',
    blue: 'blue',
    purple: 'violet',
    pink: 'rose',
    green: 'emerald'
  }

  return (
    <section id="projects" className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/70 p-6 sm:p-8" aria-labelledby="projects-heading">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_35%)]" />
      <div className="relative">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">Featured projects</p>
            <h2 id="projects-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Production AI systems</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              Enterprise-grade solutions with measurable impact.
            </p>
          </div>

          <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:border-white/20 min-h-[44px]">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              highlights={[
                `${project.technologies.slice(0, 2).map(tech => tech.toUpperCase()).join(' + ')}`,
                project.caseStudy.results[0]?.metric || 'Production-ready',
                `${project.industry.charAt(0).toUpperCase() + project.industry.slice(1)}`
              ]}
              icon={project.icon}
              accent={accentMapping[project.accent] || 'indigo'}
              thumbnail={project.media.thumbnail}
              caseStudyHref={`/portfolio?project=${project.id}`}
              repoHref={project.media.repository}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
