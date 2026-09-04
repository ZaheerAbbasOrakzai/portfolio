'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Code } from 'lucide-react';
import { engineeringTimeline, TimelineMilestone } from '../../lib/data/experience-timeline';

export const EngineeringTimeline: React.FC = () => {
  return (
    <section 
      id="timeline" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-[#1F2937] relative"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              <span>08 // Career & Academic Trajectory</span>
            </div>
            <h2 
              id="timeline-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Engineering Milestones
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Verified academic milestones, applied university capstone initiatives, and open-source systems engineering.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#1F2937] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {engineeringTimeline.map((item, idx) => {
            const isEducation = item.roleType === 'education';
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0A0F1E] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_rgba(6,182,212,0.4)]" />

                <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1E] border border-[#1F2937] hover:border-cyan-500/30 transition-all space-y-4">
                  
                  {/* Metadata Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                        {item.period}
                      </span>
                      <span className="text-[#64748B] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                      {item.roleType}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F8FAFC]">
                      {item.title}
                    </h3>
                    <div className="text-sm font-mono text-cyan-400 font-semibold mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                      Key Engineering Outcomes:
                    </div>
                    <div className="space-y-1.5">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                    {item.technologies.map((t) => (
                      <span 
                        key={t} 
                        className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-[10px] font-mono text-[#64748B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default EngineeringTimeline;
