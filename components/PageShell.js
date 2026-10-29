import SiteFooter from './SiteFooter'
import Link from 'next/link'
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

      <SiteFooter />
    </div>
  )
}
