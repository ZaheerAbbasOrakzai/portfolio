"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const AINetworkingHUD: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeNodes, setActiveNodes] = useState(0)
  const [dataFlow, setDataFlow] = useState(0)

  useEffect(() => {
    // Simulate dynamic data
    const interval = setInterval(() => {
      setActiveNodes(Math.floor(Math.random() * 20) + 15)
      setDataFlow(Math.floor(Math.random() * 100) + 50)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a0f1e] to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'gridScroll 20s linear infinite'
        }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.8)_100%)]" />

      {/* Main content container */}
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl">
          {/* HUD Frame */}
          <div className="relative rounded-3xl overflow-hidden border border-cyan-400/20 bg-slate-950/60 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.15)] p-4">
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/images/ai_networking.png"
                  alt="AI Networking HUD Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                  onLoad={() => setIsLoaded(true)}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Scanning effect */}
                {isLoaded && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_3s_linear_infinite]" />
                  </div>
                )}
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-xl" />
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-cyan-400/40 rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-cyan-400/40 rounded-bl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-400/40 rounded-br-xl" />
            </div>
          </div>

          {/* Floating data points */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-pulse"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AINetworkingHUD
