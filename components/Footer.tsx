"use client"
import React from 'react'
import { profile, telemetry } from '../lib/site'

const Footer: React.FC = () => {
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer role="contentinfo" aria-label="Footer" className="relative mt-12 sm:mt-20 border-t border-white/10 pt-10 sm:pt-12 pb-8 sm:pb-10 text-sm text-slate-400 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.06),_transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]">
        <div className="space-y-4 text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Enterprise AI Platform</div>
          <div className="text-2xl font-semibold text-white">{profile.name}</div>
          <p className="max-w-lg leading-7 text-slate-400 mx-auto sm:mx-0">Delivering AI architecture, intelligent automation, and multimodal systems for enterprise-scale innovation and measurable impact.</p>
        </div>

        <div className="text-center sm:text-left">
          <div className="mb-3 text-sm font-medium text-slate-200">Explore</div>
          <ul className="space-y-3 sm:space-y-2 text-sm text-slate-400">
            <li><a href="/#systems" className="transition hover:text-white inline-block py-1 sm:py-0">AI Systems</a></li>
            <li><a href="/#projects" className="transition hover:text-white inline-block py-1 sm:py-0">Projects</a></li>
            <li><a href="/#experience" className="transition hover:text-white inline-block py-1 sm:py-0">Experience</a></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <div className="mb-3 text-sm font-medium text-slate-200">Connect</div>
          <ul className="space-y-3 sm:space-y-2 text-sm text-slate-400">
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white inline-block py-1 sm:py-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">GitHub</a></li>
            <li><a href={profile.huggingFace} target="_blank" rel="noopener noreferrer" className="transition hover:text-white inline-block py-1 sm:py-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Hugging Face</a></li>
            <li><a href={`mailto:${profile.email}`} className="transition hover:text-white inline-block py-1 sm:py-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Email</a></li>
            <li><span className="text-slate-500 block py-1 sm:inline sm:py-0">Uptime: <span className="text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]">{telemetry.uptime}</span></span></li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 px-4 pt-6 text-xs text-slate-500 lg:flex-row sm:px-6 text-center">
        <div className="order-2 lg:order-1">© {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind</div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 order-1 lg:order-2">
          <span className="max-w-[280px] sm:max-w-none leading-relaxed">Designed for enterprise AI systems and secure, high-performance delivery.</span>
          <button onClick={handleBackToTop} className="rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 px-4 py-2 text-slate-300 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-cyan-500/10 hover:text-white hover:shadow-[0_4px_12px_rgba(0,217,255,0.2)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" aria-label="Back to top">Back to top ↑</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
