import HeroBackground from '../../components/HeroBackground'
import Image from 'next/image'
import Link from 'next/link'
import PageShell, { BOOKING_URL } from '../../components/PageShell'
import { JsonLd } from '../../lib/seo'
import styles from '../services/services.module.css'

const SITE = 'https://djsmarketingservices.com'
const TITLE = 'About Danny Sweis | DJS Marketing Services'
const DESCRIPTION =
  'Danny Sweis founded DJS Marketing Services in San Diego in 2024. SDSU Marketing grad building done-for-you marketing systems for niche service professionals.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: `${SITE}/about`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'DJS Marketing Services',
    locale: 'en_US',
    images: [{ url: `${SITE}/danny-sweis.jpg`, width: 952, height: 1280 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE}/danny-sweis.jpg`],
  },
}

const press = [
  {
    href: 'https://sdvoyager.com/interview/hidden-gems-meet-danny-sweis-of-djs-marketing-services/',
    source: 'SD Voyager',
    t: 'Hidden Gems: Meet Danny Sweis of DJS Marketing Services',
  },
  {
    href: 'https://alumni.sdsu.edu/news/11584896',
    source: 'SDSU Alumni Association',
    t: 'San Diego State University Alumni Spotlight',
  },
]

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE}/about#webpage`,
    url: `${SITE}/about`,
    name: TITLE,
    description: DESCRIPTION,
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntity: { '@id': `${SITE}/#danny-sweis` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE}/#danny-sweis`,
    name: 'Danny Sweis',
    jobTitle: 'Founder & CEO',
    url: `${SITE}/about`,
    image: `${SITE}/danny-sweis.jpg`,
    worksFor: { '@id': `${SITE}/#organization` },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'San Diego State University',
      sameAs: 'https://en.wikipedia.org/wiki/San_Diego_State_University',
    },
    knowsAbout: [
      'Digital Marketing',
      'Search Engine Optimization',
      'Answer Engine Optimization',
      'Video Marketing',
      'Marketing Automation',
      'Real Estate Marketing',
    ],
    subjectOf: press.map((p) => ({ '@type': 'Article', name: p.t, url: p.href })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
    ],
  },
]

export default function AboutPage() {
  return (
    <PageShell current="/about">
      <JsonLd data={schemas} />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="page-title">
        <HeroBackground />
        <div className={styles.heroInner}>
          <div>
            <ol className={styles.crumbs} aria-label="Breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">About</li>
            </ol>
            <p className={styles.eyebrow}>About DJS Marketing Services</p>
            <h1 id="page-title" className={styles.h1}>
              Meet Danny Sweis. <em>Founder &amp; CEO</em>
            </h1>
            <p className={styles.lede}>
              The S in our logo stands for Sweis. It also stands for the belief that when a business needs help,
              someone should actually show up and fix it. No excuses. No runaround. Just results.
            </p>
            <p className={styles.heroText}>
              I run DJS Marketing Services, a full-stack digital marketing agency based in San Diego. We work
              online with clients across the U.S. and internationally, turning their expertise into clicks, leads
              and repeat customers through video, social media, email, search and websites that actually convert.
            </p>
            <div className={styles.btnRow}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Book a Call With Danny
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/danny-sweis.jpg"
              alt="Danny Sweis, Founder and CEO of DJS Marketing Services"
              width={476}
              height={640}
              sizes="(max-width: 900px) 80vw, 400px"
              style={{ width: '100%', maxWidth: 400, height: 'auto', borderRadius: 8, border: '3px solid var(--gold)' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ROOTS */}
      <section className={styles.section} aria-labelledby="roots-title">
        <div className={styles.narrow}>
          <p className={styles.kicker}>Where it started</p>
          <h2 id="roots-title" className={styles.h2}>Born in Abu Dhabi. <span>Built in San Diego.</span></h2>
          <p className={styles.p}>
            18 years of hot, humid memories filled with friendships and experiences that shaped everything about
            who I am.
          </p>
          <p className={styles.p}>
            Growing up in Abu Dhabi, spending time with family in Jordan, and building a life in San Diego let me
            see the world through different lenses.
          </p>
          <p className={styles.p}>
            People ask why I #Abbreciate so much. When you see the good, the bad and the ugly everywhere you go,
            you realize it&apos;s not the place. It&apos;s the people, and the way they treat each other.
          </p>
          <p className={styles.p}>
            I will be forever grateful to have been born there and to have grown up with people from every corner
            of the world. It&apos;s why this agency runs on relationships, not transactions. No matter where life
            takes me, a piece of me will always be in Abu Dhabi.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="story-title">
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <p className={styles.kicker}>The short version</p>
              <h2 id="story-title" className={styles.h2}>Built on Relationships, <span>Not Transactions.</span></h2>
              <p className={styles.p}>
                I earned my BS in Marketing from San Diego State University in 2015. I launched DJS Marketing
                Services in February 2024, and the agency has grown almost entirely through referrals.
              </p>
              <p className={styles.p}>
                That is not an accident. Clients refer you when you treat their business like it is your own. I care
                about honesty over politeness, results over résumés, and real relationships over corporate BS.
              </p>
              <p className={styles.p}>
                DJS Marketing Services is not a template agency. It is a system, BOOST365©, built from real
                experience and a genuine commitment to winning for every client we take on.
              </p>
            </div>
            <ul className={styles.checklist}>
              <li><strong>Education.</strong> BS in Marketing, San Diego State University, 2015.</li>
              <li><strong>Roots.</strong> Born and raised in Abu Dhabi, with family in Jordan. Now building in San Diego.</li>
              <li><strong>Founded.</strong> DJS Marketing Services, San Diego, February 2024.</li>
              <li><strong>Built by referral.</strong> Clients in real estate, legal, mortgage and promotional products.</li>
              <li><strong>Gives back.</strong> Mentor in the SDSU Alumni Mentorship Program.</li>
              <li><strong>#Abbreciate.</strong> A gratitude-first presence shared across social media.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className={styles.section} aria-labelledby="how-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>How we work</p>
          <h2 id="how-title" className={styles.h2}>We Build the Machines. <span>Then We Tighten the Gears.</span></h2>
          <p className={styles.p}>
            &ldquo;We optimize and build the machines, pour in traffic, and keep tightening the gears until revenue
            climbs.&rdquo; Every engagement runs on the five pillars of BOOST365©: Branding, Optimization, Outreach,
            Sales Funnels and Tracking. Get the free <Link href="/playbook" className={styles.inlineLink}>BOOST365©
            Playbook</Link> to see how it works.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.h3}>Real estate</h3>
              <p>1M+ YouTube views for a probate real estate professional. <Link href="/industries/real-estate" className={styles.inlineLink}>See real estate marketing</Link>.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.h3}>Legal</h3>
              <p>Building the San Diego Unity Bar website, plus marketing for attorneys. <Link href="/industries/legal" className={styles.inlineLink}>See legal marketing</Link>.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.h3}>Mortgage</h3>
              <p>Video-first content systems for loan officers. <Link href="/industries/mortgage" className={styles.inlineLink}>See mortgage marketing</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="press-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>In the press</p>
          <h2 id="press-title" className={styles.h2}>Featured In &amp; <span>Recognized By</span></h2>
          <ul className={styles.reads}>
            {press.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={styles.readLink}>
                  <span className={styles.readTitle}>{p.source}</span>
                  <span className={styles.readDesc}>{p.t}</span>
                  <span className={styles.readMore} aria-hidden="true">Read the feature</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-title">
        <h2 id="cta-title" className={styles.ctaH2}>Let&apos;s Talk <span>About Your Business.</span></h2>
        <p>A free 30-minute strategy call. No pitch deck, no pressure. You&apos;ll walk away with at least one actionable insight, whether we work together or not.</p>
        <div className={styles.ctaRow}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Book Free Strategy Call
          </a>
          <Link href="/industries" className={styles.btnGhost}>Industries We Serve</Link>
        </div>
      </section>
    </PageShell>
  )
}
