"use client"
import React, { useEffect, useState } from 'react'

interface MetricCounterProps {
  value: number
  duration?: number
  suffix?: string
}

const MetricCounter: React.FC<MetricCounterProps> = ({ value, duration = 1200, suffix = '' }) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof requestAnimationFrame === 'undefined') {
      setDisplay(value)
      return
    }

    let start: number | null = null
    let raf = 0
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      start = null
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value, duration])

  const formatted = display >= 1000 ? display.toLocaleString() : String(display)

  return (
    <div className="text-2xl font-semibold tracking-tight text-white" role="status" aria-live="polite">
      <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
        {formatted}
        {suffix}
      </span>
    </div>
  )
}

export default MetricCounter
