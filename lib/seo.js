// lib/seo.js — SEO helpers for page-specific metadata and JSON-LD

const SITE = 'https://djsmarketingservices.com'
const SITE_NAME = 'DJS Marketing Services'
const DEFAULT_IMAGE = `${SITE}/og-image-v2.jpg`

/**
 * Generate full metadata for a blog post page.
 * Usage in page.js:
 *   import { blogMeta } from '@/lib/seo'
 *   export const metadata = blogMeta({ title, description, slug, date })
 */
export function blogMeta({ title, description, slug, date }) {
  const url = `${SITE}/blog/${slug}`
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: [{ url: DEFAULT_IMAGE, width: 1200, height: 630 }],
      siteName: SITE_NAME,
      locale: 'en_US',
      ...(date && { publishedTime: date }),
      authors: ['Danny Sweis'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_IMAGE],
    },
  }
}

/**
 * Generate Article JSON-LD schema object for a blog post.
 * Render with: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({...})) }} />
 */
export function articleSchema({ title, description, slug, date, category, wordCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: DEFAULT_IMAGE,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      '@id': `${SITE}/#danny-sweis`,
      name: 'Danny Sweis',
      jobTitle: 'Founder & CEO',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE}/logo-nav.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${slug}` },
    articleSection: category,
    ...(wordCount && { wordCount }),
    inLanguage: 'en-US',
  }
}
