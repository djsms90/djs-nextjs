'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'

// One navigation bar for every page. Homepage section links use "/#…" so they
// work from any page and simply scroll when you are already on the homepage.
export const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#boost', label: 'BOOST365©' },
  { href: '/#results', label: 'Results' },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  // Hide the bar while scrolling down, show it again when scrolling up.
  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const st = window.scrollY
      navRef.current?.classList.toggle('nav-hidden', st > last && st > 80)
      last = st
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav ref={navRef} role="navigation" aria-label="Main navigation">
        <Link href="/" aria-label="DJS Marketing Services home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height: '56px', width: 'auto', display: 'block' }} />
        </Link>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">Book Free Strategy Call</a></li>
        </ul>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
        <button className="close-btn" aria-label="Close menu" onClick={close}>✕</button>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={close}>Book Free Strategy Call</a>
      </div>
    </>
  )
}
