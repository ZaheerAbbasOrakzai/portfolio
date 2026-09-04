'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Award, Calendar, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { PremiumBadge } from '../ui/PremiumBadge';
import { profile } from '../../lib/site';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  field: string;
  image: string;
  date: string;
  expiryDate?: string;
  verificationLink: string;
  verified: boolean;
  category: 'ai' | 'cloud' | 'development' | 'data';
  summary: string;
}

const certifications: Certification[] = [
  {
    id: 'ml-foundations',
    name: 'Introduction to Machine Learning',
    issuer: 'Professional Learning',
    issuerLogo: '/icons/hug.png',
    field: 'Machine Learning',
    image: '/assets/certifications/zaheer abbas - Intro to Machine Learning.png',
    date: '2024',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'ai',
    summary: 'Foundations of supervised learning, model evaluation, and practical experimentation.'
  },
  {
    id: 'time-series',
    name: 'Time Series Forecasting',
    issuer: 'Professional Learning',
    issuerLogo: '/icons/linkedin.png',
    field: 'Forecasting',
    image: '/assets/certifications/zaheer abbas - Time Series.png',
    date: '2024',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'data',
    summary: 'Practical forecasting methods, trend analysis, and time-based prediction workflows.'
  },
  {
    id: 'advanced-seo',
    name: 'Advanced SEO',
    issuer: 'Professional Development',
    issuerLogo: '/icons/github.png',
    field: 'Digital Growth',
    image: '/assets/certifications/certification-3-advanced-seo.png',
    date: '2024',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'data',
    summary: 'Search strategy, on-page optimization, and performance-focused growth systems.'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Specialist',
    issuer: 'Professional Development',
    issuerLogo: '/icons/github.png',
    field: 'Digital Commerce',
    image: '/assets/certifications/certification-4-ecommerce-specialist.png',
    date: '2024',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'development',
    summary: 'Conversion-focused e-commerce systems and customer journey optimization.'
  },
  {
    id: 'electrician',
    name: 'General Journeyman Apprentice (Inside)',
    issuer: 'TUSDEC',
    issuerLogo: '/icons/github.png',
    field: 'Technical Trade',
    image: '/assets/certifications/certification-5-electrician-apprentice.png',
    date: 'September 2016',
    expiryDate: 'September 2036',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'development',
    summary: 'Credential ID NSDOR/TUSDECIDE/00902. Practical electrical trade training, safety standards, and inside-wireman apprenticeship foundations.'
  },
  {
    id: 'freelancing',
    name: 'Freelancing Essentials',
    issuer: 'Professional Training',
    issuerLogo: '/icons/github.png',
    field: 'Client Delivery',
    image: '/assets/certifications/certification-6-freelancing.png',
    date: '2023',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'development',
    summary: 'Client communication, project management, and professional delivery practices.'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design Fundamentals',
    issuer: 'Creative Development',
    issuerLogo: '/icons/github.png',
    field: 'Visual Communication',
    image: '/assets/certifications/certification-7-graphic-design.png',
    date: '2023',
    verificationLink: profile.linkedin,
    verified: true,
    category: 'development',
    summary: 'Visual storytelling, layout systems, and polished digital presentation.'
  }
];

const categoryLabels = {
  ai: 'AI & ML',
  cloud: 'Cloud',
  development: 'Development',
  data: 'Data Science'
};

export const PremiumCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const isExpiringSoon = (expiryDate?: string) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const now = new Date();
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 90;
  };

  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-secondary-500/5" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            A curated view of the technical, creative, and professional learning milestones that shape my work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="group transition-transform duration-300 hover:scale-105">
              <PremiumCard>
                <div className="h-full cursor-pointer" onClick={() => setSelectedCert(cert)}>
                  <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-white/5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-center shadow-xl shadow-black/25 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-slate-950/95">
                      <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">Professional Credential</span>
                      <div className="mt-1 text-sm font-semibold text-white">{cert.field}</div>
                    </div>

                    {cert.verified && (
                      <div className="absolute left-3 top-3">
                        <div className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-xs font-medium text-green-400">Verified</span>
                        </div>
                      </div>
                    )}

                    {isExpiringSoon(cert.expiryDate) && (
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center gap-1 rounded-full bg-orange-500/20 px-2 py-1 backdrop-blur-sm">
                          <AlertTriangle className="h-3 w-3 text-orange-400" />
                          <span className="text-xs font-medium text-orange-400">Expires Soon</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Award className="h-4 w-4 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-start justify-between gap-3">
                          <h3 className="font-semibold text-text-primary">{cert.name}</h3>
                          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                            {cert.field}
                          </span>
                        </div>
                        <p className="mb-2 text-sm text-text-secondary">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-xs text-text-tertiary">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.date}</span>
                          {cert.expiryDate && (
                            <>
                              <span>•</span>
                              <span>Expires {cert.expiryDate}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-text-secondary">{cert.summary}</p>

                    <button
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-white/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(cert.verificationLink, '_blank');
                      }}
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Credential
                    </button>
                  </div>
                </div>
              </PremiumCard>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          />

          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto">
            <PremiumCard>
              <div className="p-6">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-text-primary">{selectedCert.name}</h3>
                    <p className="text-lg text-text-secondary">{selectedCert.issuer}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="rounded-lg p-2 transition-colors hover:bg-white/10"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5 text-text-tertiary" />
                  </button>
                </div>

                <div className="relative mb-6 h-96 overflow-hidden rounded-lg bg-white/5">
                  <Image src={selectedCert.image} alt={selectedCert.name} fill className="object-contain" />
                </div>

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-text-primary">Credential Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Issue Date:</span>
                        <span className="text-text-primary">{selectedCert.date}</span>
                      </div>
                      {selectedCert.expiryDate && (
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Expires:</span>
                          <span className="text-text-primary">{selectedCert.expiryDate}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Status:</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-green-400">Verified</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Category:</span>
                        <PremiumBadge variant="secondary" className="text-xs">
                          {categoryLabels[selectedCert.category]}
                        </PremiumBadge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-text-primary">Focus Area</h4>
                    <p className="text-sm leading-relaxed text-text-secondary">{selectedCert.summary}</p>
                    <button
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 font-medium text-white transition-all hover:from-primary-600 hover:to-primary-700"
                      onClick={() => window.open(selectedCert.verificationLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Profile Context
                    </button>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>
      )}
    </section>
  );
};

export default PremiumCertifications;
