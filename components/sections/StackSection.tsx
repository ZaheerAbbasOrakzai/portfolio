'use client'

import React from 'react'
import Card from '../ui/Card'

const StackSection: React.FC = () => {
	return (
		<section id="stack" aria-labelledby="stack-heading" className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8" data-section="stack">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<h2 id="stack-heading" className="text-2xl sm:text-3xl font-semibold text-white">Technical stack ecosystem</h2>
					<p className="text-sm text-slate-400 mt-2">Comprehensive technology stack for AI systems development.</p>
				</div>
				<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
					Enterprise-ready tools and frameworks
				</div>
			</div>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
					<h3 className="text-base sm:text-lg font-semibold text-white">Core AI Frameworks</h3>
					<div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
						{['PyTorch','TensorFlow','Transformers','LangChain','CrewAI','AutoGen'].map(t => <span key={t} className="px-2 py-1 bg-slate-900 rounded-full">{t}</span>)}
					</div>
				</Card>
				<Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20">
					<h3 className="text-base sm:text-lg font-semibold text-white">Infrastructure & Deployment</h3>
					<div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
						{['Docker','Kubernetes','FastAPI','MLflow','Redis','PostgreSQL'].map(t => <span key={t} className="px-2 py-1 bg-slate-900 rounded-full">{t}</span>)}
					</div>
				</Card>
				<Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20">
					<h3 className="text-base sm:text-lg font-semibold text-white">Flutter & Mobile</h3>
					<div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
						{['Flutter','TensorFlow Lite','Firebase','ONNX Runtime','ML Kit'].map(t => <span key={t} className="px-2 py-1 bg-slate-900 rounded-full">{t}</span>)}
					</div>
				</Card>
			</div>
		</section>
	)
}

export default StackSection
