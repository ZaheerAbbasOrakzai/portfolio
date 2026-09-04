'use client';

import React, { useState } from 'react';
import { Cpu, ArrowUpRight, CheckCircle2, Code2, Sparkles, Terminal } from 'lucide-react';
import { skillDomains, SkillDomain, SkillItem } from '../../lib/data/skills-data';

interface TechnicalDomainsSectionProps {
  onSelectSkill: (skillId: string, skillName: string) => void;
}

export const TechnicalDomainsSection: React.FC<TechnicalDomainsSectionProps> = ({ onSelectSkill }) => {
  const [activeDomain, setActiveDomain] = useState<string>(skillDomains[0].id);

  return (
    <section 
      id="skills" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] relative"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Cpu className="w-4 h-4" />
              <span>06 // Technical Domains</span>
            </div>
            <h2 
              id="skills-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Evidence-Linked Capabilities
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Zero arbitrary proficiency percentages. Every skill is directly backed by public repositories and verifiable codebases.
          </p>
        </div>

        {/* Domain Selection Tabs */}
        <div className="flex flex-wrap gap-2">
          {skillDomains.map((domain) => {
            const isSelected = domain.id === activeDomain;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_16px_rgba(6,182,212,0.3)]'
                    : 'bg-[#111827] text-[#CBD5E1] hover:bg-[#1F2937] border border-[#1F2937]'
                }`}
              >
                {domain.name}
              </button>
            );
          })}
        </div>

        {/* Active Domain Skills Grid */}
        {skillDomains.filter(d => d.id === activeDomain).map((domain) => (
          <div key={domain.id} className="space-y-6">
            <div className="text-xs font-mono text-[#64748B]">
              {domain.description}
            </div>

            {/* Principle 22 & 23: DOMAIN -> TECHNOLOGIES -> RELATED PROJECTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {domain.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="technical-card p-5 rounded-2xl bg-[#0A0F1E] border border-[#1F2937] flex flex-col justify-between space-y-4 group hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <div className="space-y-3">
                    {/* Level 1: Technology Identity */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-base text-[#F8FAFC] group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                        {skill.projectCount} {skill.projectCount === 1 ? 'Repo' : 'Repos'}
                      </span>
                    </div>

                    {/* Level 2: Directional Connector to Related Projects */}
                    <div className="space-y-2 pt-1 border-t border-[#1F2937]/60">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>Verified Project Deployments:</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {skill.projectIds.map((projId) => (
                          <button
                            key={projId}
                            onClick={() => onSelectSkill(skill.id, projId)}
                            className="px-2 py-1 rounded bg-[#111827] hover:bg-cyan-500/20 text-[11px] font-mono text-[#CBD5E1] hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-colors text-left truncate max-w-full"
                            title={`Inspect ${projId}`}
                          >
                            {projId}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Level 3: Obvious Action Button */}
                  <button
                    onClick={() => onSelectSkill(skill.id, skill.name)}
                    className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <span>Filter Explorer for {skill.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
export default TechnicalDomainsSection;
