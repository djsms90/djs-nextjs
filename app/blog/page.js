import SiteFooter from '../../components/SiteFooter'
import Link from 'next/link'
import SiteNav from '../../components/SiteNav'
import blogPosts from '../../data/blog-posts'

export const metadata = {
  title: 'Marketing Intelligence Blog | DJS Marketing Services',
  description: 'Insights on paid ads, SEO, AEO, social media, video marketing, and AI-powered marketing systems from DJS Marketing Services.',
  alternates: { canonical: 'https://djsmarketingservices.com/blog' },
  openGraph: {
    type: 'website',
    url: 'https://djsmarketingservices.com/blog',
    title: 'Marketing Intelligence Blog | DJS Marketing Services',
    description: 'Insights on paid ads, SEO, AEO, social media, video marketing, and AI-powered marketing systems from DJS Marketing Services.',
    images: [{ url: 'https://djsmarketingservices.com/og-image-v2.jpg', width: 1200, height: 630 }],
    siteName: 'DJS Marketing Services',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Intelligence Blog | DJS Marketing Services',
    description: 'Insights on paid ads, SEO, AEO, social media, video marketing, and AI-powered marketing systems.',
    images: ['https://djsmarketingservices.com/og-image-v2.jpg'],
  },
}

export default function BlogPage() {
  return (
    <>
      <SiteNav />

      <main className="blog-listing">
        <p style={{ fontSize:'11px', fontWeight:'900', letterSpacing:'3px', textTransform:'uppercase', color:'var(--red)', marginBottom:'12px' }}>DJS Marketing Services</p>
        <h1>Marketing Intelligence</h1>
        <p className="subtitle">Paid ads, SEO, AEO, social media, video, and AI-powered marketing. Real insights. No fluff.</p>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <Link key={i} href={post.href} className="blog-card">
              <span className="card-tag">{post.tag}</span>
              <p className="card-meta">{post.date}</p>
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <span className="read-more">Read More →</span>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
