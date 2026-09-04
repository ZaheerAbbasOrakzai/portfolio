'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  FileDown, 
  Mail, 
  Terminal, 
  Layers, 
  Cpu, 
  Server, 
  Smartphone, 
  Cloud,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { profile } from '../../lib/site';

interface PipelineStage {
  id: string;
  step: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  technologies: { name: string; repoSource: string }[];
}

const pipelineStages: PipelineStage[] = [
  {
    id: 'stage-data',
    step: '01',
    name: 'DATA & STORAGE',
    description: 'Relational, document, real-time, and synthetic dataset curation pipelines',
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    technologies: [
      { name: 'PostgreSQL', repoSource: 'Personal-Financial-Tracker' },
      { name: 'MongoDB', repoSource: 'ai-hadith-authentication' },
      { name: 'Firebase Firestore', repoSource: 'health-hub' },
      { name: 'Pandas & NumPy', repoSource: 'datalens' },
      { name: 'Synthetic Curators', repoSource: 'DataForge-LLM' }
    ]
  },
  {
    id: 'stage-model',
    step: '02',
    name: 'MODEL & INFERENCE',
    description: 'Deep neural networks, computer vision, transformers, and gradient boosting',
    icon: <Cpu className="w-5 h-5 text-violet-400" />,
    technologies: [
      { name: 'YOLOv8 Vision', repoSource: 'ai-urban-nexus' },
      { name: 'XGBoost (99.55% F1)', repoSource: 'ai-urban-nexus' },
      { name: 'Hugging Face Transformers', repoSource: 'ai-hadith-authentication' },
      { name: 'Deep GRU / LSTM', repoSource: 'market-forecast-ensemble' },
      { name: 'Mechanistic Interpretability', repoSource: 'transformer-internals-lab' }
    ]
  },
  {
    id: 'stage-api',
    step: '03',
    name: 'ORCHESTRATION & APIS',
    description: 'High-throughput async backends, RAG pipelines, and multi-agent coordination meshes',
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    technologies: [
      { name: 'FastAPI Python', repoSource: 'Sharia-Finance-Assistant' },
      { name: 'Flask Microservices', repoSource: 'ai-hadith-authentication' },
      { name: 'AgentMesh Runtime', repoSource: 'AgentMesh' },
      { name: 'Hybrid RAG (BM25+Dense)', repoSource: 'Hybrid-RAG-Eval' },
      { name: 'LangGraph Multi-Agent', repoSource: 'sentinel-market-intelligence' }
    ]
  },
  {
    id: 'stage-app',
    step: '04',
    name: 'APPLICATION LAYER',
    description: 'Cross-platform mobile apps, reactive web products, and decentralized networks',
    icon: <Smartphone className="w-5 h-5 text-amber-400" />,
    technologies: [
      { name: 'Flutter (Android/iOS)', repoSource: 'ai-urban-nexus' },
      { name: 'Kotlin Jetpack Compose', repoSource: 'meshline-android' },
      { name: 'React 18 & TypeScript', repoSource: 'health-hub' },
      { name: 'Next.js Modern Web', repoSource: 'portfolio' },
      { name: 'BLE Mesh Protocol', repoSource: 'meshline-android' }
    ]
  },
  {
    id: 'stage-deploy',
    step: '05',
    name: 'DEPLOYMENT & CLOUD',
    description: 'Containerization, edge endpoints, serverless hosting, and offline autonomy',
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    technologies: [
      { name: 'Docker Containers', repoSource: 'ai-hadith-authentication' },
      { name: 'Hugging Face Spaces', repoSource: 'ai-urban-nexus-pakistan' },
      { name: 'Vercel Edge Platform', repoSource: 'Sharia-Finance-Assistant' },
      { name: 'Groq Cloud LPUs', repoSource: 'health-hub' },
      { name: 'Zero-Server BLE Mesh', repoSource: 'meshline-android' }
    ]
  }
];

export const PremiumHero: React.FC = () => {
  const [activeStage, setActiveStage] = useState<PipelineStage>(pipelineStages[1]);

  return (
    <section 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#09090B] tech-grid-bg overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Decorative Atmospheric Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-transparent blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Technical Identity & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-amber-500/30 text-xs font-mono shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[#E2E8F0]">Available for AI &amp; Systems Engineering</span>
              <span className="text-[#64748B]">•</span>
              <span className="text-amber-400 font-semibold">48 Repositories</span>
            </div>

            {/* Main Headline & Identity Anchor */}
            <div className="space-y-4 relative">
              {/* Golden Ambient Backlight Halo */}
              <div 
                className="absolute -top-12 -left-8 w-72 h-36 bg-amber-500/15 blur-[60px] pointer-events-none rounded-full" 
                aria-hidden="true"
              />
              <h1 
                id="hero-title" 
                className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[1.08] text-gold-metallic select-none drop-shadow-[0_0_35px_rgba(245,158,11,0.4)]"
              >
                ZAHEER ABBAS
              </h1>
              
              {/* Premium Role Hierarchy - Professional Golden Combination */}
              <div className="text-base sm:text-xl lg:text-2xl font-mono font-extrabold tracking-tight">
                <span className="text-gold-champagne drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  AI/ML Engineer | Generative AI &amp; LLMs | Agentic AI | Data Science | Full-Stack &amp; Mobile
                </span>
              </div>
            </div>

            {/* Positioning & Core Mission - Premium Framed Presentation with Warm Amber Accents */}
            <div className="relative pl-5 py-3 border-l-2 border-amber-400 bg-gradient-to-r from-amber-500/[0.10] via-amber-500/[0.02] to-transparent rounded-r-xl max-w-2xl backdrop-blur-xs shadow-[0_0_24px_rgba(245,158,11,0.06)]">
              <p className="text-base sm:text-lg text-[#F1F5F9] font-normal leading-relaxed tracking-normal">
                Engineering production-grade AI systems, hybrid RAG pipelines, intelligent agent orchestration, computer vision solutions, predictive ML platforms, and secure offline-first applications.
              </p>
            </div>

            {/* Action Buttons Cluster - Principle 10: Hero CTA Design */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 min-h-[48px] rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                style={{
                  backgroundColor: '#080D1A',
                  border: '2px solid #00F2FF',
                  boxShadow: '0 0 28px rgba(0, 242, 255, 0.45), inset 0 0 12px rgba(0, 242, 255, 0.12)'
                }}
              >
                {/* Active telemetry signal dot */}
                <span 
                  className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0" 
                  style={{ backgroundColor: '#00F2FF', boxShadow: '0 0 10px #00F2FF' }} 
                />
                
                {/* High-visibility unique electric cyan text */}
                <span
                  className="font-mono font-black text-sm tracking-wider uppercase"
                  style={{
                    color: '#00F2FF',
                    textShadow: '0 0 12px rgba(0, 242, 255, 0.65)'
                  }}
                >
                  EXPLORE PROJECTS
                </span>
                
                <ArrowRight 
                  className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" 
                  style={{ color: '#00F2FF' }}
                />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[48px] rounded-xl bg-[#111827] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#334155] hover:border-cyan-500/50 text-sm font-mono font-semibold transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>VIEW GITHUB</span>
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 min-h-[48px] rounded-xl bg-[#0A0F1E] hover:bg-white/10 text-[#CBD5E1] hover:text-white border border-white/15 hover:border-white/30 text-sm font-mono transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 min-h-[48px] rounded-xl text-sm text-[#94A3B8] hover:text-cyan-300 transition-colors font-mono hover:bg-white/5"
              >
                <Mail className="w-4 h-4" />
                <span>CONTACT</span>
              </a>
            </div>

            {/* Technical Highlights Quick Strip */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#1F2937] max-w-xl text-xs font-mono">
              <div>
                <div className="text-cyan-400 font-bold text-lg">99.55%</div>
                <div className="text-[#64748B]">Traffic Model F1</div>
              </div>
              <div>
                <div className="text-violet-400 font-bold text-lg">34,000+</div>
                <div className="text-[#64748B]">Hadith Narration Corpus</div>
              </div>
              <div>
                <div className="text-emerald-400 font-bold text-lg">ECDH+AES</div>
                <div className="text-[#64748B]">BLE Mesh Security</div>
              </div>
            </div>
          </div>

          {/* Right Column: Section 16 "Engineering Pipeline" Interactive Widget */}
          <div className="lg:col-span-5" id="pipeline">
            <div className="bg-[#0A0F1E] border border-[#1F2937] rounded-xl p-5 shadow-2xl relative overflow-hidden animate-float-slow hover:border-cyan-500/40 transition-colors duration-500">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1F2937]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-[#CBD5E1] font-semibold ml-2">
                    ENGINEERING PIPELINE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    Live Tech Graph
                  </span>
                </div>
              </div>

              {/* Stage Navigation with animated data-traversal connection */}
              <div className="relative my-4">
                {/* Connecting traversal line */}
                <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500/20 via-violet-500/30 to-emerald-500/20 -translate-y-1/2 pointer-events-none z-0" />
                
                <div className="grid grid-cols-5 gap-1.5 relative z-10">
                  {pipelineStages.map((stage) => {
                    const isSelected = stage.id === activeStage.id;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setActiveStage(stage)}
                        onMouseEnter={() => setActiveStage(stage)}
                        className={`p-2 rounded-lg text-center transition-all flex flex-col items-center gap-1 border ${
                          isSelected 
                            ? 'bg-cyan-500/15 border-cyan-500/50 text-white shadow-[0_0_14px_rgba(6,182,212,0.25)] scale-[1.02]' 
                            : 'bg-[#111827] border-[#1F2937] text-[#64748B] hover:text-[#CBD5E1] hover:border-white/10'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span className="text-[10px] font-mono opacity-60">{stage.step}</span>
                        <div className="scale-90">{stage.icon}</div>
                        <span className="text-[9px] font-mono font-semibold tracking-tighter truncate w-full">
                          {stage.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Stage Detail Panel */}
              <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {activeStage.icon}
                    <h3 className="text-sm font-mono font-bold text-[#F8FAFC]">
                      {activeStage.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    STAGE {activeStage.step}
                  </span>
                </div>

                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Technologies extracted from actual repositories */}
                <div className="space-y-1.5 pt-2 border-t border-[#1F2937]">
                  <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                    Verified Stack & Repositories:
                  </div>
                  <div className="space-y-1.5">
                    {activeStage.technologies.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="flex items-center justify-between text-xs p-1.5 rounded bg-[#0A0F1E] border border-white/5"
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="text-[#F8FAFC] font-medium">{tech.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#64748B]">
                          src: {tech.repoSource}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive prompt note */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>Hover or tap any stage to inspect stack</span>
                <span className="text-cyan-400/80">Derived from 48 Repos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default PremiumHero;
