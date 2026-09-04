"use client"
import React from 'react'
import TelemetryCard from '../ui/TelemetryCard'
import { telemetry } from '../../lib/site'

const Dashboard: React.FC = () => {
	return (
		<section id="dashboard" aria-labelledby="dashboard-heading" className="mt-16 rounded-[24px] border border-primary-500/10 bg-gradient-to-br from-primary-500/10 via-slate-950/70 to-accent-500/10 p-6 sm:p-8 lg:p-10 shadow-[0_20px_70px_rgba(6,182,212,0.12)] relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-emerald-400/5 opacity-50" />
			<div className="absolute top-0 right-0 -mr-32 -mt-32 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-[100px]" />
			<div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[100px]" />
			<div className="relative">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
					<p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-400">Performance metrics</p>
					<h2 id="dashboard-heading" className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Production telemetry</h2>
					<p className="mt-3 text-sm text-slate-400">Real-time metrics from AI infrastructure.</p>
				</div>
					<div className="inline-flex items-center gap-2 rounded-full border border-primary-400/20 bg-primary-400/10 px-4 py-2 text-sm text-primary-300 shadow-[0_4px_12px_rgba(6,182,212,0.15)]">
					Live monitoring
				</div>
				</div>
				<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
					<TelemetryCard value={telemetry.agents} label="AI Systems" description="Production" />
					<TelemetryCard value={34} suffix="K+" label="Hadith Corpus" description="NLP narrations" />
					<TelemetryCard value={87} suffix="K+" label="Traffic Records" description="Smart city" />
					<TelemetryCard value={99.55} suffix="%" label="Accuracy" description="F1-Score" />
				</div>
			</div>
		</section>
	)
}

export default Dashboard

