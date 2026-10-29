import Image from 'next/image'
import Link from 'next/link'
import PrivacyChoicesLink from './PrivacyChoicesLink'
import SiteNav from './SiteNav'
import styles from '../app/services/services.module.css'

export const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'


/** Shared site nav, spacer and footer for /about, /industries and service-style pages. */
export default function PageShell({ children }) {
  return (
    <div className={styles.page}>
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <SiteNav />
      <div className="nav-spacer" aria-hidden="true" />

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
