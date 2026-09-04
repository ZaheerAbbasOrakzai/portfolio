import React from 'react'
import Link from 'next/link'
import { playgroundExperiments, profile, telemetry } from '../../lib/site'

export default function Playground() {
  return (
    <section className="mx-auto max-w-[1280px] py-8 space-y-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl">
        <div className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan">Playground</div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Interactive AI demos roadmap</h1>
        <p className="mt-4 text-slate-300 leading-7">This page is now a complete preview of the live demos planned for the portfolio. Each experience is designed to stay compatible with static deployment today while making it easy to attach real APIs later.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {playgroundExperiments.map((experiment) => (
          <article key={experiment.title} className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan">{experiment.status}</div>
            <h2 className="mt-3 text-xl font-semibold text-white">{experiment.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{experiment.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-400">
              {experiment.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-white/10 bg-[#0f1724] p-5 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">What can go live next</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-cyan/15 bg-cyan/5 p-5">
              <div className="text-sm text-slate-400">Telemetry target</div>
              <div className="mt-2 text-3xl font-semibold text-white">{telemetry.uptime}</div>
              <p className="mt-2 text-sm text-slate-300">Static-safe performance framing for the exported site.</p>
            </div>
            <div className="rounded-xl border border-cyan/15 bg-cyan/5 p-5">
              <div className="text-sm text-slate-400">Agent scale</div>
              <div className="mt-2 text-3xl font-semibold text-white">{telemetry.agents}+</div>
              <p className="mt-2 text-sm text-slate-300">Reusable metrics aligned with the homepage and case studies.</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-400">When you are ready to attach live backends, this page can connect to Hugging Face Spaces, a serverless proxy, or hosted APIs without changing the content structure.</p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Need a custom demo?</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">I can turn one of these concepts into a production-ready showcase for recruiting, client demos, or technical interviews.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-cyan px-5 py-3 font-semibold text-slate-950">Request a demo</a>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cyan/20 px-5 py-3 text-cyan">WhatsApp</a>
            <Link href="/" className="rounded-full border border-white/10 px-5 py-3 text-white">Back to portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
