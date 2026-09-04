'use client';

import React from 'react';
import { 
  Microscope, 
  BookOpen, 
  GitBranch, 
  ArrowUpRight, 
  CheckCircle2, 
  FileCode, 
  Binary, 
  Share2,
  LineChart
} from 'lucide-react';

interface ResearchPaper {
  id: string;
  category: string;
  title: string;
  abstract: string;
  methodology: string[];
  findings: string;
  metric: string;
  metricLabel: string;
  repo: string;
  color: string;
  borderHover: string;
}

const researchPapers: ResearchPaper[] = [
  {
    id: 'urban-nexus-paper',
    category: 'Computer Vision & Spatio-Temporal Modeling',
    title: 'Multi-Modal Urban Telemetry: Edge Vision & Gradient Boosted Flow Prediction',
    abstract: 'Investigates low-latency urban flow prediction by coupling real-time YOLOv8 edge perception with gradient boosted decision trees. Resolves latency bottlenecks in traffic anomaly detection over high-density multi-lane intersections.',
    methodology: [
      '87,000+ Observation Dataset',
      'YOLOv8 Edge Object Ingestion',
      'XGBoost Flow Classification',
      'Sub-5ms Inference Constraints'
    ],
    findings: 'Demonstrated 99.55% F1 classification score under severe weather distortions and variable illumination conditions.',
    metric: '99.55% F1',
    metricLabel: 'Model Benchmark',
    repo: 'ai-urban-nexus',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40'
  },
  {
    id: 'hadith-nlp-paper',
    category: 'Arabic NLP & Semantic Graph Networks',
    title: 'Isnad-Graph Net: Transformer-Based Narrator Provenance & Matn Verification',
    abstract: 'Proposes a dual-tier validation framework for classical Arabic hadith literature. Matches textual semantic representations (Matn) via fine-tuned transformers while evaluating biographer transmission chains (Isnad) as directed acyclic provenance graphs.',
    methodology: [
      '34,000+ Arabic/English Corpus',
      'Hugging Face Transformers',
      'Graph Provenance Routing',
      'Bi-encoder Embedding Calibration'
    ],
    findings: 'Achieved 96.5% Recall@5 in cross-corpus duplicate detection and authentic narrator chain consistency scoring.',
    metric: '96.5% Rec@5',
    metricLabel: 'Cross-Corpus Match',
    repo: 'ai-hadith-authentication',
    color: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40'
  },
  {
    id: 'hybrid-rag-paper',
    category: 'Information Retrieval & LLM Evaluation',
    title: 'Empirical Reciprocal Rank Fusion: BM25 vs. Dense Embeddings in Specialized RAG',
    abstract: 'Systematic benchmarking of sparse lexical retrieval against dense neural representations in specialized enterprise knowledge bases. Analyzes failure modes of pure vector cosine similarity in exact-code and numerical compliance constraints.',
    methodology: [
      'BM25 Okapi Indexing',
      'BGE Dense Vectors',
      'Reciprocal Rank Fusion (RRF)',
      'Cross-Encoder Precision Reranking'
    ],
    findings: 'Proved hybrid RRF reduces hallucination rates from 8.4% down to under 0.3% while maintaining sub-15ms search latency.',
    metric: '<0.3%',
    metricLabel: 'Hallucination Rate',
    repo: 'Hybrid-RAG-Eval',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40'
  }
];

export const ResearchSection: React.FC = () => {
  return (
    <section 
      id="research" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-[#1F2937] relative"
      aria-labelledby="research-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Microscope className="w-4 h-4" />
              <span>07 // Applied AI Research & Algorithmic Rigor</span>
            </div>
            <h2 
              id="research-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Scientific Rigor & Applied Deep Learning
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Research-backed methodologies with a strict bias for reproducible metrics, empirical evaluation, and production implementation.
          </p>
        </div>

        {/* Papers & Research Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className={`p-6 sm:p-8 rounded-2xl bg-[#0A0F1E] border border-[#1F2937] ${paper.borderHover} transition-all duration-300 flex flex-col justify-between space-y-6 group`}
            >
              <div className="space-y-4">
                {/* Header Badge & Metric */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider px-2 py-0.5 rounded bg-[#111827] border border-white/5 truncate max-w-[180px]">
                    {paper.category}
                  </span>
                  <div className="text-right">
                    <span className={`text-lg font-mono font-bold ${paper.color}`}>
                      {paper.metric}
                    </span>
                    <div className="text-[9px] font-mono text-[#64748B] uppercase">
                      {paper.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Paper Title */}
                <h3 className="text-lg font-display font-bold text-[#F8FAFC] group-hover:text-cyan-300 transition-colors leading-snug">
                  {paper.title}
                </h3>

                {/* Abstract */}
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {paper.abstract}
                </p>

                {/* Methodology Checklist */}
                <div className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                  <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    Core Technical Methodology:
                  </div>
                  {paper.methodology.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[11px] font-mono">{m}</span>
                    </div>
                  ))}
                </div>

                {/* Key Finding Callout */}
                <div className="p-3 rounded-lg bg-[#111827]/80 border border-white/5 text-[11px] text-[#CBD5E1] font-mono">
                  <span className="text-cyan-400 font-semibold">Key Finding: </span>
                  {paper.findings}
                </div>
              </div>

              {/* Footer Code Link */}
              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#64748B]">
                  Codebase: {paper.repo}
                </span>
                <a
                  href={`https://github.com/ZaheerAbbasOrakzai/${paper.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchSection;
