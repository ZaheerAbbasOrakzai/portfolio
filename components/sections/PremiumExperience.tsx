'use client'

import React, { useState } from 'react'
import {
  Award,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Download,
  ExternalLink,
  MapPin,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { professionalExperience } from '../../lib/data/experience-data'
import type { Achievement, Experience } from '../../lib/types/portfolio'
import { profile } from '../../lib/site'
import { PremiumBadge } from '../ui/PremiumBadge'
import { PremiumCard } from '../ui/PremiumCard'

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })

const durationText = (start: string, end?: string, current?: boolean) => {
  const startDate = new Date(start)
  const endDate = current ? new Date() : end ? new Date(end) : startDate
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  if (months < 0) months = 0
  const years = Math.floor(months / 12)
  const remaining = months % 12
  if (years === 0) return remaining > 0 ? `${remaining} mo` : '1 mo'
  return remaining > 0
    ? `${years} yr${years > 1 ? 's' : ''} ${remaining} mo`
    : `${years} yr${years > 1 ? 's' : ''}`
}

const typeLabel: Record<string, string> = {
  freelance: 'Independent',
  contract: 'Contract',
  'full-time': 'Full-time',
}

const metricStyle: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
  business: { icon: BarChart3, color: 'text-success-400', bg: 'bg-success-500/10 border-success-500/20' },
  technical: { icon: Code2, color: 'text-primary-400', bg: 'bg-primary-500/10 border-primary-500/20' },
  performance: { icon: Zap, color: 'text-warning-400', bg: 'bg-warning-500/10 border-warning-500/20' },
  user: { icon: Users, color: 'text-secondary-400', bg: 'bg-secondary-500/10 border-secondary-500/20' },
}

const MetricBand: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
  const metrics = achievements
    .flatMap((achievement) => achievement.metrics ?? [])
    .slice(0, 3)

  if (metrics.length === 0) return null

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {metrics.map((metric) => {
        const style = metricStyle[metric.category] ?? metricStyle.technical
        const Icon = style.icon
        return (
          <div
            key={metric.id}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${style.bg}`}
          >
            <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-black/20 ${style.color}`}>
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className={`text-lg font-bold leading-tight ${style.color}`}>
                {String(metric.value)}
                {metric.unit ? <span className="ml-0.5 text-sm font-semibold">{metric.unit}</span> : null}
              </p>
              <p className="text-xs leading-snug text-text-tertiary">{metric.name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const glowDotClass = "h-1.5 w-1.5 rounded-full"

interface ExperienceCardProps {
  experience: Experience
  isExpanded: boolean
  onToggle: (id: string) => void
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isExpanded, onToggle }) => {
  const visibleAchievements = isExpanded
    ? experience.achievements
    : experience.achievements.slice(0, 2)
  const remainingCount = experience.achievements.length - visibleAchievements.length
  const visibleTechnologies = experience.technologies.slice(0, 6)
  const remainingTechnologies = experience.technologies.length - visibleTechnologies.length

  return (
    <PremiumCard variant="glass" hover glow className="h-full overflow-hidden rounded-2xl">
      {/* Top accent gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-500/80 via-secondary-500/60 to-transparent" />

      <div className="p-6 sm:p-8">
        {/* Role header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-300 shadow-lg shadow-primary-500/10">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold leading-snug text-text-primary sm:text-xl">
                {experience.position}
              </h3>
              <p className="mt-0.5 text-base font-semibold text-primary-400">{experience.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            {experience.type && typeLabel[experience.type] && (
              <PremiumBadge variant="secondary" size="sm">
                {typeLabel[experience.type]}
              </PremiumBadge>
            )}
            {experience.verifiable && (
              <PremiumBadge variant="success" size="sm" icon={<BadgeCheck className="h-3.5 w-3.5" />}>
                Verified
              </PremiumBadge>
            )}
          </div>
        </div>

        {/* Meta row */}
        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary-400" />
            <span className="font-medium">
              {formatDate(experience.startDate)} – {experience.current ? 'Present' : experience.endDate ? formatDate(experience.endDate) : formatDate(experience.startDate)}
            </span>
            <span className="rounded-full bg-primary-500/15 px-2 py-0.5 text-xs font-semibold text-primary-300">
              {durationText(experience.startDate, experience.endDate, experience.current)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary-400" />
            <span>{experience.location}</span>
          </div>
          {experience.industry && (
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs capitalize text-text-tertiary">
              <span className={glowDotClass + " bg-secondary-400"} />
              {experience.industry.replace(/-/g, ' ')}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mb-6 text-[15px] leading-relaxed text-text-secondary">{experience.description}</p>

        {/* Metrics band */}
        <div className="mb-6">
          <MetricBand achievements={experience.achievements} />
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-text-tertiary">
            <Award className="h-4 w-4 text-warning-400" />
            Key Achievements
          </h4>
          <div className="space-y-3">
            {visibleAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`rounded-xl border p-4 transition-colors ${
                  achievement.impact
                    ? 'border-primary-500/20 bg-primary-500/[0.06]'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div className="mb-1.5 flex items-start justify-between gap-3">
                  <h5 className="flex items-start gap-2 font-semibold text-text-primary">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    {achievement.title}
                  </h5>
                  {achievement.verified && (
                    <span className="flex items-center gap-1 text-xs font-medium text-success-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Verified
                    </span>
                  )}
                </div>
                <p className="pl-7 text-sm text-text-secondary">{achievement.description}</p>
                {achievement.impact && (
                  <p className="mt-2 flex items-start gap-1.5 pl-7 text-sm font-medium text-success-300">
                    <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {achievement.impact}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        {visibleTechnologies.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium capitalize text-text-secondary transition-colors hover:border-white/20 hover:text-text-primary"
              >
                {technology.replace(/-/g, ' ')}
              </span>
            ))}
            {remainingTechnologies > 0 && (
              <span className="rounded-full border border-dashed border-white/15 px-2.5 py-1 text-xs font-medium text-text-tertiary">
                +{remainingTechnologies} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        {(remainingCount > 0 || experience.verificationUrl || experience.companyUrl) && (
          <div className="flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
            {remainingCount > 0 && (
              <button
                type="button"
                onClick={() => onToggle(experience.id)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-text-secondary transition-all hover:border-white/25 hover:bg-white/10 hover:text-text-primary"
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show {remainingCount} More
                  </>
                )}
              </button>
            )}

            {experience.verificationUrl && (
              <a
                href={experience.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-text-secondary transition-all hover:border-white/25 hover:bg-white/10 hover:text-text-primary"
              >
                <BadgeCheck className="h-4 w-4 text-success-400" />
                Verification
              </a>
            )}

            {experience.companyUrl && (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-text-secondary transition-all hover:border-white/25 hover:bg-white/10 hover:text-text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Company
              </a>
            )}
          </div>
        )}
      </div>
    </PremiumCard>
  )
}

export const PremiumExperience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const industries = Array.from(
    new Set(professionalExperience.map((experience) => experience.industry).filter(Boolean))
  )
  const verifiedOutcomes = professionalExperience.reduce(
    (count, experience) =>
      count + experience.achievements.filter((achievement) => achievement.verified).length,
    0
  )

  const glanceStats = [
    { label: 'Roles Delivered', value: String(professionalExperience.length) },
    { label: 'Industries Served', value: String(industries.length) },
    { label: 'Verified Outcomes', value: String(verifiedOutcomes) },
  ]

  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <PremiumBadge variant="primary" size="sm" className="mb-4" icon={<Briefcase className="h-3.5 w-3.5" />}>
            Professional Experience
          </PremiumBadge>
          <h2 id="experience-heading" className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Delivering{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            Real project delivery across AI systems, research, and production engineering — with
            measurable outcomes and every result verified.
          </p>
        </div>

        {/* At-a-glance stats */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {glanceStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/[0.06]"
            >
              <p className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-3xl font-bold text-transparent">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary-500/60 via-secondary-500/60 to-transparent lg:block" />

          <div className="space-y-8 lg:space-y-10">
            {professionalExperience.map((experience, index) => {
              const isExpanded = expandedIds.has(experience.id)
              const alignRight = index % 2 === 0

              return (
                <div
                  key={experience.id}
                  className={`relative lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 ${
                    alignRight ? '' : 'lg:[&>*:first-child]:col-start-3 lg:[&>*:last-child]:col-start-1'
                  }`}
                >
                  <div className="lg:col-start-1 lg:row-start-1">
                    <ExperienceCard
                      experience={experience}
                      isExpanded={isExpanded}
                      onToggle={toggleExpanded}
                    />
                  </div>

                  <div className="hidden lg:col-start-2 lg:row-start-1 lg:flex lg:h-12 lg:w-12 lg:items-center lg:justify-center lg:rounded-full lg:bg-gradient-to-br lg:from-primary-500 lg:to-secondary-500 lg:shadow-lg lg:shadow-primary-500/30">
                    <Briefcase className="h-5 w-5 text-white lg:h-6 lg:w-6" aria-hidden="true" />
                  </div>

                  <div className="hidden lg:col-start-3 lg:row-start-1 lg:block" />
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={profile.resumePath}
            download
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-primary-500/25 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 px-6 py-3 font-semibold text-white shadow-[0_18px_60px_rgba(0,229,255,0.10)] transition-all hover:-translate-y-0.5 hover:border-primary-500/45 hover:from-primary-500/20 hover:to-secondary-500/20 hover:shadow-[0_22px_80px_rgba(0,229,255,0.16)] active:translate-y-0"
          >
            <Download className="h-4 w-4" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default PremiumExperience
