/**
 * Performance optimization utilities and monitoring
 */

export interface WebVitals {
  LCP: number  // Largest Contentful Paint
  FID: number  // First Input Delay
  CLS: number  // Cumulative Layout Shift
  FCP: number  // First Contentful Paint
  TTFB: number // Time to First Byte
}

export interface PerformanceTargets {
  LCP: number  // < 2.5s
  FID: number  // < 100ms
  CLS: number  // < 0.1
  FCP: number  // < 1.8s
  TTFB: number // < 0.8s
}

/**
 * WCAG-compliant performance targets (Lighthouse score 95+)
 */
export const performanceTargets: PerformanceTargets = {
  LCP: 2500,   // Largest Contentful Paint < 2.5s
  FID: 100,    // First Input Delay < 100ms
  CLS: 0.1,    // Cumulative Layout Shift < 0.1
  FCP: 1800,   // First Contentful Paint < 1.8s
  TTFB: 800,   // Time to First Byte < 0.8s
}

/**
 * Image optimization settings for next/image
 */
export const imageOptimizationConfig = {
  formats: ['image/avif', 'image/webp', 'image/jpeg'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000, // 1 year
} as const

/**
 * Font loading optimization
 */
export const fontLoadingConfig = {
  display: 'swap' as const, // Show fallback immediately
  preload: true,
  weights: [300, 400, 500, 600, 700, 800],
} as const

/**
 * Dynamic import helper for code splitting
 */
export async function lazyLoad<T>(
  importFn: () => Promise<{ default: T }>,
  options?: { ssr?: boolean }
): Promise<T> {
  if (options?.ssr === false && typeof window === 'undefined') {
    return null as any
  }
  const loadedModule = await importFn()
  return loadedModule.default
}

/**
 * Monitor Web Vitals performance
 */
export function reportWebVitals(metric: any) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
    label: metric.label,
    delta: metric.delta,
    entries: metric.entries,
  })

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/telemetry', body)
  } else if (fetch) {
    fetch('/api/telemetry', { body, method: 'POST', keepalive: true })
  }
}

/**
 * Check if Core Web Vitals meet targets
 */
export function meetsWebVitalsTargets(vitals: Partial<WebVitals>): boolean {
  if (vitals.LCP && vitals.LCP > performanceTargets.LCP) return false
  if (vitals.FID && vitals.FID > performanceTargets.FID) return false
  if (vitals.CLS && vitals.CLS > performanceTargets.CLS) return false
  return true
}

/**
 * Bundle size analysis
 */
export const bundleTargets = {
  main: 50,    // KB
  framework: 45,
  vendor: 236,
  total: 350,  // KB initial JS
} as const

/**
 * Critical resources to preload
 */
export const criticalResources = [
  // Fonts
  { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap', as: 'style' },
  // Scripts
  { href: '/_next/static/chunks/main.js', as: 'script' },
  { href: '/_next/static/chunks/framework.js', as: 'script' },
] as const

/**
 * DNS prefetch for external domains
 */
export const dnsPrefetch = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://cdn.jsdelivr.net',
  'https://www.google-analytics.com',
] as const

/**
 * Static asset caching strategy
 */
export const cachingStrategy = {
  // Long-term caching (1 year)
  immutable: {
    maxAge: 31536000,
    immutable: true,
  },
  // Medium-term caching (30 days)
  stable: {
    maxAge: 2592000,
  },
  // Short-term caching (7 days)
  dynamic: {
    maxAge: 604800,
  },
  // No caching
  noCache: {
    maxAge: 0,
    noCache: true,
  },
} as const

/**
 * Lighthouse score targets
 */
export const lighthouseTargets = {
  performance: 95,
  accessibility: 100,
  bestPractices: 95,
  seo: 100,
  pwa: 90,
} as const

/**
 * Get performance hints based on metrics
 */
export function getPerformanceHints(vitals: Partial<WebVitals>): string[] {
  const hints: string[] = []

  if (vitals.LCP && vitals.LCP > performanceTargets.LCP) {
    hints.push('⚠️ LCP is too high. Optimize largest contentful element rendering.')
  }
  if (vitals.FID && vitals.FID > performanceTargets.FID) {
    hints.push('⚠️ FID is too high. Reduce JavaScript execution time.')
  }
  if (vitals.CLS && vitals.CLS > performanceTargets.CLS) {
    hints.push('⚠️ CLS is too high. Prevent layout shifts with reserved space.')
  }
  if (vitals.FCP && vitals.FCP > performanceTargets.FCP) {
    hints.push('⚠️ FCP is too high. Optimize critical rendering path.')
  }

  return hints
}

/**
 * Performance monitoring hook for development
 */
export function usePerformanceMonitoring() {
  if (typeof window === 'undefined') return

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`Performance: ${entry.name}`, entry)
    }
  })

  observer.observe({ entryTypes: ['paint', 'measure', 'navigation'] })

  return () => observer.disconnect()
}

/**
 * Dynamic component loading with loading state
 */
export const dynamicImportOptions = {
  ssr: true,
  loading: () => {
    // Loading state component would be defined in a .tsx file
    return null
  },
}

/**
 * Optimize font loading
 */
export const fontOptimization = {
  // Use font-display: swap
  display: 'swap',
  // Preload critical fonts
  preload: ['Inter', 'Space Grotesk'],
  // Subset fonts (only include characters needed)
  subset: ['latin', 'latin-ext'],
}

const performanceUtils = {
  performanceTargets,
  imageOptimizationConfig,
  fontLoadingConfig,
  lazyLoad,
  reportWebVitals,
  meetsWebVitalsTargets,
  bundleTargets,
  criticalResources,
  dnsPrefetch,
  cachingStrategy,
  lighthouseTargets,
  getPerformanceHints,
  usePerformanceMonitoring,
  dynamicImportOptions,
  fontOptimization,
}

export default performanceUtils
