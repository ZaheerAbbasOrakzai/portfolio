// @ts-nocheck
'use client'

import React, { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'
import MetricCard from '../ui/MetricCard'
import { profile } from '../../lib/site'

const Typewriter = dynamic(() => import('../ui/Typewriter'), {
  ssr: false,
  loading: () => <div className="h-8 w-64 bg-white/5 animate-pulse rounded" />
})

const AINetworkingHUD = dynamic(() => import('../viz/AINetworkingHUD'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-950/80 animate-pulse rounded-lg" />
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.18 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
}

const telemetryMetrics = [
  { value: '50M+', label: 'Tasks Processed', sub: 'AI orchestration' },
  { value: '99.7%', label: 'Accuracy Rate', sub: 'Model performance' },
  { value: '12ms', label: 'Response Time', sub: 'Real-time inference' },
] as const

const capabilityCards = [
  {
    eyebrow: 'AI systems',
    title: 'LLM & retrieval',
    description: 'Enterprise-grade retrieval systems with measured, production-ready accuracy.',
    accent: 'indigo'
  },
  {
    eyebrow: 'Automation',
    title: 'Multi-agent orchestration',
    description: 'Autonomous workflows coordinated with disciplined, observable execution.',
    accent: 'blue'
  },
  {
    eyebrow: 'Deployment',
    title: 'Cloud infrastructure',
    description: 'Resilient, secure deployment patterns designed for scale and continuity.',
    accent: 'emerald'
  }
] as const

const cardThemes = {
  indigo: {
    wrapper: 'border-white/10 bg-slate-950/70',
    eyebrow: 'text-indigo-300',
    icon: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-200'
  },
  blue: {
    wrapper: 'border-white/10 bg-slate-950/70',
    eyebrow: 'text-blue-300',
    icon: 'border-blue-400/20 bg-blue-400/10 text-blue-200'
  },
  emerald: {
    wrapper: 'border-white/10 bg-slate-950/70',
    eyebrow: 'text-emerald-300',
    icon: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
  }
} as const

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const enableAnimations = !shouldReduceMotion

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = profile.resumePath
    link.download = profile.resumePath.split('/').pop() || 'resume.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      className="pt-4 pb-12 space-y-10 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div variants={itemVariants} className="min-w-0 space-y-7">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.24em] text-slate-300"
            variants={itemVariants}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-400"
              animate={enableAnimations ? { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Enterprise AI systems // Islamabad, PK
          </motion.div>

          <div className="space-y-4">
            <div className="min-h-[1.5rem] text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-xs">
              <Typewriter
                phrases={[
                  'Enterprise LLM Solutions • Multi-Agent Systems',
                  'Production ML Infrastructure • Computer Vision',
                  'RAG Systems Expert • AI Platform Architecture',
                  'Research to Production • Intelligent Automation'
                ]}
                typingSpeed={56}
                deletingSpeed={28}
                pauseDuration={1800}
              />
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              AI systems built to perform under pressure.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I design and ship production AI architecture, multi-agent workflows, and secure inference systems that turn research depth into measurable business impact.
            </p>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {telemetryMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-center"
              >
                <div className="font-mono text-lg font-semibold text-white">{metric.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">{metric.label}</div>
                <div className="mt-1 text-[11px] text-slate-500">{metric.sub}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => scrollToSection('systems')}
            >
              Explore AI systems
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => scrollToSection('projects')}
            >
              View case studies
            </Button>
          </motion.div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <button
              onClick={() => window.location.assign(profile.resumePagePath)}
              className="min-h-[44px] text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
            >
              Resume page
            </button>
            <button
              onClick={handleDownloadResume}
              className="min-h-[44px] text-slate-300 transition hover:text-white"
            >
              Download resume
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="relative h-[460px] sm:h-[520px] lg:h-[560px]">
            <Suspense fallback={<div className="flex h-full w-full items-center justify-center bg-slate-950/80 text-sm text-slate-400">Loading systems visualization...</div>}>
              <AINetworkingHUD />
            </Suspense>
          </div>
        </motion.div>
      </div>

      <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" variants={containerVariants}>
        {capabilityCards.map((card, index) => {
          const theme = cardThemes[card.accent]
          const icons = [
            <svg key="i1" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
            <svg key="i2" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
            <svg key="i3" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 4v5c0 4.7-2.6 8.4-7 9-4.4-.6-7-4.3-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ][index]

          return (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className={`rounded-[1.5rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${theme.wrapper}`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.icon}`}>
                {icons}
              </div>
              <div className="mt-5 space-y-3">
                <p className={`text-[11px] font-semibold uppercase tracking-[0.34em] ${theme.eyebrow}`}>{card.eyebrow}</p>
                <h2 className="text-[1.45rem] font-semibold leading-tight text-white">{card.title}</h2>
                <p className="text-sm leading-6 text-slate-300">{card.description}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-3" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <MetricCard value="7" label="Production AI Systems" trend="Deployed" className="bg-slate-950/80 p-5 border border-white/10" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard value="34K+" label="Hadith Corpus" trend="AraBERT" className="bg-slate-950/80 p-5 border border-white/10" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard value="87K+" label="Traffic Records" trend="99.55% F1" className="bg-slate-950/80 p-5 border border-white/10" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
