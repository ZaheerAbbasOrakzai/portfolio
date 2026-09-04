"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { profile } from '../lib/site'
import { focusStyles, isEscapeKey, ariaLabels } from '../lib/accessibility'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'AI Systems', href: '/#systems' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isEscapeKey(e) && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-slate-950/85 backdrop-blur-xl' : 'bg-transparent'}`}
      role="banner"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className={`text-base font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:text-cyan-200 sm:text-lg ${focusStyles}`}
            onClick={closeMenu}
            aria-label="Zaheer Abbas portfolio home"
          >
            {profile.name}
          </Link>
          <span className="hidden text-[11px] uppercase tracking-[0.24em] text-slate-400 md:inline-flex" aria-hidden="true">
            AI Systems Engineer
          </span>
        </div>

        <nav id="navigation" aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV.map((n) => (
              <li key={n.href}>
                <a 
                  href={n.href} 
                  className={`text-sm font-medium text-slate-200 transition hover:text-white hover:underline hover:decoration-cyan-400 hover:underline-offset-4 ${focusStyles}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumePagePath}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,211,238,0.12)] transition hover:border-cyan-400/50 hover:from-cyan-500/15 hover:to-violet-500/15 hover:shadow-[0_14px_44px_rgba(34,211,238,0.18)] md:inline-flex ${focusStyles}`}
          >
            Resume
          </a>
          <button
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] text-slate-200 transition hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:text-white hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] md:hidden ${focusStyles}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div 
          id="mobile-menu"
          className="border-t border-cyan-400/20 bg-gradient-to-b from-slate-950/95 to-slate-950/98 px-4 pb-4 backdrop-blur-xl md:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav>
            <ul className="flex flex-col gap-2 pt-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a 
                    href={n.href} 
                    onClick={closeMenu} 
                    className={`block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-gradient-to-r hover:from-white/5 hover:to-white/[0.02] hover:text-white hover:shadow-[0_2px_8px_rgba(255,255,255,0.05)] ${focusStyles}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href={profile.resumePagePath} 
                  onClick={closeMenu} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-3 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,211,238,0.10)] transition hover:border-cyan-400/45 hover:from-cyan-500/15 hover:to-violet-500/15 hover:shadow-[0_14px_44px_rgba(34,211,238,0.16)] ${focusStyles}`}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
