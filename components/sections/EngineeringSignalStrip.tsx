'use client';

import React from 'react';
import { GitBranch, ShieldCheck, Cpu, Database, Award, Radio } from 'lucide-react';

const signals = [
  {
    icon: <GitBranch className="w-4 h-4 text-cyan-400" />,
    value: '48 Repositories',
    label: 'GitHub Public Universe',
    source: 'github.com/ZaheerAbbasOrakzai'
  },
  {
    icon: <Cpu className="w-4 h-4 text-violet-400" />,
    value: '99.55% F1 Score',
    label: 'Smart City Traffic Model',
    source: 'ai-urban-nexus (87K rows)'
  },
  {
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    value: '34,000+ Corpus',
    label: 'Hadith Classification Texts',
    source: 'ai-hadith-authentication'
  },
  {
    icon: <Radio className="w-4 h-4 text-cyan-400" />,
    value: 'ECDH + AES-256',
    label: 'Decentralized BLE Mesh',
    source: 'meshline-android'
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
    value: 'Hybrid RAG Eval',
    label: 'BM25 + Dense Neural Search',
    source: 'Hybrid-RAG-Eval'
  },
  {
    icon: <Award className="w-4 h-4 text-cyan-400" />,
    value: 'BS Computer Science',
    label: 'COMSATS Islamabad (Jan 2026)',
    source: 'Verified Degree'
  }
];

export const EngineeringSignalStrip: React.FC = () => {
  return (
    <section className="bg-[#0A0F1E] border-y border-[#1F2937] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {signals.map((sig, idx) => (
            <div 
              key={idx} 
              className="flex flex-col space-y-1 p-3 rounded-lg bg-[#111827]/60 border border-white/[0.04] hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                {sig.icon}
                <span className="font-mono font-bold text-sm text-[#F8FAFC]">
                  {sig.value}
                </span>
              </div>
              <span className="text-xs text-[#CBD5E1] font-medium truncate">
                {sig.label}
              </span>
              <span className="text-[10px] font-mono text-[#64748B] truncate">
                {sig.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EngineeringSignalStrip;
