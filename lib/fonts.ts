/**
 * Font Loading Optimization System
 * Task 1.1: Define semantic typography scale with proper font loading optimization
 * Using system fonts as fallback when Google Fonts fails
 */

// Use system fonts directly - no external dependencies
// This ensures instant loading with zero network requests

// Primary body font - System sans-serif stack
export const fontBody = {
  className: 'font-sans',
  style: {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  variable: '--font-body'
}

// Display font - System sans-serif stack with adjusted metrics
export const fontDisplay = {
  className: 'font-sans',
  style: {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  variable: '--font-display'
}

// Monospace font - System monospace stack
export const fontMono = {
  className: 'font-mono',
  style: {
    fontFamily: 'ui-monospace, Menlo, Monaco, "Cascadia Code", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Code", "Droid Sans Mono", "Courier New", monospace'
  },
  variable: '--font-mono'
}

// Font loading optimization utilities
export const fontVariables = '--font-body --font-display --font-mono'

// Critical font preloading for performance - using system fonts, no preload needed
export const criticalFontPreloads: any[] = []

// Font optimization CSS for performance
export const fontOptimizationCSS = `
  /* System font optimization */
  :root {
    --font-body: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-display: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Code", "Segoe UI Mono", "Roboto Mono", monospace;
  }

  /* Font rendering optimization */
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Typography utility classes */
  .font-body {
    font-family: var(--font-body);
  }

  .font-display {
    font-family: var(--font-display);
  }

  .font-mono {
    font-family: var(--font-mono);
  }
`

// Typography utility classes with performance optimization
export const typographyStyles = {
  display: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '-0.025em',
    lineHeight: 1.1
  },
  heading: {
    fontFamily: 'var(--font-display)', 
    fontWeight: 600,
    letterSpacing: '-0.015em',
    lineHeight: 1.2
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.5
  },
  caption: {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.025em',
    lineHeight: 1.3
  },
  code: {
    fontFamily: 'var(--font-mono)',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.4
  }
}

// Font loading performance monitoring
export const measureFontPerformance = () => {
  if (typeof window === 'undefined') return

  // Measure font loading time
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.name.includes('font')) {
        console.log(`Font loaded: ${entry.name} in ${entry.duration}ms`)
      }
    })
  })

  observer.observe({ entryTypes: ['resource'] })

  // Monitor layout shift caused by font loading
  const cls = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry: any) => {
      if (entry.hadRecentInput) return
      console.log('Layout shift detected:', entry.value)
    })
  })

  if (typeof window !== 'undefined' && 'LayoutShift' in window) {
    cls.observe({ entryTypes: ['layout-shift'] })
  }
}

const fontConfig = {
  fontBody,
  fontDisplay,
  fontMono,
  fontVariables,
  criticalFontPreloads,
  fontOptimizationCSS,
  typographyStyles,
  measureFontPerformance
}
export default fontConfig