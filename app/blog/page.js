import Link from 'next/link'
import PrivacyChoicesLink from '../../components/PrivacyChoicesLink'
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
      <nav role="navigation" aria-label="Main navigation">
        <Link href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height:'48px', width:'auto' }} /></Link>
        <Link href="/" style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.9)', textDecoration:'none', letterSpacing:'0.5px', textTransform:'uppercase' }}>← Back to Home</Link>
      </nav>

      <div className="blog-listing">
        <p style={{ fontSize:'11px', fontWeight:'900', letterSpacing:'3px', textTransform:'uppercase', color:'var(--red)', marginBottom:'12px' }}>DJS Marketing Services</p>
        <h1>Marketing Intelligence</h1>
        <p className="subtitle">Paid ads, SEO, AEO, social media, video, and AI-powered marketing. Real insights. No fluff.</p>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <Link key={i} href={post.href} className="blog-card">
              <span className="card-tag">{post.tag}</span>
              <p className="card-meta">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <span className="read-more">Read More →</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background:'var(--white)', borderTop:'1px solid var(--border)', padding:'28px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
        <Link href="/"><img src="/logo-footer.jpg" alt="DJS Marketing Services" style={{ height:'40px', width:'auto' }} /></Link>
        <p style={{ fontSize:'12px', color:'var(--text-light)' }}>
          © {new Date().getFullYear()}{' '}DJS Marketing Services. All Rights Reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" style={{ color:'var(--blue)', textDecoration:'none' }}>Privacy Policy</Link>
          &nbsp;|&nbsp;
          <Link href="/terms" style={{ color:'var(--blue)', textDecoration:'none' }}>Terms & Conditions</Link>
          &nbsp;|&nbsp;
          <PrivacyChoicesLink style={{ color:'var(--blue)' }} />
        </p>
      </footer>
    </>
  )
}
