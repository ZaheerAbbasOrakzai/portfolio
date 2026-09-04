'use client';

import React from 'react';
import { 
  Bot, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  Layers, 
  Zap, 
  Activity, 
  Network, 
  Radio, 
  ArrowRight,
  Sparkles,
  Lock,
  GitBranch
} from 'lucide-react';

interface SystemCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  technologies: string[];
  repoSource: string;
}

const capabilities: SystemCapability[] = [
  {
    id: 'multi-agent',
    title: 'Autonomous Multi-Agent Orchestration',
    subtitle: 'Distributed State Machines & Tool Routing',
    description: 'Hierarchical agent meshes built on LangGraph and custom stateful runtimes. Supports dynamic delegator patterns, reflection loops, self-correction, and tool-use sandboxes.',
    metric: '40+ Agents',
    metricLabel: 'Orchestrated Workflows',
    badge: 'LangGraph / AgentMesh',
    icon: Bot,
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30 hover:border-cyan-400',
    glowColor: 'shadow-[0_0_24px_rgba(6,182,212,0.15)]',
    technologies: ['LangGraph', 'AgentMesh', 'FastAPI', 'Python AsyncIO'],
    repoSource: 'AgentMesh'
  },
  {
    id: 'hybrid-rag',
    title: 'Enterprise Hybrid RAG & Vector Search',
    subtitle: 'BM25 Lexical + Dense Embeddings + Reranking',
    description: 'Sub-second retrieval architectures pairing sparse keyword indexing (BM25) with high-dimensional dense vector search, cross-encoder reranking, and citation-grounded outputs.',
    metric: '99.7%',
    metricLabel: 'Retrieval Relevance',
    badge: 'Zero Hallucination Pipeline',
    icon: Cpu,
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/30 hover:border-violet-400',
    glowColor: 'shadow-[0_0_24px_rgba(139,92,246,0.15)]',
    technologies: ['ChromaDB', 'BM25', 'BGE-Reranker', 'Hugging Face'],
    repoSource: 'Hybrid-RAG-Eval'
  },
  {
    id: 'edge-inference',
    title: 'Edge Computer Vision & High-Throughput Inference',
    subtitle: 'Real-time Object Detection & Telemetry',
    description: 'Optimized neural pipelines running edge vision models at sub-5ms per frame. Engineered for smart city urban flow telemetry, edge CCTV ingestion, and lightweight embedded inference.',
    metric: '4.8ms',
    metricLabel: 'Per-Frame Inference Latency',
    badge: 'Edge YOLOv8 + TensorRT',
    icon: Zap,
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/30 hover:border-amber-400',
    glowColor: 'shadow-[0_0_24px_rgba(245,158,11,0.15)]',
    technologies: ['YOLOv8', 'XGBoost (99.55% F1)', 'OpenCV', 'TensorFlow Lite'],
    repoSource: 'ai-urban-nexus'
  },
  {
    id: 'offline-mesh',
    title: 'Decentralized Encrypted Mesh Networks',
    subtitle: 'Zero-Internet Peer-to-Peer Relay',
    description: 'Infrastructure-less mobile communication network utilizing Bluetooth Low Energy mesh protocol. Features end-to-end ECDH key exchange, AES-256-GCM encryption, and multi-hop routing.',
    metric: 'AES-256',
    metricLabel: 'ECDH Cryptographic Handshake',
    badge: 'Zero-Server Topology',
    icon: Radio,
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400',
    glowColor: 'shadow-[0_0_24px_rgba(16,185,129,0.15)]',
    technologies: ['Kotlin Jetpack Compose', 'BLE GATT Mesh', 'ECDH Key Agreement', 'Room DB'],
    repoSource: 'meshline-android'
  }
];

export const SystemsSection: React.FC = () => {
  return (
    <section 
      id="systems" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-[#1F2937] relative overflow-hidden"
      aria-labelledby="systems-heading"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header with Live HUD Telemetry */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F2937] pb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Network className="w-4 h-4" />
              <span>02 // Systems & Multi-Agent Architecture</span>
            </div>
            <h2 
              id="systems-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Production AI Systems & Orchestration
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0F1E] border border-cyan-500/30 text-xs font-mono text-[#CBD5E1]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CLUSTER: ACTIVE</span>
              <span className="text-[#64748B]">•</span>
              <span className="text-cyan-400">4 ARCHITECTURES</span>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore All Repos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2x2 High-Density Command Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className={`p-6 sm:p-8 rounded-2xl bg-[#0A0F1E] border ${cap.borderColor} ${cap.glowColor} transition-all duration-300 flex flex-col justify-between space-y-6 group`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge + Metric */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#111827] border border-white/10 group-hover:scale-105 transition-transform">
                        <Icon className={`w-6 h-6 ${cap.accentColor}`} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#CBD5E1]">
                          {cap.badge}
                        </span>
                        <div className="text-xs font-mono text-[#64748B] mt-1">
                          src: {cap.repoSource}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xl font-mono font-extrabold ${cap.accentColor}`}>
                        {cap.metric}
                      </div>
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">
                        {cap.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-1 font-medium">
                      {cap.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Source Link */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#111827] border border-[#1F2937] text-[11px] font-mono text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://github.com/ZaheerAbbasOrakzai/${cap.repoSource}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#64748B] hover:text-cyan-400 transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View System Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Architecture Telemetry Strip */}
        <div className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-xs">
          <div>
            <div className="text-cyan-400 font-bold text-base">Async Python 3.11</div>
            <div className="text-[#64748B] text-[11px]">Primary Core Backend</div>
          </div>
          <div>
            <div className="text-violet-400 font-bold text-base">Dockerized & Edge</div>
            <div className="text-[#64748B] text-[11px]">Container Architecture</div>
          </div>
          <div>
            <div className="text-emerald-400 font-bold text-base">Grounded Hallucination &lt;0.3%</div>
            <div className="text-[#64748B] text-[11px]">RAG Quality Assurance</div>
          </div>
          <div>
            <div className="text-amber-400 font-bold text-base">Offline P2P Mesh</div>
            <div className="text-[#64748B] text-[11px]">Zero Single Point of Failure</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SystemsSection;
