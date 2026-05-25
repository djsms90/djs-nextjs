import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
  canonical: 'https://djsmarketingservices.com/',
  openGraph: {
    type: 'website',
    url: 'https://djsmarketingservices.com/',
    title: 'DJS Marketing Services | Full-Stack Digital Marketing Agency San Diego',
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
  '@type': 'LocalBusiness',
  name: 'DJS Marketing Services',
  description: 'Full-stack digital marketing agency specializing in SEO, paid advertising, social media management, and AI-powered marketing systems.',
  url: 'https://djsmarketingservices.com',
  logo: 'https://djsmarketingservices.com/logo.png',
  telephone: '+1-619-928-4669',
  email: 'marketing@djs90.com',
  founder: { '@type': 'Person', name: 'Danny Sweis' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.instagram.com/djsmarketingservices',
    'https://www.facebook.com/djsmarketingservices',
    'https://www.linkedin.com/company/djs-marketing-services/',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4DFX8R6SKR" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4DFX8R6SKR');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','1307109944174919');fbq('track','PageView');
          `}
        </Script>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
