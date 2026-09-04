import { profile } from './site'

export type SEOMetadata = {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedDate?: string
  modifiedDate?: string
  canonicalUrl?: string
}

/**
 * Generate meta tags for a given page
 */
export function generateMetaTags(metadata: SEOMetadata) {
  const {
    title = 'Zaheer Abbas - AI Engineer & Systems Architect',
    description = 'AI Engineer specializing in multi-agent systems, LLM applications, and production-grade AI infrastructure.',
    image = `${profile.siteUrl}${profile.ogImage}`,
    url = profile.siteUrl,
    type = 'website',
    author = profile.name,
    canonicalUrl = url,
  } = metadata

  return {
    title,
    description,
    image,
    url,
    type,
    author,
    canonicalUrl,
  }
}

/**
 * Generate Open Graph meta tags
 */
export function generateOpenGraphTags(metadata: SEOMetadata) {
  const meta = generateMetaTags(metadata)
  
  return {
    'og:title': meta.title,
    'og:description': meta.description,
    'og:image': meta.image,
    'og:url': meta.url,
    'og:type': meta.type,
    'og:site_name': profile.name,
    'og:locale': 'en_US',
  }
}

/**
 * Generate Twitter Card meta tags
 */
export function generateTwitterCardTags(metadata: SEOMetadata) {
  const meta = generateMetaTags(metadata)
  
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': meta.image,
    'twitter:site': '@ZaheerAbbas',
    'twitter:creator': '@ZaheerAbbas',
  }
}

/**
 * Generate JSON-LD structured data for Person schema
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: profile.siteUrl,
    email: profile.email,
    telephone: profile.phone,
    jobTitle: profile.role,
    description: profile.tagline,
    image: `${profile.siteUrl}${profile.ogImage}`,
    sameAs: [
      profile.linkedin,
      profile.github,
      profile.huggingFace,
      profile.kaggle,
      profile.facebook,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bagan, Lower Kurram',
      addressRegion: 'Khyber Pakhtunkhwa',
      addressCountry: 'PK',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Multi-Agent Systems',
      'Large Language Models',
      'Computer Vision',
      'Full-Stack Development',
      'Python',
      'TypeScript',
      'React',
      'Next.js',
      'Deep Learning',
      'Production ML Systems',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': profile.siteUrl,
    },
  }
}

/**
 * Generate JSON-LD structured data for WebSite schema
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${profile.name}'s Portfolio`,
    url: profile.siteUrl,
    description: profile.tagline,
    creator: {
      '@type': 'Person',
      name: profile.name,
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${profile.siteUrl}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbList(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: profile.name,
    url: profile.siteUrl,
    email: profile.email,
    telephone: profile.phone,
    description: profile.tagline,
    image: `${profile.siteUrl}${profile.ogImage}`,
    sameAs: [
      profile.linkedin,
      profile.github,
      profile.huggingFace,
      profile.kaggle,
      profile.facebook,
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
  }
}

/**
 * Generate canonical URL meta tag
 */
export function generateCanonicalTag(url: string) {
  return {
    rel: 'canonical',
    href: url,
  }
}

export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Zaheer Abbas AI Engineering Services',
    url: profile.siteUrl,
    description:
      'AI engineering consulting for multi-agent systems, RAG pipelines, production ML infrastructure, and modern full-stack delivery.',
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Multi-Agent System Design',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RAG and LLM Product Engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Production ML and MLOps',
          },
        },
      ],
    },
    provider: {
      '@type': 'Person',
      name: profile.name,
      url: profile.siteUrl,
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  excerpt: string
  url: string
  thumbnail: string
  publishedDate: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${profile.siteUrl}${article.thumbnail}`,
    url: `${profile.siteUrl}${article.url}`,
    author: {
      '@type': 'Person',
      name: profile.name,
      url: profile.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: profile.name,
      url: profile.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${profile.siteUrl}${profile.ogImage}`,
      },
    },
    datePublished: article.publishedDate,
    articleSection: article.category,
    inLanguage: 'en-US',
  }
}

/**
 * Generate all SEO-related meta tags for a page
 */
export function generateAllSEOTags(
  metadata: SEOMetadata,
  breadcrumbs?: Array<{ name: string; url: string }>
) {
  return {
    basic: generateMetaTags(metadata),
    openGraph: generateOpenGraphTags(metadata),
    twitter: generateTwitterCardTags(metadata),
    schemas: {
      person: generatePersonSchema(),
      website: generateWebSiteSchema(),
      organization: generateOrganizationSchema(),
      breadcrumbs: breadcrumbs ? generateBreadcrumbList(breadcrumbs) : null,
    },
  }
}

/**
 * Get all routes for sitemap generation
 */
export const allRoutes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/portfolio', changefreq: 'weekly', priority: 0.9 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
  { path: '/playground', changefreq: 'monthly', priority: 0.7 },
] as const

/**
 * Get robots.txt rules
 */
export const robotsRules = {
  userAgent: '*',
  allow: '/',
  disallow: ['/api', '/admin', '/*.json$', '/next/*'],
  crawlDelay: 0,
  requestRate: { requests: 1, seconds: 1 },
  sitemaps: [`${profile.siteUrl}/sitemap.xml`],
} as const

/**
 * Generate robots.txt configuration for Next.js
 */
export function generateRobotsConfig() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/.next/', '/out/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  }
}

/**
 * Generate sitemap entries for Next.js
 */
export function generateSitemapEntries() {
  const now = new Date()
  
  return [
    {
      url: profile.siteUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${profile.siteUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${profile.siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${profile.siteUrl}/playground`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
}
