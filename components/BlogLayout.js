'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function BlogLayout({ children, title, tag, date, readTime, description }) {
  useEffect(() => {
    // Scroll to top button
    const btn = document.getElementById('scrollTopBlog')
    const handleScroll = () => btn?.classList.toggle('visible', window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation">
        <Link href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height: '48px', width: 'auto' }} /></Link>
        <Link href="/blog" style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.9)', textDecoration:'none', letterSpacing:'0.5px', textTransform:'uppercase' }}>
          ← All Articles
        </Link>
      </nav>

      {/* ARTICLE */}
      <main className="article-wrap">
        <Link href="/blog" className="blog-back">← All Articles</Link>
        <span className="article-tag">{tag}</span>
        <h1>{title}</h1>
        <div className="article-meta">
          <span>By Danny Sweis, DJS Marketing Services</span>
          <span>{date}</span>
          {readTime && <span>{readTime}</span>}
        </div>
        <div className="article-body">
          {children}
        </div>

        {/* STANDARD CTA */}
        <div className="cta-box">
          <h3>Ready to Build a System That Actually Works?</h3>
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
        </p>
        <Link href="/blog" style={{ fontSize:'13px', fontWeight:'700', color:'var(--blue)', textDecoration:'none' }}>← All Articles</Link>
      </footer>

      {/* SCROLL TOP */}
      <a href="#" className="scroll-top" id="scrollTopBlog" aria-label="Back to top">↑</a>
    </>
  )
}
