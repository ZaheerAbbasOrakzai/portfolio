'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, ExternalLink, CheckCircle2, X, Eye } from 'lucide-react';
import { verifiedCertifications, VerifiedCertification } from '../../lib/data/certifications-data';

export const VerifiedCertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<VerifiedCertification | null>(null);

  return (
    <section 
      id="certifications" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-[#1F2937] relative"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1F2937] pb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>10 // Verified Credentials & Certifications</span>
            </div>
            <h2 
              id="certifications-heading" 
              className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight"
            >
              Technical Certifications
            </h2>
          </div>
          <p className="text-sm font-mono text-[#64748B] max-w-md">
            Grounded credentials from Kaggle, DigiSkills, and technical training programs with verifiable certificates.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedCertifications.map((cert) => (
            <div
              key={cert.id}
              className="technical-card rounded-xl overflow-hidden border border-[#1F2937] bg-[#0A0F1E] flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-200"
            >
              <div>
                {/* Certificate Preview Image */}
                <div 
                  className="relative aspect-[4/3] w-full bg-[#111827] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <Image
                    src={cert.imagePath}
                    alt={cert.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-60" />
                  
                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-opacity">
                    <div className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-mono font-bold flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>{cert.issuer}</span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#F8FAFC] group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F2937] text-[10px] font-mono text-[#CBD5E1]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0 border-t border-white/[0.04] flex items-center justify-between mt-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Inspect Certificate
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#111827] hover:bg-[#1F2937] text-[#CBD5E1] hover:text-white border border-[#1F2937] text-xs font-mono flex items-center gap-1 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0A0F1E] border border-[#1F2937] rounded-2xl overflow-hidden p-4 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#1F2937] pb-3 px-2">
              <div>
                <h3 className="font-display font-bold text-base text-[#F8FAFC]">
                  {selectedCert.name}
                </h3>
                <div className="text-xs font-mono text-cyan-400">
                  Issued by {selectedCert.issuer}
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-white hover:bg-white/10"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-black">
              <Image
                src={selectedCert.imagePath}
                alt={selectedCert.name}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 900px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default VerifiedCertificationsSection;
