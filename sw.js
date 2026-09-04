// Service Worker to handle 404 errors and offline functionality
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/fonts.css',
  '/icons.css',
  '/mobile-optimizations.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - handle requests and 404s
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Handle Chrome DevTools requests to prevent 404s
  if (url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    event.respondWith(new Response('{}', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }));
    return;
  }
  
  // Handle missing routes
  if (url.pathname !== '/' && !urlsToCache.includes(url.pathname)) {
    event.respondWith(
      fetch('/').catch(() => {
        return new Response('Redirecting to home...', {
          status: 302,
          headers: { 'Location': '/' }
        });
      })
    );
    return;
  }
  
  // Normal cache strategy
  event.respondWith(
    caches.match(request)
      .then(response => {
        return response || fetch(request);
      })
      .catch(() => {
        return new Response('Offline', { status: 503 });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
