'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { projectsRegistry, ProjectRecord } from '../../lib/data/projects-registry';
import { profileData } from '../../lib/data/profile-data';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  matchedProjects?: ProjectRecord[];
}

const suggestedQuestions = [
  'What AI projects has Zaheer built?',
  'How does his multi-agent orchestration work?',
  'Which projects use RAG?',
  'Show me computer vision & edge models.',
  'Tell me about Meshline mesh security.',
  'What research has he conducted?'
];

interface PortfolioAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject?: (project: ProjectRecord) => void;
}

export const PortfolioAssistantModal: React.FC<PortfolioAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenProject
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: "Hello! I am Zaheer's Portfolio Intelligence Agent. I answer strictly from verified facts across his 48 public repositories, COMSATS academic background, and certified achievements. What would you like to explore?"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: Message = { sender: 'user', text: queryText };
    const q = queryText.toLowerCase().trim();

    let reply = '';
    let matched: ProjectRecord[] = [];

    if (q.includes('agent') || q.includes('multi-agent') || q.includes('langgraph') || q.includes('crewai') || q.includes('orchestrat')) {
      matched = projectsRegistry.filter(p => 
        p.category === 'agentic-ai' || 
        p.technologies.some(t => t.toLowerCase().includes('agent') || t.toLowerCase().includes('langgraph') || t.toLowerCase().includes('crewai'))
      );
      reply = `Zaheer has designed over 40+ specialized autonomous agents and orchestration workflows:\n• AgentMesh: Autonomous multi-agent coordination mesh and typed tool-dispatch runtime.\n• SocraticAI: Structured multi-agent deliberation framework for high-stakes enterprise decisions.\n• Sentinel Market Intelligence: Multi-sector competitive intelligence agent with LangGraph.\n• Aegis Code Linter: AI security and code-quality review agent enforcing OWASP Top 10 rules.`;
    } else if (q.includes('research') || q.includes('paper') || q.includes('study') || q.includes('hadith') || q.includes('traffic')) {
      matched = projectsRegistry.filter(p => 
        p.category === 'research' || 
        p.id === 'ai-urban-nexus' || 
        p.id === 'ai-hadith-authentication' ||
        p.id === 'hybrid-rag-eval'
      );
      reply = `Zaheer's applied scientific research focuses on reproducible benchmarks:\n• AI Urban Nexus: Spatio-temporal edge computer vision with YOLOv8 + XGBoost (99.55% F1 across 87K observation rows).\n• Isnad-Graph Net: Transformer semantic verification and biographer chain-of-transmission (Isnad) provenance graphs across 34,000+ classical Arabic narrations.\n• Hybrid RAG Evaluation: Empirical Reciprocal Rank Fusion (RRF) reducing LLM hallucination rates below 0.3%.`;
    } else if (q.includes('mesh') || q.includes('bluetooth') || q.includes('ble') || q.includes('security') || q.includes('crypto')) {
      matched = projectsRegistry.filter(p => 
        p.id === 'meshline-android' || 
        p.technologies.some(t => t.toLowerCase().includes('mesh') || t.toLowerCase().includes('ble') || t.toLowerCase().includes('ecdh'))
      );
      reply = `Zaheer's flagship mesh networking and cryptography deployment is Meshline Android:\n• Protocol: Bluetooth Low Energy (BLE) multi-hop mesh networking with zero internet dependency.\n• Cryptography: ECDH Curve25519 key exchange agreement paired with AES-256-GCM authenticated payload encryption.\n• Features: Ephemeral session IDs, PTT Walkie-Talkie audio streaming, and room database offline persistence.`;
    } else if (q.includes('resume') || q.includes('cv') || q.includes('background') || q.includes('experience')) {
      reply = `Zaheer Abbas is an AI / Machine Learning Engineer with a BS in Computer Science from COMSATS Islamabad (Jan 2026). His resume is ATS-optimized and verifiable against 48 public GitHub repositories.\nYou can download his official resume PDF directly using the Resume link in the navigation or the Executive Resume section on the homepage.`;
    } else if (q.includes('certif') || q.includes('kaggle') || q.includes('credential')) {
      reply = `Zaheer holds verified credentials including:\n• Kaggle: Intro to Machine Learning & Time Series Analysis\n• DigiSkills: Machine Learning & Python Development\n• Academic: BS Computer Science from COMSATS University Islamabad with verified Capstone honors.`;
    } else if (q.includes('rag') || q.includes('retrieval')) {
      matched = projectsRegistry.filter(p => 
        p.category === 'llm-rag' || 
        p.technologies.some(t => t.toLowerCase().includes('rag'))
      );
      reply = `Zaheer has developed several specialized RAG systems, including:\n• Sharia Finance Assistant: RAG pipeline for AAOIFI Islamic finance compliance with automated PII protection.\n• Hybrid-RAG-Eval: Dual-path retrieval combining BM25 and dense neural search with Reciprocal Rank Fusion & RAG Triad evaluation.\n• ScholarSync & NexusDesk: PDF research gap extraction and B2B customer support intelligence.`;
    } else if (q.includes('vision') || q.includes('yolo') || q.includes('cv') || q.includes('image')) {
      matched = projectsRegistry.filter(p => 
        p.category === 'computer-vision' || 
        p.technologies.some(t => t.toLowerCase().includes('yolo') || t.toLowerCase().includes('vision') || t.toLowerCase().includes('cnn'))
      );
      reply = `Zaheer's computer vision work includes:\n• AI Urban Nexus: Integrates YOLOv8 for stolen vehicle recognition and civic anomaly detection in a Flutter app.\n• AI Kidney Tumor Deep Classifier: Convolutional Neural Network trained to classify normal vs. tumorous tissue from abdominal CT scans.`;
    } else if (q.includes('mobile') || q.includes('flutter') || q.includes('android') || q.includes('ios')) {
      matched = projectsRegistry.filter(p => p.category === 'mobile' || p.technologies.some(t => t.toLowerCase().includes('flutter') || t.toLowerCase().includes('kotlin')));
      reply = `Zaheer has engineered several notable mobile systems:\n• Meshline Android: Offline-first, encrypted (ECDH + AES-256-GCM) Bluetooth Mesh messenger and Push-To-Talk Walkie-Talkie in Kotlin & Jetpack Compose.\n• AI Urban Nexus: Smart City Flutter application with 3 cloud ML backends and Google Maps navigation.\n• Salon Booking App: Flutter app with 25+ navigation routes, Riverpod, and fl_chart analytics.\n• Events Management App: Cross-platform Flutter app with Firebase & Cloudinary.`;
    } else if (q.includes('strongest') || q.includes('flagship') || q.includes('best') || q.includes('highlight')) {
      matched = projectsRegistry.filter(p => p.tier === 'flagship');
      reply = `Zaheer's primary flagship engineering deployments are:\n1. Meshline Android (Decentralized BLE Mesh Messenger & Walkie-Talkie)\n2. AI Hadith Authentication (Classifying 34,000+ texts with 3-tier fallback)\n3. AI Urban Nexus (Smart City with 99.55% F1 traffic ML model across 12 cities)\n4. Health Hub (Clinical Nutrition with Groq Llama 3.3/Qwen & rate limiting)\n5. Sharia Finance Assistant (Next.js + FastAPI with RAG compliance)`;
    } else if (q.includes('technology') || q.includes('stack') || q.includes('language') || q.includes('tools')) {
      reply = `Verified technical competencies across 48 repositories:\n• AI/ML: PyTorch, Hugging Face Transformers, XGBoost, LightGBM, Scikit-Learn, Deep GRU/LSTM, YOLOv8.\n• LLMs & RAG: LangChain, LangGraph, CrewAI, BM25, FAISS, ChromaDB, Groq Cloud API (Llama 3.3 / Qwen).\n• Mobile: Flutter, Dart, Kotlin, Jetpack Compose, BLE Mesh Networking.\n• Full-Stack: Next.js, React 18/19, TypeScript, FastAPI, Flask, PostgreSQL, MongoDB, Firebase, Docker.`;
    } else if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('college')) {
      reply = `Zaheer graduated with a Bachelor of Science in Computer Science from COMSATS University Islamabad in January 2026. His capstone work focused on applied multi-modal machine learning systems.`;
    } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      reply = `You can reach Zaheer Abbas directly:\n• Email: zaheerabbaspattan@gmail.com\n• WhatsApp: +92 336 7971778\n• LinkedIn: linkedin.com/in/zaheerabbasorakzai\n• GitHub: github.com/ZaheerAbbasOrakzai`;
    } else {
      matched = projectsRegistry.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.shortDescription.toLowerCase().includes(q) || 
        p.technologies.some(t => t.toLowerCase().includes(q))
      ).slice(0, 3);

      if (matched.length > 0) {
        reply = `Found ${matched.length} relevant projects in Zaheer's repository database for "${queryText}":`;
      } else {
        reply = "I don't have verified information about that specific query in Zaheer's portfolio. You can ask about his 48 GitHub repositories, RAG systems, machine learning models, Flutter apps, or academic background.";
      }
    }

    setMessages(prev => [...prev, userMsg, { sender: 'assistant', text: reply, matchedProjects: matched.length > 0 ? matched : undefined }]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio AI Assistant"
    >
      <div 
        className="w-full max-w-2xl bg-[#0A0F1E] border border-[#1F2937] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[650px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2937] bg-[#111827]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                Portfolio AI Assistant
              </h3>
              <span className="text-[10px] font-mono text-[#64748B]">
                Strict Grounding • Zero Hallucination Mode
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#64748B] hover:text-white p-1 rounded transition-colors"
            aria-label="Close assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-xs">
          {messages.map((m, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-cyan-500 text-black font-semibold shadow-md'
                    : 'bg-[#111827] text-[#CBD5E1] border border-[#1F2937]'
                }`}
              >
                {m.text}
              </div>

              {/* Matched Project Cards if any */}
              {m.matchedProjects && (
                <div className="mt-2.5 w-full space-y-1.5 pl-2">
                  {m.matchedProjects.map((p) => (
                    <div 
                      key={p.id}
                      className="p-2.5 rounded-lg bg-[#09090B] border border-cyan-500/30 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-[#F8FAFC]">{p.name}</div>
                        <div className="text-[10px] text-[#64748B]">{p.categoryLabel}</div>
                      </div>
                      <button
                        onClick={() => {
                          if (onOpenProject) onOpenProject(p);
                          onClose();
                        }}
                        className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-[10px] flex items-center gap-1 font-bold"
                      >
                        <span>Inspect</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-6 py-2 border-t border-[#1F2937]/50 bg-[#09090B]/60 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
          <span className="text-[#64748B] shrink-0">Try:</span>
          {suggestedQuestions.slice(0, 3).map((sq) => (
            <button
              key={sq}
              onClick={() => handleQuery(sq)}
              className="px-2.5 py-1 rounded bg-[#111827] hover:bg-[#1F2937] text-[#CBD5E1] border border-[#1F2937] shrink-0 text-left transition-colors truncate"
            >
              {sq}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleQuery(input);
          }}
          className="p-4 border-t border-[#1F2937] bg-[#111827] flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Zaheer's projects, RAG, ML models, or stack..."
            className="flex-1 bg-[#0A0F1E] border border-[#1F2937] rounded-xl px-4 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 font-mono"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default PortfolioAssistantModal;
