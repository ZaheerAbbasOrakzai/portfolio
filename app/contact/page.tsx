"use client"
import React from 'react'
import Link from 'next/link'
import ContactHandler from '../../components/ContactHandler'
import { profile } from '../../lib/site'

// Note: This is a client component, so metadata is handled in layout.tsx
// For future server-side rendering, we can extract the form logic to a separate component

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
          <div className="inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-300">Contact</div>
          <h1 className="mt-4 text-3xl font-semibold text-white">Let&apos;s discuss the next move</h1>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Whether you need a robust AI architecture, implementation support, or an experienced technical partner, I can help you move from idea to execution with clarity and momentum.
          </p>

          <div className="mt-8">
            <ContactHandler variant="inline" />
          </div>
        </div>

        <aside className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Direct channels</h2>
          <div className="mt-6 space-y-4 text-sm">
            <a href={`mailto:${profile.email}`} className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#EA4335]/30 hover:bg-[#EA4335]/5 transition duration-300">
              <div className="text-slate-400 uppercase tracking-[0.2em] text-xs">Email</div>
              <div className="mt-1 text-white break-all">{profile.email}</div>
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition duration-300">
              <div className="text-slate-400 uppercase tracking-[0.2em] text-xs">WhatsApp</div>
              <div className="mt-1 text-white">{profile.phone}</div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition duration-300">
              <div className="text-slate-400 uppercase tracking-[0.2em] text-xs">LinkedIn</div>
              <div className="mt-1 text-white">Professional profile and messaging</div>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-slate-200/30 hover:bg-slate-200/5 transition duration-300">
              <div className="text-slate-400 uppercase tracking-[0.2em] text-xs">GitHub</div>
              <div className="mt-1 text-white">Repositories, shipped work, and code samples</div>
            </a>
            <a href={profile.huggingFace} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#FFD21E]/30 hover:bg-[#FFD21E]/5 transition duration-300">
              <div className="text-slate-400 uppercase tracking-[0.2em] text-xs">Hugging Face</div>
              <div className="mt-1 text-white">Models, demos, and AI artifacts</div>
            </a>
            <a href="https://calendly.com/zaheer-abbas-ai" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#006BFF]/30 hover:bg-[#006BFF]/5 transition duration-300">
              <div className="text-slate-400 uppercase tracking-[0.2em] text-xs">Schedule Consultation</div>
              <div className="mt-1 text-white">Book a free 30-minute strategy session</div>
            </a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
            <p>Looking for the full portfolio overview first?</p>
            <Link href="/" className="mt-3 inline-flex text-primary-400 hover:text-white transition">Return to homepage</Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
