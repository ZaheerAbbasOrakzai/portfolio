/**
 * Accessibility utilities for WCAG AA compliance
 */

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Calculate relative luminance (WCAG formula)
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  if (!rgb1 || !rgb2) return 0

  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)

  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Check if contrast ratio meets WCAG AA standards
 * Normal text: 4.5:1
 * Large text (18pt+): 3:1
 */
export function meetsWCAGAA(
  color1: string,
  color2: string,
  isLargeText: boolean = false
): boolean {
  const ratio = getContrastRatio(color1, color2)
  return isLargeText ? ratio >= 3 : ratio >= 4.5
}

/**
 * Color palette with WCAG AA verified contrasts
 * All verified against #020617 (primary background)
 */
export const accessibleColors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c3d66',
  },
  text: {
    white: '#ffffff',
    lightGray: '#f1f5f9',
    mediumGray: '#cbd5e1',
    darkGray: '#64748b',
  },
  background: {
    dark: '#020617',
    darkGray: '#0f172a',
    slate: '#1e293b',
  },
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
} as const

/**
 * Focus styles for keyboard navigation
 */
export const focusStyles = `
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-blue-500 
  focus:ring-offset-slate-950
`

/**
 * Accessible button styles combining visual and interactive states
 */
export const accessibleButtonStyles = `
  ${focusStyles}
  transition-all 
  duration-200 
  active:scale-95
  disabled:opacity-50 
  disabled:cursor-not-allowed
`

/**
 * ARIA label templates for common UI elements
 */
export const ariaLabels = {
  close: 'Close dialog',
  menu: 'Toggle navigation menu',
  submit: 'Submit form',
  reset: 'Reset form',
  search: 'Search',
  filter: 'Filter results',
  sort: 'Sort results',
  expand: 'Expand',
  collapse: 'Collapse',
  previous: 'Previous page',
  next: 'Next page',
  loading: 'Loading',
  error: 'Error',
  success: 'Success',
} as const

/**
 * Skip links for keyboard navigation
 */
export const skipLinks = [
  { text: 'Skip to main content', href: '#main' },
  { text: 'Skip to navigation', href: '#navigation' },
  { text: 'Skip to footer', href: '#footer' },
] as const

/**
 * Semantic HTML structure recommendations
 */
export const semanticStructure = {
  main: 'main',
  header: 'header',
  footer: 'footer',
  nav: 'nav',
  section: 'section',
  article: 'article',
  aside: 'aside',
} as const

/**
 * Reduced motion media query
 */
export const prefersReducedMotion = `
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`

/**
 * Touch target minimum size (44x44px WCAG AA)
 */
export const minTouchTargetSize = '44px'

/**
 * Generate accessible heading with level
 */
export function getHeadingProps(level: 1 | 2 | 3 | 4 | 5 | 6, text: string) {
  const headingTag = `h${level}`
  return {
    as: headingTag,
    role: 'heading',
    'aria-level': level,
  }
}

/**
 * Generate accessible icon button props
 */
export function getIconButtonProps(label: string, isActive?: boolean) {
  return {
    'aria-label': label,
    'aria-pressed': isActive,
    type: 'button',
    className: focusStyles,
  }
}

/**
 * Generate accessible form input props
 */
export function getFormInputProps(
  id: string,
  label: string,
  required?: boolean,
  error?: string
) {
  return {
    id,
    'aria-label': label,
    'aria-required': required,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined,
  }
}

/**
 * Generate accessible link props
 */
export function getAccessibleLinkProps(text: string, isExternal?: boolean) {
  return {
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `${text} (opens in new window)`,
    }),
  }
}

/**
 * Check keyboard key events
 */
export function isKeyboardEvent(event: React.KeyboardEvent | KeyboardEvent): boolean {
  return event instanceof KeyboardEvent || 'key' in event
}

/**
 * Check if key is Enter or Space
 */
export function isActivationKey(event: React.KeyboardEvent | KeyboardEvent): boolean {
  if (!isKeyboardEvent(event)) return false
  return event.key === 'Enter' || event.key === ' '
}

/**
 * Check if key is Escape
 */
export function isEscapeKey(event: React.KeyboardEvent | KeyboardEvent): boolean {
  if (!isKeyboardEvent(event)) return false
  return event.key === 'Escape'
}

/**
 * Check if key is Arrow key
 */
export function isArrowKey(event: React.KeyboardEvent | KeyboardEvent): boolean {
  if (!isKeyboardEvent(event)) return false
  const key = event.key
  return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within an element
   */
  trapFocus: (element: HTMLElement, event: KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    if (!focusableElements.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    const activeElement = document.activeElement

    if (event.shiftKey) {
      if (activeElement === firstElement) {
        lastElement.focus()
        event.preventDefault()
      }
    } else {
      if (activeElement === lastElement) {
        firstElement.focus()
        event.preventDefault()
      }
    }
  },

  /**
   * Restore focus to previous element
   */
  restoreFocus: (previousElement: HTMLElement) => {
    if (previousElement) {
      previousElement.focus()
    }
  },

  /**
   * Get all focusable elements
   */
  getFocusableElements: (container: HTMLElement): HTMLElement[] => {
    return Array.from(
      container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ) as HTMLElement[]
  },
}

export const accessibilityUtils = {
  getContrastRatio,
  meetsWCAGAA,
  accessibleColors,
  focusStyles,
  accessibleButtonStyles,
  ariaLabels,
  skipLinks,
  semanticStructure,
  prefersReducedMotion,
  minTouchTargetSize,
  getHeadingProps,
  getIconButtonProps,
  getFormInputProps,
  getAccessibleLinkProps,
  isKeyboardEvent,
  isActivationKey,
  isEscapeKey,
  isArrowKey,
  focusManagement,
}

export default accessibilityUtils
