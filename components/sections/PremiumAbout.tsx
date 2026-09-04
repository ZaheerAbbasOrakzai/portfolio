'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  GraduationCap, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ExternalLink,
  Github
} from 'lucide-react';
import { profileData } from '../../lib/data/profile-data';
import { profile } from '../../lib/site';

export const PremiumAbout: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Terminal className="w-4 h-4" />
              <span>01 // Technical Identity</span>
            </div>
            <h2 
              id="about-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Engineered From First Principles
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Grounded in academic rigor, verified codebases, and reproducible metrics across 48 public repositories.
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Verified Context Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden bg-[#111827] border border-[#1F2937] aspect-[4/5] shadow-2xl">
                <Image
                  src="/zaheer-pic.png"
                  alt="Zaheer Abbas - AI / Machine Learning Engineer"
                  fill
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
                
                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0F1E]/90 backdrop-blur-md border border-white/10">
                  <div className="font-display font-bold text-base text-gold-metallic">Zaheer Abbas</div>
                  <div className="text-xs font-mono text-gold-champagne font-semibold leading-snug">
                    AI/ML Engineer • GenAI &amp; LLMs • Agentic AI • Full-Stack &amp; Mobile
                  </div>
                  <div className="text-[11px] font-mono text-[#64748B] mt-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#CBD5E1]" />
                    <span>COMSATS University Islamabad (Jan 2026)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Geo & Availability Card */}
            <div className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-[#CBD5E1]">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Location</span>
                </span>
                <span className="text-[#F8FAFC]">{profileData.location}</span>
              </div>
              <div className="flex items-center justify-between text-[#CBD5E1]">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  <span>Timezone</span>
                </span>
                <span className="text-[#F8FAFC]">PKT (UTC+5)</span>
              </div>
              <div className="flex items-center justify-between text-[#CBD5E1]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Availability</span>
                </span>
                <span className="text-emerald-400 font-semibold">Available for Engineering Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Technical Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-[#CBD5E1] text-base sm:text-lg leading-relaxed font-normal">
              {profileData.bio.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-5 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="p-2.5 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC]">
                  Applied ML & Computer Vision
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Real-time object detection (YOLOv8), medical CT classification (CNN), and high-precision gradient boosted decision trees (XGBoost 99.55% F1).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-violet-500/40 transition-colors space-y-2">
                <div className="p-2.5 w-fit rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC]">
                  RAG & Transformer Interpretability
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Dual-path hybrid retrieval (BM25 + Dense) with Reciprocal Rank Fusion, RAG Triad evaluation, and mechanistic attention heatmapping.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-emerald-500/40 transition-colors space-y-2">
                <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC]">
                  Autonomous Agent Orchestration
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Multi-agent coordination meshes (AgentMesh), typed tool dispatch with Pydantic v2, Socratic multi-agent deliberation, and static analysis linters.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-amber-500/40 transition-colors space-y-2">
                <div className="p-2.5 w-fit rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC]">
                  Mobile, Mesh & Full-Stack
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Decentralized BLE Mesh networking with ECDH Curve25519 & AES-256-GCM (Kotlin Compose), cross-platform Flutter mobile apps, and Next.js / FastAPI systems.
                </p>
              </div>

            </div>

            {/* Quick Education Credential Box */}
            <div className="p-5 rounded-xl bg-[#0A0F1E] border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Academic Foundation
                </div>
                <div className="font-display font-bold text-sm text-[#F8FAFC]">
                  COMSATS University Islamabad
                </div>
                <div className="text-xs text-[#CBD5E1]">
                  Bachelor of Science in Computer Science • Graduated January 2026
                </div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111827] text-xs font-mono text-[#CBD5E1] hover:text-white border border-[#1F2937] w-fit"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>Audit 48 Repositories</span>
                <ExternalLink className="w-3 h-3 text-[#64748B]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default PremiumAbout;