// Enhanced Service Worker for Performance Optimization
// Version: 2.0.0

const CACHE_NAME = 'portfolio-cache-v2'
const STATIC_CACHE_NAME = 'portfolio-static-v2'
const DYNAMIC_CACHE_NAME = 'portfolio-dynamic-v2'
const IMAGE_CACHE_NAME = 'portfolio-images-v2'

// Cache strategies configuration
const CACHE_STRATEGIES = {
  // Static assets - cache first, long-term
  static: {
    pattern: /\/_next\/static\/|\/fonts\/|\.woff2?$|\.ttf$|\.eot$/,
    strategy: 'cache-first',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    cacheName: STATIC_CACHE_NAME
  },
  
  // Images - stale while revalidate with format optimization
  images: {
    pattern: /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i,
    strategy: 'stale-while-revalidate',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    cacheName: IMAGE_CACHE_NAME
  },
  
  // HTML pages - network first with fast timeout
  pages: {
    pattern: /\.html?$|\/$/,
    strategy: 'network-first',
    timeout: 2000,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    cacheName: DYNAMIC_CACHE_NAME
  },
  
  // API endpoints - network first with short cache
  api: {
    pattern: /\/api\//,
    strategy: 'network-first',
    timeout: 3000,
    maxAge: 5 * 60 * 1000, // 5 minutes
    cacheName: DYNAMIC_CACHE_NAME
  }
}

// Resources to precache on install
const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/fonts/inter-latin-400-normal.woff2',
  '/fonts/inter-latin-600-normal.woff2',
  '/fonts/space-grotesk-latin-600-normal.woff2',
  '/zaheer-pic.png'
]

// Install event - precache critical resources
self.addEventListener('install', (event) => {
  console.log('SW: Installing version 2.0.0')
  
  event.waitUntil(
    Promise.all([
      // Precache static resources
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(PRECACHE_URLS)
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('SW: Activating version 2.0.0')
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheName.includes('v2')) {
              console.log('SW: Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      }),
      
      // Claim all clients
      self.clients.claim()
    ])
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return
  
  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return
  
  const url = new URL(event.request.url)
  
  // Handle Chrome DevTools requests to prevent 404s
  if (url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    event.respondWith(new Response('{}', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))
    return
  }
  
  const strategy = getStrategyForRequest(url.pathname + url.search)
  
  if (strategy) {
    event.respondWith(handleRequest(event.request, strategy))
  }
})

// Get appropriate caching strategy for request
function getStrategyForRequest(url) {
  for (const [name, config] of Object.entries(CACHE_STRATEGIES)) {
    if (config.pattern.test(url)) {
      return config
    }
  }
  
  // Default strategy for unmatched requests
  return {
    pattern: /.*/,
    strategy: 'network-first',
    timeout: 3000,
    maxAge: 60 * 60 * 1000, // 1 hour
    cacheName: DYNAMIC_CACHE_NAME
  }
}

// Handle request based on strategy
async function handleRequest(request, strategy) {
  const cache = await caches.open(strategy.cacheName)
  
  switch (strategy.strategy) {
    case 'cache-first':
      return cacheFirstStrategy(request, cache, strategy)
    
    case 'network-first':
      return networkFirstStrategy(request, cache, strategy)
    
    case 'stale-while-revalidate':
      return staleWhileRevalidateStrategy(request, cache, strategy)
    
    default:
      return fetch(request)
  }
}

// Cache-first strategy implementation
async function cacheFirstStrategy(request, cache, strategy) {
  const cachedResponse = await getCachedResponse(cache, request, strategy.maxAge)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Add caching headers
      const headers = new Headers(networkResponse.headers)
      headers.set('sw-cached-at', Date.now().toString())
      
      const responseToCache = new Response(networkResponse.body, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers
      })
      
      await cache.put(request, responseToCache)
    }
    
    return networkResponse
  } catch (error) {
    console.warn('SW: Network request failed:', request.url, error)
    throw error
  }
}

// Network-first strategy implementation
async function networkFirstStrategy(request, cache, strategy) {
  try {
    const controller = new AbortController()
    const timeout = strategy.timeout || 3000
    
    const timeoutId = setTimeout(() => controller.abort(), timeout)
    
    const networkResponse = await fetch(request, {
      signal: controller.signal
    })
    
    clearTimeout(timeoutId)
    
    if (networkResponse.ok) {
      const headers = new Headers(networkResponse.headers)
      headers.set('sw-cached-at', Date.now().toString())
      
      const responseToCache = new Response(networkResponse.body, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers
      })
      
      await cache.put(request, responseToCache)
    }
    
    return networkResponse
  } catch (error) {
    console.warn('SW: Network failed, trying cache:', request.url)
    
    const cachedResponse = await getCachedResponse(cache, request, strategy.maxAge)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Handle missing routes - redirect to home
    if (request.url.includes('.html') || !request.url.includes('.')) {
      return Response.redirect('/', 302)
    }
    
    throw error
  }
}

// Stale-while-revalidate strategy implementation
async function staleWhileRevalidateStrategy(request, cache, strategy) {
  const cachedResponse = await getCachedResponse(cache, request, strategy.maxAge)
  
  // Return cached response immediately (if available)
  const responsePromise = cachedResponse 
    ? Promise.resolve(cachedResponse)
    : fetch(request).then(async (response) => {
        if (response.ok) {
          const headers = new Headers(response.headers)
          headers.set('sw-cached-at', Date.now().toString())
          
          const responseToCache = new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers
          })
          
          await cache.put(request, responseToCache)
        }
        return response
      })

  // Update cache in background (if we have cached response)
  if (cachedResponse) {
    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          const headers = new Headers(response.headers)
          headers.set('sw-cached-at', Date.now().toString())
          
          const responseToCache = new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers
          })
          
          await cache.put(request, responseToCache)
        }
      })
      .catch(() => {}) // Ignore background update errors
  }

  return responsePromise
}

// Get cached response with freshness check
async function getCachedResponse(cache, request, maxAge) {
  const cachedResponse = await cache.match(request)
  
  if (!cachedResponse) return null
  
  // Check freshness
  const cachedAt = cachedResponse.headers.get('sw-cached-at')
  if (cachedAt && maxAge) {
    const age = Date.now() - parseInt(cachedAt)
    if (age > maxAge) {
      // Cache expired, remove it
      await cache.delete(request)
      return null
    }
  }
  
  return cachedResponse
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_REPORT') {
    console.log('SW: Performance report received:', event.data.metrics)
  }
})
