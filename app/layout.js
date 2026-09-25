import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import ConsentManager from '../components/ConsentManager'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://djsmarketingservices.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  title: 'DJS Marketing Services | San Diego Digital Marketing Agency',
  description: 'DJS Marketing Services builds done-for-you digital marketing systems that turn your expertise into leads, clients, and revenue. SEO, paid ads, social media, web design & AI-powered marketing for niche service businesses in San Diego.',
  keywords: 'digital marketing agency San Diego, SEO San Diego, paid ads agency, social media management, real estate marketing, BOOST365, Danny Sweis, DJS Marketing Services',
  authors: [{ name: 'Danny Sweis, DJS Marketing Services' }],
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://djsmarketingservices.com/',
    title: 'DJS Marketing Services | San Diego Digital Marketing',
    description: 'We build done-for-you marketing systems that turn your expertise into leads, clients, and revenue. BOOST365© Playbook. The system behind the results.',
    images: [{ url: 'https://djsmarketingservices.com/og-image-v2.jpg', width: 1200, height: 630 }],
    siteName: 'DJS Marketing Services',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://djsmarketingservices.com/',
    title: 'DJS Marketing Services | San Diego Digital Marketing Agency',
    description: 'Done-for-you marketing systems powered by AI. SEO, paid ads, social media & web design for niche service businesses.',
    images: ['https://djsmarketingservices.com/og-image-v2.jpg'],
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MarketingAgency'],
  '@id': 'https://djsmarketingservices.com/#organization',
  name: 'DJS Marketing Services',
  alternateName: 'DJSMS',
  description: 'DJS Marketing Services builds done-for-you digital marketing systems that turn your expertise into leads, clients, and revenue. SEO, paid ads, social media, web design & AI-powered marketing for niche service businesses in San Diego.',
  url: 'https://djsmarketingservices.com',
  logo: 'https://djsmarketingservices.com/logo-nav.jpg',
  image: 'https://djsmarketingservices.com/og-image-v2.jpg',
  telephone: '+1-619-928-4669',
  email: 'marketing@djs90.com',
  founder: {
    '@type': 'Person',
    '@id': 'https://djsmarketingservices.com/#danny-sweis',
    name: 'Danny Sweis',
    jobTitle: 'Founder & CEO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7157,
    longitude: -117.1611,
  },
  areaServed: {
    '@type': 'City',
    name: 'San Diego',
    sameAs: 'https://en.wikipedia.org/wiki/San_Diego',
  },
  sameAs: [
    'https://www.instagram.com/djsmarketingservices',
    'https://www.facebook.com/djsmarketingservices',
    'https://www.linkedin.com/company/djs-marketing-services/',
  ],
  knowsAbout: [
    'Search Engine Optimization',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'Paid Advertising',
    'Social Media Marketing',
    'AI-Powered Marketing',
    'Web Design',
    'Sales Funnels',
    'Email Marketing',
    'Video Marketing',
    'Brand Strategy',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & AEO Optimization', description: 'Strategic SEO with AEO optimization that starts showing results in 60-90 days' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Advertising', description: 'Precision-targeted ads on Meta, Google, LinkedIn, and TikTok' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management', description: 'Content creation and social media management across all platforms' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Powered Marketing Systems', description: 'Complete AI-powered marketing systems including content production, campaign optimization, and AEO positioning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Development', description: 'Custom website design and development optimized for conversion' } },
    ],
  },
  priceRange: '$$',
}

const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://djsmarketingservices.com/#website',
  url: 'https://djsmarketingservices.com',
  name: 'DJS Marketing Services',
  publisher: { '@id': 'https://djsmarketingservices.com/#organization' },
  inLanguage: 'en-US',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        {/* Schema.org — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {/* Schema.org — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
      </head>
      <body>
        {children}
        <ConsentManager />
      </body>
    </html>
  )
}
