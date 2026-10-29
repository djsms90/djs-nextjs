'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import PrivacyChoicesLink from './PrivacyChoicesLink'
import SiteNav from './SiteNav'
import blogPosts, { clusters } from '../data/blog-posts'

export default function BlogLayout({ children, title, tag, date, updated, readTime, slug }) {
  const post = blogPosts.find((p) => p.slug === slug)
  const cluster = post && clusters[post.cluster]
  const related = post
    ? blogPosts
        .filter((p) => p.cluster === post.cluster && p.slug !== slug)
        .sort((a, b) => (b.slug === cluster?.pillar) - (a.slug === cluster?.pillar))
        .slice(0, 3)
    : []

  useEffect(() => {
    // Scroll to top button
    const btn = document.getElementById('scrollTopBlog')
    const handleScroll = () => btn?.classList.toggle('visible', window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SiteNav />

      {/* ARTICLE */}
      <main className="article-wrap">
        <Link href="/blog" className="blog-back">← All Articles</Link>
        <span className="article-tag">{tag}</span>
        <h1>{title}</h1>
        <div className="article-meta">
          <span>By Danny Sweis, DJS Marketing Services</span>
          <span>{date}</span>
          {updated && <span>Updated {updated}</span>}
          {readTime && <span>{readTime}</span>}
        </div>
        <div className="article-body">
          {children}
        </div>

        {/* RELATED READING */}
        {(related.length > 0 || cluster) && (
          <aside className="related-reading" aria-labelledby="related-title">
            <h2 id="related-title">Keep Reading</h2>
            <ul>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={r.href}>{r.title}</Link>
                  {r.slug === cluster?.pillar && <span className="related-pillar"> Start here</span>}
                </li>
              ))}
              {cluster && (
                <li><Link href={cluster.service.href}>{cluster.service.label} →</Link></li>
              )}
            </ul>
          </aside>
        )}

        {/* STANDARD CTA */}
        <div className="cta-box">
          <h2>Ready to Build a System That Actually Works?</h2>
          <p>Book a free 30-minute strategy call. No pitch. No pressure. Just clarity on what your business needs to grow.</p>
          <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer">Book Your Free Strategy Call</a>
        </div>
      </main>

      {/* FOOTER */}
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
        <Link href="/blog" style={{ fontSize:'13px', fontWeight:'700', color:'var(--blue)', textDecoration:'none' }}>← All Articles</Link>
      </footer>

      {/* SCROLL TOP */}
      <a href="#" className="scroll-top" id="scrollTopBlog" aria-label="Back to top">↑</a>
    </>
  )
}
