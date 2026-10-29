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
export function blogMeta({ title, seoTitle, description, slug, date, modified }) {
  const url = `${SITE}/blog/${slug}`
  // Search titles stay under 60 characters so Google doesn't truncate them.
  // seoTitle is the short search title; title (the on-page headline) is used for social cards.
  const base = seoTitle || title
  const branded = `${base} | DJS Marketing`
  return {
    title: { absolute: branded.length <= 60 ? branded : base },
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
      ...(modified && { modifiedTime: modified }),
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
export function articleSchema({ title, description, slug, date, modified, category, wordCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: DEFAULT_IMAGE,
    datePublished: date,
    dateModified: modified || date,
    author: {
      '@type': 'Person',
      '@id': `${SITE}/#danny-sweis`,
      name: 'Danny Sweis',
      jobTitle: 'Founder & CEO',
      url: `${SITE}/about`,
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

/**
 * JSON-LD for a service page: Service, BreadcrumbList and (optional) FAQPage.
 * faqs: [{ q, text }] where text is the plain-text version of the visible answer.
 */
export function serviceSchemas({ name, serviceType, description, path, crumb, faqs = [], audience }) {
  const url = `${SITE}${path}`
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name,
      serviceType,
      description,
      url,
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'San Diego' },
        { '@type': 'Country', name: 'United States' },
      ],
      ...(audience && { audience: { '@type': 'BusinessAudience', audienceType: audience } }),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumb.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: `${SITE}${c.path}`,
      })),
    },
  ]
  if (faqs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.text },
      })),
    })
  }
  return schemas
}

/** BreadcrumbList for a blog post: Home › Blog › Post */
export function blogBreadcrumb({ title, slug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE}/blog/${slug}` },
    ],
  }
}

/** Render one or more schema objects as JSON-LD script tags. */
export function JsonLd({ data }) {
  const list = Array.isArray(data) ? data : [data]
  return list.map((d, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c') }} />
  ))
}
