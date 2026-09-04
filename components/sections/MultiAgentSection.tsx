"use client"

import React from 'react'
import { Layers3, Sparkles, Workflow } from 'lucide-react'
import Card from '../ui/Card'

const MultiAgentSection: React.FC = () => {
  return (
    <section className="rounded-[2rem] border border-indigo-400/10 bg-gradient-to-br from-indigo-500/10 via-slate-950/70 to-blue-500/10 p-6 shadow-[0_24px_80px_rgba(99,102,241,0.15)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">Multi-Agent Systems</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Autonomous AI workflows</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Scalable agent orchestration with real-time monitoring and self-healing capabilities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">40+ Deployed Agents</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Real-time Orchestration</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Auto-scaling</span>
          </div>
        </div>

        <div className="grid gap-4">
          <Card variant="glass" padding="lg" className="border-white/10 bg-slate-900/60 transition-all duration-300 hover:border-indigo-400/20 hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300">
                <Workflow className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Task Orchestration</h3>
                <p className="text-sm text-slate-400">Intelligent routing and fallback logic.</p>
              </div>
            </div>
          </Card>
          <Card variant="glass" padding="lg" className="border-white/10 bg-slate-900/60 transition-all duration-300 hover:border-blue-400/20 hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">RAG Integration</h3>
                <p className="text-sm text-slate-400">Grounded responses with citations.</p>
              </div>
            </div>
          </Card>
          <Card variant="glass" padding="lg" className="border-white/10 bg-slate-900/60 transition-all duration-300 hover:border-emerald-400/20 hover:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Scalable Architecture</h3>
                <p className="text-sm text-slate-400">Modular design for rapid growth.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MultiAgentSection
