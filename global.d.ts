declare module '*.js' {
  const value: any
  export default value
}

declare module '*.jsx' {
  const value: any
  export default value
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png'

declare module '*.jpg'

declare module '*.svg'

declare namespace JSX {
  interface IntrinsicElements {
    mesh: any
    sphereGeometry: any
    meshStandardMaterial: any
    bufferGeometry: any
    bufferAttribute: any
    line: any
    lineBasicMaterial: any
    ambientLight: any
    pointLight: any
    group: any
    canvas: any
  }
}

// Google Analytics gtag types for A/B testing and conversion tracking
interface GtagEventParams {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'get',
      targetId: string,
      config?: GtagEventParams | Date
    ) => void
  }
}
