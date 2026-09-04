'use client'

import { useState, useEffect, useMemo } from 'react'

export interface OptimizedImageData {
  sources: Array<{
    srcSet: string
    type: string
    sizes?: string
  }>
  fallback: {
    src: string
    width: number
    height: number
  }
  placeholder?: string
  aspectRatio: number
}

export interface ImageVariant {
  format: 'avif' | 'webp' | 'jpeg'
  width: number
  height: number
  size: number
  ssim: number
  path: string
}

export interface AssetManifest {
  projects: {
    [projectId: string]: {
      images: {
        [imageName: string]: {
          originalSize: number
          variants: ImageVariant[]
          blurPlaceholder?: string
          compressionRatio: number
        }
      }
      totalSize: number
      imageCount: number
    }
  }
  formats: string[]
  sizes: number[]
  generatedAt: string
  version: string
}

/**
 * Browser support detection for modern image formats
 */
const getBrowserSupport = () => {
  if (typeof window === 'undefined') {
    return {
      avif: false,
      webp: false,
      jpeg: true
    }
  }

  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext('2d')
  
  return {
    avif: canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0,
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
    jpeg: true
  }
}

/**
 * Load and parse asset manifest
 */
const loadAssetManifest = async (): Promise<AssetManifest | null> => {
  try {
    const response = await fetch('/assets/images/projects/asset-manifest.json')
    if (!response.ok) {
      console.warn('Asset manifest not found, falling back to direct paths')
      return null
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to load asset manifest:', error)
    return null
  }
}

/**
 * Generate srcset string for responsive images
 */
const generateSrcSet = (variants: ImageVariant[], format: string): string => {
  return variants
    .filter(v => v.format === format)
    .sort((a, b) => a.width - b.width)
    .map(v => `${v.path} ${v.width}w`)
    .join(', ')
}

/**
 * Get optimal image format based on browser support
 */
const getOptimalFormat = (browserSupport: ReturnType<typeof getBrowserSupport>, availableFormats: string[]): string => {
  if (browserSupport.avif && availableFormats.includes('avif')) return 'avif'
  if (browserSupport.webp && availableFormats.includes('webp')) return 'webp'
  return 'jpeg'
}

/**
 * Generate fallback image path for projects without manifest
 */
const generateFallbackPath = (projectId: string, imageName: string, format: string = 'jpeg', width: number = 1200): string => {
  return `/assets/images/projects/${projectId}/${imageName}-${width}x${Math.round(width * 0.5625)}.${format}`
}

/**
 * Hook for optimized image loading with multiple formats and responsive sizing
 * @param imagePath - Path in format "projectId/imageName" (e.g., "health-hub/dashboard")
 * @param sizes - Responsive sizes attribute (optional)
 * @returns Optimized image data or null if loading
 */
export function useOptimizedImage(imagePath: string, sizes?: string): OptimizedImageData | null {
  const [manifest, setManifest] = useState<AssetManifest | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load manifest on mount
  useEffect(() => {
    let mounted = true
    
    loadAssetManifest()
      .then(manifest => {
        if (mounted) {
          setManifest(manifest)
          setLoading(false)
        }
      })
      .catch(err => {
        if (mounted) {
          setError(err.message)
          setLoading(false)
        }
      })
    
    return () => { mounted = false }
  }, [])

  // Parse image path
  const { projectId, imageName } = useMemo(() => {
    const parts = imagePath.split('/')
    return {
      projectId: parts[0] || '',
      imageName: parts[1] || ''
    }
  }, [imagePath])

  // Get browser support (memoized)
  const browserSupport = useMemo(() => getBrowserSupport(), [])

  // Generate optimized image data
  const imageData = useMemo((): OptimizedImageData | null => {
    if (loading || !projectId || !imageName) {
      return null
    }

    // Use manifest data if available
    if (manifest && manifest.projects[projectId]?.images[imageName]) {
      const imageInfo = manifest.projects[projectId].images[imageName]
      const variants = imageInfo.variants
      
      if (variants.length === 0) {
        return null
      }

      // Get available formats
      const availableFormats = [...new Set(variants.map(v => v.format))]
      const optimalFormat = getOptimalFormat(browserSupport, availableFormats)

      // Generate sources for each format (AVIF -> WebP -> JPEG)
      const sources = []
      
      if (availableFormats.includes('avif') && browserSupport.avif) {
        sources.push({
          srcSet: generateSrcSet(variants, 'avif'),
          type: 'image/avif',
          sizes
        })
      }
      
      if (availableFormats.includes('webp') && browserSupport.webp) {
        sources.push({
          srcSet: generateSrcSet(variants, 'webp'),
          type: 'image/webp',
          sizes
        })
      }
      
      if (availableFormats.includes('jpeg')) {
        sources.push({
          srcSet: generateSrcSet(variants, 'jpeg'),
          type: 'image/jpeg',
          sizes
        })
      }

      // Find fallback image (largest JPEG or optimal format)
      const fallbackVariant = variants
        .filter(v => v.format === 'jpeg')
        .sort((a, b) => b.width - a.width)[0] || 
        variants.filter(v => v.format === optimalFormat)[0]

      if (!fallbackVariant) {
        return null
      }

      // Calculate aspect ratio
      const aspectRatio = fallbackVariant.width / fallbackVariant.height

      return {
        sources: sources.filter(s => s.srcSet), // Remove empty srcsets
        fallback: {
          src: fallbackVariant.path,
          width: fallbackVariant.width,
          height: fallbackVariant.height
        },
        placeholder: imageInfo.blurPlaceholder || undefined,
        aspectRatio
      }
    }

    // Fallback generation when manifest is not available
    console.warn(`Image not found in manifest: ${imagePath}, generating fallback paths`)
    
    const fallbackSizes = [300, 600, 1200]
    const aspectRatio = 16 / 9 // Default aspect ratio
    
    // Generate sources for each format
    const sources = []
    
    if (browserSupport.avif) {
      sources.push({
        srcSet: fallbackSizes
          .map(width => {
            const height = Math.round(width / aspectRatio)
            return `${generateFallbackPath(projectId, imageName, 'avif', width)} ${width}w`
          })
          .join(', '),
        type: 'image/avif',
        sizes
      })
    }
    
    if (browserSupport.webp) {
      sources.push({
        srcSet: fallbackSizes
          .map(width => {
            const height = Math.round(width / aspectRatio)
            return `${generateFallbackPath(projectId, imageName, 'webp', width)} ${width}w`
          })
          .join(', '),
        type: 'image/webp',
        sizes
      })
    }
    
    sources.push({
      srcSet: fallbackSizes
        .map(width => {
          const height = Math.round(width / aspectRatio)
          return `${generateFallbackPath(projectId, imageName, 'jpeg', width)} ${width}w`
        })
        .join(', '),
      type: 'image/jpeg',
      sizes
    })

    return {
      sources,
      fallback: {
        src: generateFallbackPath(projectId, imageName, 'jpeg', 1200),
        width: 1200,
        height: Math.round(1200 / aspectRatio)
      },
      aspectRatio
    }
  }, [manifest, loading, projectId, imageName, browserSupport, sizes, imagePath])

  // Return null if still loading or on error
  if (loading || error) {
    return null
  }

  return imageData
}

/**
 * Hook for preloading optimized images
 * @param imagePaths - Array of image paths to preload
 */
export function usePreloadImages(imagePaths: string[]) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const preloadImage = (src: string) => {
      const img = new Image()
      img.src = src
    }

    // Preload critical images
    imagePaths.forEach(imagePath => {
      const [projectId, imageName] = imagePath.split('/')
      if (projectId && imageName) {
        // Preload small version for immediate display
        preloadImage(generateFallbackPath(projectId, imageName, 'webp', 300))
      }
    })
  }, [imagePaths])
}

/**
 * Hook for getting image metadata from manifest
 * @param projectId - Project identifier
 * @returns Project image metadata
 */
export function useProjectImageMetadata(projectId: string) {
  const [manifest, setManifest] = useState<AssetManifest | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAssetManifest().then(manifest => {
      setManifest(manifest)
      setLoading(false)
    })
  }, [])

  const projectData = manifest?.projects[projectId]

  return {
    images: projectData?.images || {},
    totalSize: projectData?.totalSize || 0,
    imageCount: projectData?.imageCount || 0,
    loading
  }
}

export default useOptimizedImage