'use client';

import React, { useState } from 'react';
import { Network, GitFork, ArrowRight, Layers, Cpu, Radio, Shield, Bot, Database } from 'lucide-react';
import { ProjectRecord, projectsRegistry } from '../../lib/data/projects-registry';

interface SystemCluster {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  rootProject: string;
  subsystems: {
    name: string;
    role: string;
    repoSource?: string;
  }[];
}

const systemClusters: SystemCluster[] = [
  {
    id: 'cluster-smart-city',
    name: 'Smart City Multi-Model Ecosystem',
    category: 'Computer Vision & Time-Series',
    description: 'The interconnected AI Urban Nexus system combining 3 machine learning backends with mobile GIS routing.',
    icon: <Radio className="w-5 h-5 text-cyan-400" />,
    rootProject: 'AI Urban Nexus (Flutter Mobile Client)',
    subsystems: [
      { name: 'YOLOv8 Stolen Vehicle Detection', role: 'Object Detection & Anomaly Recognition', repoSource: 'ai-urban-nexus' },
      { name: 'XGBoost Congestion Classifier', role: '99.55% Weighted F1 across 12 Cities', repoSource: 'ai-urban-nexus' },
      { name: 'Deep LSTM Power Forecasting', role: 'Municipal Electricity Demand Prediction', repoSource: 'ai-urban-nexus' },
      { name: 'Google Maps Safe Navigation', role: 'Distance Matrix Routing avoiding Crime Hotspots', repoSource: 'ai-urban-nexus' },
      { name: 'Firebase Telemetry Sync', role: 'Real-Time Civic Emergency Alerts', repoSource: 'ai-urban-nexus' }
    ]
  },
  {
    id: 'cluster-rag',
    name: 'RAG & Document Intelligence Constellation',
    category: 'Information Retrieval & LLMs',
    description: 'Retrieval-Augmented Generation systems spanning financial compliance, academic PDFs, and evaluation.',
    icon: <Database className="w-5 h-5 text-violet-400" />,
    rootProject: 'Hybrid-RAG-Eval (Evaluation Harness)',
    subsystems: [
      { name: 'Sharia Finance Assistant', role: 'AAOIFI Standard Guidance with PII Scrubbing', repoSource: 'Sharia-Finance-Assistant' },
      { name: 'ScholarSync', role: 'PDF Methodology & Literature Gap Extractor', repoSource: 'scholarsync' },
      { name: 'NexusDesk', role: 'Enterprise Customer Support Triage & Ticket Matching', repoSource: 'nexusdesk' },
      { name: 'Chat-Boot', role: 'Sentence-Transformers Semantic Intent Search', repoSource: 'chat-boot' },
      { name: 'VaultGuard', role: 'Fail-Closed PII Redaction for Vector Ingestion', repoSource: 'vaultguard' }
    ]
  },
  {
    id: 'cluster-agents',
    name: 'Autonomous Agentic Mesh',
    category: 'Agent Orchestration & Tool Dispatch',
    description: 'Coordinated multi-agent topologies executing specialized reasoning, static analysis, and market research.',
    icon: <Bot className="w-5 h-5 text-emerald-400" />,
    rootProject: 'AgentMesh (Coordination Mesh Runtime)',
    subsystems: [
      { name: 'SocraticAI', role: 'Multi-Agent Enterprise Deliberation & Debate', repoSource: 'socraticai' },
      { name: 'Sentinel Market Intelligence', role: 'LangGraph Multi-Sector Trend Extraction', repoSource: 'sentinel-market-intelligence' },
      { name: 'Aegis Code Linter', role: 'OWASP Top 10 & PEP 8 Static Analysis', repoSource: 'aegis-code-linter' },
      { name: 'TestForge', role: 'Pytest Autonomous Test Suite Synthesis', repoSource: 'testforge' },
      { name: 'QueryForge', role: 'Natural Language to Relational SQL Synthesis', repoSource: 'queryforge' }
    ]
  },
  {
    id: 'cluster-offline-mesh',
    name: 'Decentralized Offline Networking',
    category: 'Mobile, BLE & Cryptography',
    description: 'Infrastructure-independent communications using Bluetooth Low Energy and forward-secure cryptography.',
    icon: <Shield className="w-5 h-5 text-amber-400" />,
    rootProject: 'Meshline Android (Jetpack Compose)',
    subsystems: [
      { name: 'BLE Multi-Hop Routing', role: 'Dynamic Peer Relaying without Cellular Base Stations', repoSource: 'meshline-android' },
      { name: 'ECDH Curve25519', role: 'Asymmetric Forward-Secure Key Agreement', repoSource: 'meshline-android' },
      { name: 'AES-256-GCM', role: 'Authenticated Hardware-Accelerated Payload Encryption', repoSource: 'meshline-android' },
      { name: 'OPUS Voice Engine', role: 'Low-Bitrate Push-To-Talk Audio Streaming', repoSource: 'meshline-android' }
    ]
  }
];

interface ProjectRelationGraphProps {
  onSelectProjectName?: (projectName: string) => void;
}

export const ProjectRelationGraph: React.FC<ProjectRelationGraphProps> = ({ onSelectProjectName }) => {
  const [activeCluster, setActiveCluster] = useState<SystemCluster>(systemClusters[0]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0F1E] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Network className="w-4 h-4" />
              <span>04 // System Architecture & Constellations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
              Project Relationship Graph
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Showing verified architectural topologies and subsystem dependencies across Zaheer&apos;s codebase ecosystem.
          </p>
        </div>

        {/* Cluster Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {systemClusters.map((cluster) => {
            const isSelected = cluster.id === activeCluster.id;
            
            // Cluster-specific signature styling
            let activeStyle = 'bg-[#111827] border-cyan-500/50 shadow-[0_0_24px_rgba(6,182,212,0.2)]';
            if (cluster.id === 'cluster-rag') {
              activeStyle = 'bg-[#111827] border-violet-500/50 shadow-[0_0_24px_rgba(139,92,246,0.2)]';
            } else if (cluster.id === 'cluster-agents') {
              activeStyle = 'bg-[#111827] border-emerald-500/50 shadow-[0_0_24px_rgba(16,185,129,0.2)]';
            } else if (cluster.id === 'cluster-offline-mesh') {
              activeStyle = 'bg-[#111827] border-amber-500/50 shadow-[0_0_24px_rgba(245,158,11,0.2)]';
            }

            return (
              <button
                key={cluster.id}
                onClick={() => setActiveCluster(cluster)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between space-y-2 hover:-translate-y-0.5 ${
                  isSelected
                    ? `${activeStyle} scale-[1.01]`
                    : 'bg-[#09090B] border-[#1F2937] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-white/5">{cluster.icon}</div>
                  <span className="text-[10px] font-mono text-[#64748B]">
                    {cluster.subsystems.length} Subsystems
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                    {cluster.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#64748B] mt-0.5">
                    {cluster.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Constellation Tree Canvas / Diagram */}
        <div className="bg-[#09090B] border border-[#1F2937] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F2937] pb-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                System Topology
              </div>
              <div className="font-display font-bold text-lg text-[#F8FAFC]">
                {activeCluster.name}
              </div>
            </div>
            <span className="text-xs font-mono text-[#CBD5E1] max-w-sm text-left sm:text-right">
              {activeCluster.description}
            </span>
          </div>

          {/* Root Node */}
          <div className="flex flex-col items-center">
            <div className={`px-5 py-3 rounded-xl border text-sm font-mono font-bold text-[#F8FAFC] shadow-lg flex items-center gap-2.5 transition-all ${
              activeCluster.id === 'cluster-rag'
                ? 'bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                : activeCluster.id === 'cluster-agents'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                : activeCluster.id === 'cluster-offline-mesh'
                ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
            }`}>
              {activeCluster.icon}
              <span>ROOT SYSTEM: {activeCluster.rootProject}</span>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 via-violet-500/40 to-[#1F2937]" />
          </div>

          {/* Subsystem Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {activeCluster.subsystems.map((sub, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-cyan-500/30 transition-all space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold">NODE // 0{idx + 1}</span>
                  {sub.repoSource && (
                    <span className="text-[10px] text-[#64748B] bg-black/40 px-2 py-0.5 rounded border border-white/5">
                      {sub.repoSource}
                    </span>
                  )}
                </div>
                <div className="font-display font-semibold text-sm text-[#F8FAFC]">
                  {sub.name}
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {sub.role}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
export default ProjectRelationGraph;
