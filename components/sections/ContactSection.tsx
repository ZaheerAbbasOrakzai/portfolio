"use client"

import React, { useCallback } from 'react'
import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react'
import { profile } from '../../lib/site'

const ContactSection: React.FC = () => {
  const contacts = [
    {
      name: 'Email',
      href: `mailto:${profile.email}`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8.25L12 13L4 8.25V6L12 10.75L20 6V8.25Z" />
        </svg>
      ),
      hoverClasses: 'hover:text-[#EA4335] hover:border-[#EA4335]/40 hover:bg-[#EA4335]/10 hover:shadow-[0_0_20px_rgba(234,67,53,0.15)]'
    },
    {
      name: 'WhatsApp',
      href: profile.whatsapp,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.762.463 3.417 1.277 4.856L2 22l5.302-1.39A9.954 9.954 0 0012.004 22c5.52 0 10-4.48 10-10S17.524 2 12.004 2zm0 18.004c-1.57 0-3.044-.405-4.327-1.112l-.31-.184-3.21.842.857-3.128-.202-.32a8.003 8.003 0 01-1.233-4.102c0-4.412 3.592-8.004 8.005-8.004 4.413 0 8.005 3.592 8.005 8.004 0 4.413-3.592 8.004-8.005 8.004zM16.14 13.91c-.227-.113-1.344-.663-1.55-.74-.207-.075-.357-.113-.508.114-.15.227-.584.74-.716.892-.132.15-.264.17-.49.057a6.223 6.223 0 01-1.82-1.12c-.7-.624-1.173-1.396-1.31-1.632-.137-.236-.015-.364.098-.477.102-.102.227-.265.34-.397.113-.132.15-.227.226-.378.075-.15.038-.283-.02-.397-.056-.113-.508-1.226-.696-1.678-.184-.443-.37-.384-.508-.39H8.76c-.15 0-.396.056-.603.283-.207.227-.792.774-.792 1.888s.81 2.19 1.15 2.643c.34.453 1.572 2.4 3.81 3.366.532.227.948.364 1.272.468.537.17 1.027.147 1.414.09.43-.062 1.343-.548 1.53-.1.185-.55.185-1.02.13-1.107-.056-.088-.206-.15-.433-.264z" />
        </svg>
      ),
      hoverClasses: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]'
    },
    {
      name: 'LinkedIn',
      href: profile.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      hoverClasses: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_20px_rgba(10,102,194,0.15)]'
    },
    {
      name: 'GitHub',
      href: profile.github,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      hoverClasses: 'hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]'
    }
  ]

  const handleBackToTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative mt-24 md:mt-32 w-full max-w-[1280px] mx-auto rounded-[24px] border border-white/10 bg-slate-950/70 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
        
        {/* Left Column - Main Content */}
        <div className="flex flex-col z-10">
          <p id="contact-heading" className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">
            Contact
          </p>
          
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">exceptional.</span>
          </h2>
          
          <p className="mt-6 text-base leading-relaxed text-slate-300 max-w-md">
            Production AI systems and technical strategy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[12px] bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              <Mail className="h-5 w-5" />
              Email directly
            </a>
            <a
              href="https://calendly.com/zaheer-abbas-ai"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[12px] border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Calendar className="h-5 w-5" />
              Book consultation
            </a>
          </div>

          <div className="mt-10 rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-500/5 to-primary-500/[0.02] p-6 backdrop-blur-sm shadow-[0_4px_16px_rgba(6,182,212,0.15)] hover:shadow-[0_8px_24px_rgba(6,182,212,0.2)] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></span>
              </div>
              <p className="font-semibold text-white text-lg">Response within 24 hours</p>
            </div>
            <p className="mt-3 text-slate-400 text-sm">Practical recommendations and clear steps.</p>
          </div>
        </div>

        {/* Right Column - Secondary Contact & Information */}
        <div className="flex flex-col gap-6 z-10 lg:pl-10">
          
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-8 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.05)] transition-all duration-300">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-400 mb-6">
              <Phone className="h-4 w-4" />
              Connect
            </div>
            
            <div className="flex flex-wrap gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.name}
                  title={contact.name}
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] text-slate-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] ${contact.hoverClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-8 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.05)] transition-all duration-300">
            <p className="font-bold text-white text-xl">Open for select engagements</p>
            <p className="mt-3 text-slate-400 text-sm">
              AI products, automation, and technical systems.
            </p>
            
            <button
              onClick={handleBackToTop}
              className="mt-8 group inline-flex items-center gap-3 font-semibold text-primary-400 transition-colors hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:shadow-[0_4px_12px_rgba(6,182,212,0.15)]"
              aria-label="Back to top"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/20 to-primary-500/10 transition-transform group-hover:-translate-y-1 shadow-[0_4px_12px_rgba(6,182,212,0.2)]">
                <ArrowRight className="h-4 w-4 -rotate-90" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection

