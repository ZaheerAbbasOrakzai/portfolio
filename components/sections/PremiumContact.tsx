'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight,
  Terminal, 
  Send, 
  MapPin, 
  Clock,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { profile } from '../../lib/site';

export const PremiumContact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubject, setFormSubject] = useState('Production AI & Systems Engineering');
  const [formMessage, setFormMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${senderName || 'Anonymous'}\n\nMessage:\n${formMessage}`;
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(formSubject || 'Engineering Inquiry')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-[#1F2937] relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header (Principle 28) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Mail className="w-4 h-4" />
              <span>12 // Contact & Engagement</span>
            </div>
            <h2 
              id="contact-heading" 
              className="text-3xl sm:text-5xl font-display font-black text-[#F8FAFC] tracking-tight"
            >
              LET&apos;S BUILD SOMETHING INTELLIGENT.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Direct verified channels for engineering collaboration, system design inquiries, or technical leadership recruitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 6 Large Readable Contact Cards (Principles 28 & 29) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* 1. Primary Email Card */}
            <div className="p-5 rounded-2xl bg-[#0A0F1E] border border-[#1F2937] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-500/40 transition-colors shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">Primary Email Channel</div>
                  <div className="text-sm sm:text-base font-mono font-bold text-[#F8FAFC] truncate mt-0.5">
                    {profile.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111827] text-xs font-mono text-[#CBD5E1] hover:text-white border border-[#1F2937] hover:border-white/20 transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'email' ? 'COPIED' : 'COPY'}</span>
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>OPEN CLIENT</span>
                </a>
              </div>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-[#0A0F1E] border border-[#1F2937] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-500/40 transition-colors shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">WhatsApp & Direct Phone</div>
                  <div className="text-sm sm:text-base font-mono font-bold text-[#F8FAFC] truncate mt-0.5">
                    {profile.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111827] text-xs font-mono text-[#CBD5E1] hover:text-white border border-[#1F2937] hover:border-white/20 transition-colors"
                  aria-label="Copy Phone Number"
                >
                  {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'phone' ? 'COPIED' : 'COPY'}</span>
                </button>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>OPEN WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* 4 Professional Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              
              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] hover:border-violet-500/50 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748B] uppercase">Professional Profile</div>
                    <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-violet-300 transition-colors">
                      LinkedIn
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-violet-400">
                  <span>OPEN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] hover:border-cyan-500/50 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748B] uppercase">Open Source Archive</div>
                    <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors">
                      GitHub (48 Repos)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                  <span>OPEN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Hugging Face */}
              <a
                href={profile.huggingFace || 'https://huggingface.co/abbasorakzai777'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] hover:border-amber-500/50 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748B] uppercase">ML Spaces & Models</div>
                    <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-amber-300 transition-colors">
                      Hugging Face
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                  <span>OPEN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Kaggle */}
              <a
                href={profile.kaggle || 'https://www.kaggle.com/zaheerabbasorakzai'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] hover:border-cyan-500/50 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748B] uppercase">Kaggle Verified</div>
                    <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors">
                      Kaggle Profile
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                  <span>OPEN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

            </div>

            {/* Availability & Location Context */}
            <div className="p-4 rounded-xl bg-[#0A0F1E] border border-[#1F2937] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-violet-400" />
                <span>UTC+5 (PKT)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE AVAILABILITY</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Technical Message Dispatch */}
          <div className="lg:col-span-5 bg-[#0A0F1E] border border-[#1F2937] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#1F2937] pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono font-bold text-[#F8FAFC] tracking-wider uppercase">
                  Direct Dispatch Terminal
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>TLS 1.3 DIRECT ROUTE</span>
              </span>
            </div>

            <form onSubmit={handleDirectEmail} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1] block">
                  Your Name / Organization:
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Dr. Alex Mercer / Vertex AI Labs"
                  className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 font-mono"
                />
              </div>

              {/* Inquiry Topic */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1] block">
                  Inquiry Topic:
                </label>
                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-2.5 text-xs text-[#F8FAFC] focus:outline-none focus:border-cyan-500/50 font-mono"
                >
                  <option value="Production AI & Systems Engineering">Production AI & Systems Engineering</option>
                  <option value="Multi-Agent Mesh Architecture">Multi-Agent Mesh Architecture</option>
                  <option value="Offline BLE Mesh / Mobile Development">Offline BLE Mesh / Mobile Development</option>
                  <option value="Technical Recruitment / Senior Role">Technical Recruitment / Senior Role</option>
                  <option value="Applied Research Collaboration">Applied Research Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#CBD5E1] block">
                  Message Payload:
                </label>
                <textarea
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Describe your technical requirements, architecture inquiry, or role details..."
                  className="w-full bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 font-mono resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_28px_rgba(6,182,212,0.5)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISPATCH MESSAGE (MAILTO)</span>
              </button>

              <div className="text-[10px] font-mono text-[#64748B] text-center">
                Composes a prefilled payload routed directly to zaheerabbaspattan@gmail.com
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PremiumContact;
