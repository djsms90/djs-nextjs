import Image from 'next/image'
import Link from 'next/link'
import PrivacyChoicesLink from './PrivacyChoicesLink'
import styles from '../app/services/services.module.css'

export const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'

export const NAV_ITEMS = [
  { href: '/services/seo', label: 'SEO & AEO' },
  { href: '/services/website-design', label: 'Website Design' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

/** Shared header, nav and footer for /about, /industries and service-style pages. */
export default function PageShell({ current, children }) {
  return (
    <div className={styles.page}>
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.logoLink} aria-label="DJS Marketing Services home">
            <Image src="/logo-nav.jpg" alt="DJS Marketing Services" width={52} height={52} className={styles.logo} priority />
          </Link>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-current={current === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.navCta}>
                Book Free Strategy Call
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">{children}</main>

      <footer className={styles.footer}>
        <Link href="/" aria-label="DJS Marketing Services home">
          <Image src="/logo-footer.jpg" alt="DJS Marketing Services" width={160} height={44} className={styles.footerLogo} />
        </Link>
        <div>
          <p className={styles.footerText}>&copy; {new Date().getFullYear()} DJS Marketing Services. All Rights Reserved.</p>
          <div className={styles.footerLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <PrivacyChoicesLink className={styles.privacyBtn} />
          </div>
        </div>
      </footer>
    </div>
  )
}
