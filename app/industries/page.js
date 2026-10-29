import Link from 'next/link'
import PageShell, { BOOKING_URL } from '../../components/PageShell'
import { industryMeta } from '../../components/IndustryPage'
import { JsonLd } from '../../lib/seo'
import styles from '../services/services.module.css'

const path = '/industries'

export const metadata = industryMeta({
  title: 'Industries We Serve | DJS Marketing Services',
  description:
    'DJS Marketing Services builds marketing systems for niche service professionals: real estate agents, bar associations and law firms, and loan officers.',
  path,
})

const industries = [
  {
    href: '/industries/real-estate',
    t: 'Real Estate Agents',
    d: 'Probate, divorce and other niche agents. Video, SEO and follow-up that turn expertise into listings.',
  },
  {
    href: '/industries/legal',
    t: 'Bar Associations & Law Firms',
    d: 'Websites, member communication and event marketing for nonprofit bar associations and attorneys.',
  },
  {
    href: '/industries/mortgage',
    t: 'Loan Officers & Mortgage Teams',
    d: 'Video-first content and follow-up that make you more than a rate quote.',
  },
]

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://djsmarketingservices.com/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://djsmarketingservices.com/industries' },
  ],
}

export default function IndustriesPage() {
  return (
    <PageShell current="/industries">
      <JsonLd data={breadcrumb} />

      <section className={styles.hero} aria-labelledby="page-title">
        <div className={styles.heroInner}>
          <div>
            <ol className={styles.crumbs} aria-label="Breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Industries</li>
            </ol>
            <p className={styles.eyebrow}>Who we work with</p>
            <h1 id="page-title" className={styles.h1}>
              Built for Experts. <em>Not Everyone.</em>
            </h1>
            <p className={styles.lede}>
              Generic marketing gets generic results. We work with service professionals whose expertise is
              the product, and we build the system around their niche.
            </p>
            <p className={styles.heroText}>
              Our deepest results are in real estate, legal and mortgage. If you have expertise and a target
              audience, the same BOOST365© system applies.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="list-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>Industries</p>
          <h2 id="list-title" className={styles.h2}>Pick <span>Your Industry</span></h2>
          <ul className={styles.reads}>
            {industries.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className={styles.readLink}>
                  <span className={styles.readTitle}>{i.t}</span>
                  <span className={styles.readDesc}>{i.d}</span>
                  <span className={styles.readMore} aria-hidden="true">See how we help</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.p} style={{ marginTop: 28 }}>
            Don&apos;t see yours? We also work with promotional products, apparel and other service businesses.
            See our <Link href="/services/seo" className={styles.inlineLink}>SEO</Link> and{' '}
            <Link href="/services/website-design" className={styles.inlineLink}>website design</Link> services.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="fit-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>Why niches</p>
          <h2 id="fit-title" className={styles.h2}>Why We Go Deep <span>Instead of Wide</span></h2>
          <p className={styles.p}>
            A probate agent, a license defense attorney and a loan officer sell the same thing: expertise someone
            needs at a stressful moment. Those people go looking for answers long before they go looking for a
            provider. Whoever answers clearly, shows proof and makes the next step easy gets the call.
          </p>
          <p className={styles.p}>
            These industries also feed each other. Attorneys send clients to agents. Agents send clients to
            attorneys. Loan officers sit in the middle of both. We know who refers whom, so every system we build
            strengthens those referral relationships instead of ignoring them.
          </p>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <h2 id="cta-title" className={styles.ctaH2}>Not Sure <span>Where to Start?</span></h2>
        <p>A free 30-minute strategy call. No pitch deck, no pressure. You&apos;ll walk away with at least one actionable insight, whether we work together or not.</p>
        <div className={styles.ctaRow}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Book Free Strategy Call
          </a>
          <Link href="/about" className={styles.btnGhost}>Meet Danny Sweis</Link>
        </div>
      </section>
    </PageShell>
  )
}
