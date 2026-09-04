'use client';

import React from 'react';
import { Terminal, Github, Linkedin, MessageSquare, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { profile } from '../../lib/site';

export const PremiumFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] border-t border-[#1F2937] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Row: Identity & Quick Socials */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0A0F1E] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-display font-bold text-base text-[#F8FAFC]">
                Zaheer Abbas
              </span>
            </div>
            <p className="text-xs font-mono text-[#94A3B8]">
              AI/ML Engineer • Generative AI &amp; LLMs • Agentic AI • Data Science • Full-Stack &amp; Mobile
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1F2937] text-[#CBD5E1] hover:text-white hover:border-cyan-500/30 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1F2937] text-[#CBD5E1] hover:text-white hover:border-violet-500/30 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.huggingFace}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-[#111827] border border-[#1F2937] text-xs font-mono text-[#CBD5E1] hover:text-white transition-colors"
            >
              HuggingFace
            </a>
            <a
              href={profile.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-[#111827] border border-[#1F2937] text-xs font-mono text-[#CBD5E1] hover:text-white transition-colors"
            >
              Kaggle
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1F2937] text-[#CBD5E1] hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Metadata, Timezone, Back to Top */}
        <div className="pt-6 border-t border-[#1F2937]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Zaheer Abbas. All rights reserved.</span>
            <span>•</span>
            <span>Timezone: PKT (UTC+5)</span>
            <span>•</span>
            <span>48 Audited Repositories</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors w-fit"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
export default PremiumFooter;
