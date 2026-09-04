'use client'

export function useConversionOptimizer() {
  const trackEvent = (name: string, ...args: any[]) => {
    console.log(`[ConversionOptimizer] Event: ${name}`, args)
  }
  return { trackEvent }
}
