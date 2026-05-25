import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>
            © {new Date().getFullYear()} DJS Marketing Services. All rights reserved.
          </p>
          <p>San Diego, CA · marketing@djs90.com · (619) 928-4669</p>
        </div>
        <div className="footer-links">
          <Link href="/blog">Blog</Link>
          <Link href="#services">Services</Link>
          <Link href="#boost">BOOST365</Link>
          <Link href="#about">About</Link>
          <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer">Book a Call</a>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/djsmarketingservices" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
          <a href="https://www.facebook.com/djsmarketingservices" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a href="https://www.linkedin.com/company/djs-marketing-services/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LI</a>
        </div>
      </div>
    </footer>
  )
}
