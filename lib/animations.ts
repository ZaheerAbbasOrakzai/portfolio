/**
 * Performance-Optimized Animation Library and Micro-Interactions
 * Task 1.1: Create animation library with performance-optimized micro-interactions
 */

// Animation configuration with performance optimization
const animationConfig = {
  // Reduced motion support
  respectReducedMotion: true,
  
  // Performance thresholds
  performanceThresholds: {
    maxAnimations: 10, // Limit concurrent animations
    frameRateTarget: 60,
    budgetMs: 16.67 // 60fps budget
  },

  // Default easing functions
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    gentle: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  },

  // Duration scale
  duration: {
    instant: 75,
    fast: 150,
    normal: 200,
    medium: 300,
    slow: 500,
    slower: 700,
    slowest: 1000
  }
}

// Micro-interaction presets for common UI patterns
export const microInteractions = {
  // Button interactions
  button: {
    hover: {
      scale: 1.02,
      y: -2,
      boxShadow: '0 8px 25px rgba(6, 182, 212, 0.2)',
      transition: {
        duration: animationConfig.duration.normal,
        ease: animationConfig.easing.smooth
      }
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: {
        duration: animationConfig.duration.fast,
        ease: animationConfig.easing.sharp
      }
    },
    loading: {
      rotate: 360,
      transition: {
        duration: 1000,
        ease: 'linear',
        repeat: Infinity
      }
    }
  },

  // Card interactions
  card: {
    hover: {
      y: -8,
      rotateX: 2,
      boxShadow: '0 50px 120px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.12)',
      transition: {
        duration: animationConfig.duration.medium,
        ease: animationConfig.easing.smooth
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: animationConfig.duration.fast,
        ease: animationConfig.easing.sharp
      }
    }
  },

  // Modal and overlay interactions
  modal: {
    initial: { opacity: 0, scale: 0.9, y: 50 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: animationConfig.duration.medium,
        ease: animationConfig.easing.spring
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: -50,
      transition: {
        duration: animationConfig.duration.normal,
        ease: animationConfig.easing.sharp
      }
    }
  },

  // Page transitions
  page: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: animationConfig.duration.medium,
        ease: animationConfig.easing.smooth,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: animationConfig.duration.normal,
        ease: animationConfig.easing.sharp
      }
    }
  },

  // Stagger animations for lists
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: animationConfig.duration.medium,
          ease: animationConfig.easing.smooth
        }
      }
    }
  },

  // Loading states
  loading: {
    pulse: {
      animate: {
        opacity: [1, 0.5, 1],
        transition: {
          duration: 1500,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    },
    shimmer: {
      animate: {
        backgroundPosition: ['200% 0', '-200% 0'],
        transition: {
          duration: 2000,
          repeat: Infinity,
          ease: 'linear'
        }
      }
    },
    spinner: {
      animate: {
        rotate: 360,
        transition: {
          duration: 1000,
          repeat: Infinity,
          ease: 'linear'
        }
      }
    }
  }
}

// CSS-based animations for performance-critical scenarios
export const cssAnimations = {
  // Keyframes for CSS animations
  keyframes: {
    fadeIn: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(1rem); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
    slideInUp: `
      @keyframes slideInUp {
        from { opacity: 0; transform: translateY(2rem); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
    glow: `
      @keyframes glow {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.05); }
      }
    `,
    float: `
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        33% { transform: translateY(-1rem) rotate(1deg); }
        66% { transform: translateY(0.5rem) rotate(-1deg); }
      }
    `,
    typewriter: `
      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }
    `,
    blinkCursor: `
      @keyframes blinkCursor {
        from, to { border-color: transparent; }
        50% { border-color: #22d3ee; }
      }
    `
  },

  // CSS class utilities
  classes: {
    fadeIn: {
      animation: 'fadeIn 0.3s ease-out forwards',
      willChange: 'opacity, transform'
    },
    slideInUp: {
      animation: 'slideInUp 0.5s ease-out forwards',
      willChange: 'opacity, transform'
    },
    glow: {
      animation: 'glow 1s ease-in-out infinite',
      willChange: 'opacity, transform'
    },
    float: {
      animation: 'float 6s ease-in-out infinite',
      willChange: 'transform'
    }
  }
}

// Performance monitoring utilities
export const performanceUtils = {
  // Check if animations should be disabled
  shouldReduceMotion: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Monitor frame rate
  monitorFrameRate: (callback: (fps: number) => void) => {
    let lastTime = performance.now()
    let frameCount = 0

    const countFrames = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        callback(fps)
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(countFrames)
    }
    
    requestAnimationFrame(countFrames)
  },

  // Optimize animations based on device capability
  getOptimizedSettings: () => {
    if (typeof window === 'undefined') {
      return { complexity: 'low', duration: 'fast' }
    }

    // Check device memory and connection
    const navigator = window.navigator as any
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    
    let complexity = 'high'
    let duration = 'normal'

    // Reduce complexity on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      complexity = 'medium'
    }
    
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
      complexity = 'low'
      duration = 'fast'
    }

    // Reduce complexity on slow connections
    if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
      complexity = 'low'
      duration = 'fast'
    }

    return { complexity, duration }
  }
}

// Intersection Observer for scroll-triggered animations
export const scrollAnimations = {
  // Create intersection observer for scroll animations
  createScrollObserver: (
    elements: NodeListOf<Element> | Element[],
    animationClass: string,
    options: IntersectionObserverInit = {}
  ) => {
    if (typeof window === 'undefined') return

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass)
          // Optional: unobserve after animation to improve performance
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    elements.forEach((element) => observer.observe(element))
    
    return observer
  },

  // Prebuilt scroll animation configurations
  configs: {
    fadeInUp: {
      animationClass: 'animate-fade-in-up',
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    },
    slideInLeft: {
      animationClass: 'animate-slide-in-left',
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    },
    staggerChildren: {
      animationClass: 'animate-stagger-children',
      threshold: 0.15,
      rootMargin: '0px 0px -75px 0px'
    }
  }
}

const animations = {
  animationConfig,
  microInteractions,
  cssAnimations,
  performanceUtils,
  scrollAnimations
}

export default animations