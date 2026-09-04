'use client'

export function useAnalytics() {
  const trackEvent = (nameOrObject: string | object, ...args: any[]) => {
    console.log(`[Analytics] Event:`, nameOrObject, args)
  }
  const trackEngagement = (nameOrObject: string | object, ...args: any[]) => {
    console.log(`[Analytics] Engagement:`, nameOrObject, args)
  }
  return { trackEvent, trackEngagement }
}
