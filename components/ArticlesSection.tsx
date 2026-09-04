"use client"

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Card from './ui/Card'

const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" aria-labelledby="articles-heading" className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="articles-heading" className="text-2xl font-semibold text-white">Selected articles & research</h2>
          <p className="text-slate-400 mt-2">Technical writing and research publications.</p>
        </div>
        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2">
          View all posts
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/80">
          <h3 className="text-lg font-semibold text-white">Scaling LLM Systems</h3>
          <p className="text-slate-300 mt-3">Architecture patterns and operational practices for scaling LLM workloads.</p>
        </Card>

        <Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-slate-900/80">
          <h3 className="text-lg font-semibold text-white">RAG for Enterprises</h3>
          <p className="text-slate-300 mt-3">Best practices for retrieval-augmented generation in regulated environments.</p>
        </Card>

        <Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-slate-900/80">
          <h3 className="text-lg font-semibold text-white">Edge AI in Production</h3>
          <p className="text-slate-300 mt-3">Bringing efficient inference to constrained devices without sacrificing accuracy.</p>
        </Card>
      </div>
    </section>
  )
}

export default ArticlesSection
