'use client';

import React from 'react';
import Image from 'next/image';
import { 
  FileText, 
  FileDown, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles,
  Github,
  Mail
} from 'lucide-react';
import { profile } from '../../lib/site';
import { profileData } from '../../lib/data/profile-data';

const verifiedMetrics = [
  { label: 'Public Repositories', value: '48', desc: 'Active & Verified on GitHub' },
  { label: 'Benchmark F1 Score', value: '99.55%', desc: 'Smart City Traffic Model' },
  { label: 'Corpus Annotated', value: '34,000+', desc: 'Hadith Classification Data' },
  { label: 'Degree Awarded', value: 'BS CS', desc: 'COMSATS Islamabad (Jan 2026)' },
];

const technicalHighlights = [
  'Engineering production-grade AI systems, hybrid RAG pipelines, intelligent agent orchestration, computer vision solutions, predictive ML platforms, and secure offline-first applications.',
  'Pioneered Meshline Android: Decentralized zero-server BLE mesh with ECDH key exchange & AES-256-GCM encryption.',
  'Engineered AI Urban Nexus: Real-time YOLOv8 edge computer vision + XGBoost model (87K rows, 99.55% F1).',
  'Designed AI Hadith Authentication: Classical Arabic NLP transformer matching with biographer Isnad provenance graphs.',
  'Built Hybrid RAG Evaluation: Dense vector search combined with BM25 Okapi and cross-encoder precision reranking.'
];

export const ResumeSection: React.FC = () => {
  return (
    <section 
      id="resume" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-[#1F2937] relative overflow-hidden"
      aria-labelledby="resume-heading"
    >
      {/* Subtle background glow */}
      <div 
        className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <FileText className="w-4 h-4" />
              <span>11 // Executive Resume & Career Impact</span>
            </div>
            <h2 
              id="resume-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Verified Engineering Credentials
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Complete technical summary, production deployments, and career trajectory formatted for engineering teams and technical leadership.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Metrics, Career Highlights & Action CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 4-Item Telemetry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {verifiedMetrics.map((m) => (
                <div 
                  key={m.label} 
                  className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-2xl font-mono font-extrabold text-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-[#F8FAFC] mt-1">
                    {m.label}
                  </div>
                  <div className="text-[10px] font-mono text-[#64748B] mt-0.5">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Highlights Checklist */}
            <div className="p-6 rounded-2xl bg-[#0A0F1E] border border-[#1F2937] space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Engineering Outcomes</span>
              </div>
              <div className="space-y-3">
                {technicalHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#CBD5E1] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all shadow-[0_0_24px_rgba(6,182,212,0.3)] hover:shadow-[0_0_32px_rgba(6,182,212,0.5)] font-mono"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-[#F8FAFC] border border-[#1F2937] text-sm font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GITHUB REPOSITORIES (48)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-[#64748B] hover:text-[#CBD5E1] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>SCHEDULE INTERVIEW</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Chrono Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0A0F1E] p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#1F2937] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#F8FAFC]">
                    CHRONO TELEMETRY
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  STATUS: VERIFIED
                </span>
              </div>

              {/* Snapshot with Portrait */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#111827] border border-cyan-500/30 shrink-0">
                  <Image
                    src="/zaheer-pic.png"
                    alt="Zaheer Abbas Portrait"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                    {profile.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-semibold">
                    AI / Machine Learning Engineer
                  </div>
                  <div className="text-[11px] font-mono text-[#64748B] mt-1">
                    {profileData.location} • UTC+5 (PKT)
                  </div>
                </div>
              </div>

              {/* Education Block */}
              <div className="p-4 rounded-xl bg-[#111827]/80 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Degree</span>
                  </span>
                  <span className="text-[#64748B]">Grad: Jan 2026</span>
                </div>
                <div className="text-sm font-display font-bold text-[#F8FAFC]">
                  BS in Computer Science
                </div>
                <div className="text-xs text-[#CBD5E1] font-mono">
                  COMSATS University Islamabad, Pakistan
                </div>
              </div>

              {/* Primary Tech Stack Badges */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  Core Engineering Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Python',
                    'PyTorch',
                    'FastAPI',
                    'LangGraph',
                    'YOLOv8',
                    'Docker',
                    'Flutter',
                    'Kotlin',
                    'PostgreSQL',
                    'Next.js'
                  ].map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-[10px] font-mono text-[#94A3B8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Stamp */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>PDF Format: ATS-Optimized</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified 2026</span>
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
