'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav-logo">
          <Image src="/logo-main-hq.jpg" alt="DJS Marketing Services" width={160} height={44} priority />
        </Link>
        <ul className="nav-links">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#boost">BOOST365</Link></li>
          <li><Link href="#results">Results</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="#about">About</Link></li>
        </ul>
        <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="nav-cta">
          Book Free Strategy Call
        </a>
      </nav>
    </>
  )
}
