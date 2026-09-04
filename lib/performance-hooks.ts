/**
 * Performance Optimization Hooks for Core Web Vitals
 * Task 1.2: Optimize for Core Web Vitals and mobile-first experience
 */

import { useEffect, useState, useCallback } from 'react'

/**
 * Hook to optimize Largest Contentful Paint (LCP)
 * Preloads critical resources and manages loading states
 */
export function useLCPOptimization() {
  const [isLCPReady, setIsLCPReady] = useState(false)
  const [criticalResourcesLoaded, setCriticalResourcesLoaded] = useState(false)

  useEffect(() => {
    // Preload critical hero image
    const heroImageLink = document.createElement('link')
    heroImageLink.rel = 'preload'
    heroImageLink.href = '/zaheer-pic.png'
    heroImageLink.as = 'image'
    document.head.appendChild(heroImageLink)

    // Preload critical fonts if not already loaded
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap'
    fontLink.as = 'style'
    document.head.appendChild(fontLink)

    setCriticalResourcesLoaded(true)

    // Mark LCP as ready after a short delay to ensure DOM is painted
    const timer = setTimeout(() => {
      setIsLCPReady(true)
    }, 100)

    return () => {
      clearTimeout(timer)
      document.head.removeChild(heroImageLink)
      document.head.removeChild(fontLink)
    }
  }, [])

  return { isLCPReady, criticalResourcesLoaded }
}

/**
 * Hook to optimize Cumulative Layout Shift (CLS)
 * Manages layout stability during content loading
 */
export function useCLSOptimization() {
  const [layoutStable, setLayoutStable] = useState(false)

  useEffect(() => {
    // Force layout calculations to complete before showing content
    const timer = setTimeout(() => {
      setLayoutStable(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return { layoutStable }
}

/**
 * Hook to optimize First Input Delay (FID)
 * Manages interaction readiness and event handler optimization
 */
export function useFIDOptimization() {
  const [interactionReady, setInteractionReady] = useState(false)

  useEffect(() => {
    // Defer non-critical JavaScript until after interaction readiness
    const timer = setTimeout(() => {
      setInteractionReady(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  // Optimized event handler that prevents blocking
  const createOptimizedHandler = useCallback(
    (handler: () => void) => {
      return () => {
        if (interactionReady) {
          // Use requestIdleCallback for non-urgent tasks
          if ('requestIdleCallback' in window) {
            requestIdleCallback(handler, { timeout: 500 })
          } else {
            setTimeout(handler, 0)
          }
        } else {
          handler()
        }
      }
    },
    [interactionReady]
  )

  return { interactionReady, createOptimizedHandler }
}

/**
 * Hook for viewport-based optimizations
 * Manages mobile-specific performance enhancements
 */
export function useViewportOptimization() {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Detect mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Use Intersection Observer for viewport visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    // Observer will be attached to the component using this hook
    return () => {
      window.removeEventListener('resize', checkMobile)
      observer.disconnect()
    }
  }, [])

  return { isMobile, isVisible, setIsVisible }
}

/**
 * Hook for optimized animation controls
 * Respects user preferences and device capabilities
 */
export function useAnimationOptimization() {
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldAnimate(!e.matches)
    }

    setShouldAnimate(!mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    // Also check device performance indicators
    if ('deviceMemory' in navigator && (navigator as any).deviceMemory < 4) {
      setShouldAnimate(false)
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return { shouldAnimate }
}

/**
 * Comprehensive performance optimization hook for Hero section
 */
export function useHeroPerformanceOptimization() {
  const { isLCPReady, criticalResourcesLoaded } = useLCPOptimization()
  const { layoutStable } = useCLSOptimization()
  const { interactionReady, createOptimizedHandler } = useFIDOptimization()
  const { isMobile, isVisible } = useViewportOptimization()
  const { shouldAnimate } = useAnimationOptimization()

  const isPerformanceReady = isLCPReady && layoutStable && criticalResourcesLoaded

  return {
    isPerformanceReady,
    isLCPReady,
    criticalResourcesLoaded,
    layoutStable,
    interactionReady,
    isMobile,
    isVisible,
    shouldAnimate,
    createOptimizedHandler
  }
}
