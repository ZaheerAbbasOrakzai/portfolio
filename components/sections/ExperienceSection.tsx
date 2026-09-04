'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Rocket } from 'lucide-react'
import Card from '../ui/Card'

const MotionDiv = motion.div as any

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8 lg:p-10 overflow-hidden" data-section="experience">
      <MotionDiv className="relative">
        <MotionDiv 
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Experience</p>
            <h2 id="experience-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Research depth, product focus, delivery discipline.</h2>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2 min-h-[44px] hover:shadow-[0_4px_12px_rgba(6,182,212,0.15)]">
              Discuss a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv 
          className="mt-10 grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card variant="glass" padding="lg" className="group h-full overflow-hidden border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/80 hover:shadow-[0_24px_64px_rgba(6,182,212,0.12)]">
              <MotionDiv className="flex items-center gap-4">
                <MotionDiv className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 text-cyan-300 shadow-[0_4px_16px_rgba(6,182,212,0.1)] hover:shadow-[0_8px_24px_rgba(6,182,212,0.2)] transition-all duration-300 group-hover:scale-110" whileHover={{ rotate: 360 }}>
                  <BriefcaseBusiness className="h-6 w-6" />
                </MotionDiv>
                <div>
                  <h3 className="font-semibold text-white">Enterprise integrations</h3>
                  <p className="text-sm text-slate-400">AI systems connected to business workflows.</p>
                </div>
              </MotionDiv>
              <p className="mt-5 text-sm leading-7 text-slate-400">Focused on ownership, adoption, and long-term maintainability.</p>
            </Card>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card variant="glass" padding="lg" className="group h-full overflow-hidden border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-slate-900/80 hover:shadow-[0_24px_64px_rgba(139,92,246,0.12)]">
              <MotionDiv className="flex items-center gap-4">
                <MotionDiv className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-400/10 to-violet-400/5 text-violet-300 shadow-[0_4px_16px_rgba(139,92,246,0.1)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.2)] transition-all duration-300 group-hover:scale-110" whileHover={{ rotate: 360 }}>
                  <Rocket className="h-6 w-6" />
                </MotionDiv>
                <div>
                  <h3 className="font-semibold text-white">Startups & scaleups</h3>
                  <p className="text-sm text-slate-400">Strong technical foundation, pragmatic build strategy.</p>
                </div>
              </MotionDiv>
              <p className="mt-5 text-sm leading-7 text-slate-400">Spans experimentation, deployment, infrastructure, and production handoff.</p>
            </Card>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv 
          className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {['4+ years AI engineering', 'Cross-functional delivery', 'Production architecture'].map((item, index) => (
              <MotionDiv
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <span className="rounded-full border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/80 px-4 py-3 text-center text-sm text-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(6,182,212,0.15)] hover:border-cyan-400/30 transition-all duration-300 inline-block w-full">{item}</span>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

export default ExperienceSection
