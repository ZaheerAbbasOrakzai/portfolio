"use client"
import React from 'react'
import Card from './Card'
import MetricCounter from './MetricCounter'

interface TelemetryCardProps {
  value?: number | null
  label: string
  suffix?: string
  description?: string
}

const TelemetryCard: React.FC<TelemetryCardProps> = ({ value = null, label, suffix = '', description }) => {
  return (
    <Card className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_60px_rgba(99,102,241,0.1)] hover:border-indigo-400/20 hover:shadow-[0_24px_72px_rgba(99,102,241,0.15)] transition-all duration-300" aria-label={`Telemetry: ${label}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          {value !== null ? (
            <MetricCounter value={value} suffix={suffix} />
          ) : (
            <div className="text-2xl font-semibold text-white">—</div>
          )}
          <div className="mt-1 text-xs uppercase tracking-[0.24em] text-indigo-400/80">{label}</div>
        </div>
        <div className="ml-4 text-xs leading-6 text-slate-500">{description}</div>
      </div>
    </Card>
  )
}

export default TelemetryCard
