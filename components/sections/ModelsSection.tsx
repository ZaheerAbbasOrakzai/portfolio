import React from 'react'
import Card from '../ui/Card'

const ModelsSection: React.FC = () => {
	return (
		<section id="models" aria-labelledby="models-heading" className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<h2 id="models-heading" className="text-2xl sm:text-3xl font-semibold text-white">AI models & deployments</h2>
					<p className="text-sm text-slate-400 mt-2">Production-ready models and Hugging Face deployments.</p>
				</div>
				<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
					Production ready · scalable · secure
				</div>
			</div>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
					<h3 className="text-lg sm:text-xl font-semibold text-white">Arabic LLM Suite</h3>
					<p className="text-sm text-slate-300 mt-3">Specialized language models for Arabic text processing, fine-tuned on domain-specific datasets.</p>
				</Card>
				<Card variant="glass" padding="lg" className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20">
					<h3 className="text-lg sm:text-xl font-semibold text-white">Computer Vision Models</h3>
					<p className="text-sm text-slate-300 mt-3">Optimized models for real-time detection and segmentation with mobile deployment support.</p>
				</Card>
			</div>
		</section>
	)
}

export default ModelsSection
