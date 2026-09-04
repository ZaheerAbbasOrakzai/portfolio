'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from '../Header'
import Footer from '../Footer'

interface SiteShellProps {
  children: React.ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  if (isHomePage) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main id="main" className="mx-auto min-h-screen w-full px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8" role="main">
        {children}
      </main>
      <Footer />
    </>
  )
}
