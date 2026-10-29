import SiteFooter from '../../../components/SiteFooter'
import HeroBackground from '../../../components/HeroBackground'
import Link from 'next/link'
import SiteNav from '../../../components/SiteNav'
import { serviceSchemas, JsonLd } from '../../../lib/seo'
import styles from '../services.module.css'

const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'
const PAGE_URL = 'https://djsmarketingservices.com/services/website-design'
const TITLE = 'Website Design for Service Businesses | DJS Marketing'
const DESCRIPTION =
  'Websites for service businesses that explain what you do in seconds and turn visitors into booked calls. Search-ready, mobile-friendly, built to convert.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services/website-design' },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'DJS Marketing Services',
    locale: 'en_US',
    images: [{ url: 'https://djsmarketingservices.com/og-image-v2.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://djsmarketingservices.com/og-image-v2.jpg'],
  },
}


const faqs = [
  {
    q: 'How long does a website build take?',
    a: 'Depends on how many pages, how much content you already have, and how fast decisions move. You get a real timeline once scope is clear, not a guess up front.',
  },
  {
    q: 'Is ongoing SEO included with a new website?',
    a: (
      <>
        Every site is built search-ready: clean structure, crawlable pages, clear content. Ongoing SEO is
        its own scope, agreed on upfront. More on our <Link href="/services/seo">SEO, AEO &amp; GEO</Link> page.
      </>
    ),
    text: 'Every site is built search-ready: clean structure, crawlable pages, clear content. Ongoing SEO is its own scope, agreed on upfront. More on our SEO, AEO & GEO page.',
  },
  {
    q: 'Can you redesign my existing site instead of starting over?',
    a: 'Sometimes a tune-up is the right move. Sometimes a rebuild is. We look at what you have and tell you straight which one makes sense.',
  },
  {
    q: 'Do you build landing pages and sales funnels too?',
    a: 'Yes. Landing pages and sales funnels are part of what we build, alongside your website or on their own. We decide which pieces you need on the strategy call.',
  },
  {
    q: 'Will a new website guarantee more leads?',
    a: "No website guarantees leads, and nobody honest will tell you otherwise. A well-built site removes friction: it explains what you do and makes it easy to reach out. Traffic, your offer and your follow-up matter too. That's why we build systems, not just sites.",
  },
]


const schemas = serviceSchemas({
  name: 'Website Design & Development',
  serviceType: 'Website design',
  description: DESCRIPTION,
  path: '/services/website-design',
  crumb: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Website Design', path: '/services/website-design' },
  ],
  faqs: faqs.map((f) => ({ q: f.q, text: f.text || f.a })),
})

export default function WebsiteDesignPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={schemas} />
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <SiteNav />
      <div className="nav-spacer" aria-hidden="true" />

      <main id="main-content">
        {/* HERO */}
        <section className={styles.hero} aria-labelledby="web-title">
          <HeroBackground />
          <div className={styles.heroInner}>
            <div>
              <ol className={styles.crumbs} aria-label="Breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li aria-current="page">Website Design</li>
              </ol>
              <p className={styles.eyebrow}>Website Design &amp; Development</p>
              <h1 id="web-title" className={styles.h1}>
                Your Website Should Be <em>Your Best Salesperson.</em>
              </h1>
              <p className={styles.lede}>
                You&apos;re great at what you do. If your website doesn&apos;t make that obvious in the first few
                seconds, visitors leave for a competitor who does.
              </p>
              <p className={styles.heroText}>
                We design and build websites for service professionals that say exactly who you help, why
                you&apos;re the obvious choice, and how to get in touch. No fluff.
              </p>
              <div className={styles.btnRow}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book Free Strategy Call
                </a>
                <a href="#approach" className={styles.btnGhost}>How We Approach It</a>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <p className={styles.panelLabel}>Every visitor should know</p>
              <ul className={styles.panelList}>
                <li><span className={styles.panelNum}>01</span><span><strong>What you do</strong>In plain English. No decoding jargon.</span></li>
                <li><span className={styles.panelNum}>02</span><span><strong>Why you</strong>Why your expertise is worth trusting.</span></li>
                <li><span className={styles.panelNum}>03</span><span><strong>What&apos;s next</strong>One obvious step toward a booked call.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="problem-title">
          <div className={styles.inner}>
            <div className={styles.split}>
              <div>
                <p className={styles.kicker}>The real problem</p>
                <h2 id="problem-title" className={styles.h2}>
                  A Pretty Site Is Not <span>the Same as a Working One.</span>
                </h2>
                <p className={styles.p}>
                  Most service businesses have a website that looks fine and does nothing. Vague copy. Buried
                  contact info. Visitors left to figure out the next step on their own. They won&apos;t.
                </p>
                <p className={styles.p}>
                  <strong>Your website isn&apos;t a brochure. It&apos;s part of your marketing system</strong>,
                  connected to your brand, your search visibility, your landing pages and your tracking.
                </p>
              </div>
              <ul className={styles.checklist}>
                <li><strong>Clear messaging.</strong> Copy built around what your clients need to know before they call.</li>
                <li><strong>Brand consistency.</strong> A look and voice that match how you show up everywhere else.</li>
                <li><strong>Mobile-friendly and accessible.</strong> Fast, readable and usable on any device.</li>
                <li><strong>Search-ready structure.</strong> Pages and headings Google can understand, and AI can quote.</li>
                <li><strong>Conversion paths.</strong> Obvious, repeated routes to book a call. Don&apos;t make people hunt.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className={styles.section} aria-labelledby="approach-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>How it works</p>
            <h2 id="approach-title" className={styles.h2}>From Conversation <span>to Launch</span></h2>
            <p className={styles.p}>
              Every build starts with your business, not a design. We agree on scope (pages, features and
              anything ongoing) before a single pixel moves.
            </p>
            <ol className={styles.steps}>
              <li className={styles.step}><p className={styles.stepNum}>01</p><h3 className={styles.h3}>Strategy call</h3><p>Your services, your clients, your goals, and what is and isn&apos;t working today.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>02</p><h3 className={styles.h3}>Positioning</h3><p>Nail the message and structure before design starts. Pretty comes second.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>03</p><h3 className={styles.h3}>Design and build</h3><p>Designed around your brand. Built to be fast and accessible.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>04</p><h3 className={styles.h3}>Launch and measure</h3><p>Tracking in place from day one, so you see exactly how visitors use the site.</p></li>
            </ol>
            <div className={styles.callout}>
              <p>
                <strong>Tune-up or custom build?</strong> If your site has good bones, we&apos;ll tell you to
                tune it up, not tear it down. Starting fresh? We build the foundation. Either way, you get a
                straight recommendation, not a sales pitch.
              </p>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="related-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Beyond the homepage</p>
            <h2 id="related-title" className={styles.h2}>Websites Work Best <span>Inside a System</span></h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles.h3}>Landing pages and sales funnels</h3>
                <p>Focused pages for one offer, so ad and email traffic lands somewhere built to convert, not your homepage.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>SEO and AI-search visibility</h3>
                <p>Get found on Google and cited in AI answers. <Link href="/services/seo" className={styles.inlineLink}>Explore SEO, AEO &amp; GEO</Link>.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Content</h3>
                <p>Pages and articles that answer client questions and give visitors a reason to trust you.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Brand strategy and tracking</h3>
                <p>Positioning that makes you the obvious choice in your niche, and tracking that shows what&apos;s actually working.</p>
              </div>
            </div>
            <ol className={styles.boost} aria-label="BOOST365© pillars">
              <li><span>01</span>Branding</li>
              <li className={styles.boostActive}><span>02</span>Optimization</li>
              <li><span>03</span>Outreach</li>
              <li><span>04</span>Sales Funnels</li>
              <li><span>05</span>Tracking</li>
            </ol>
            <p className={styles.p} style={{ marginTop: 24 }}>
              Your website sits in the Optimization pillar of BOOST365©: built to rank, built to convert. See
              it in action in <Link href="/#results">client results</Link>, or browse{' '}
              <Link href="/#services">all services</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.narrow}>
            <p className={styles.kicker}>Straight answers</p>
            <h2 id="faq-title" className={styles.h2}>Website Design <span>FAQ</span></h2>
            <div className={styles.faq}>
              {faqs.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>
            <p className={styles.p} style={{ marginTop: 24 }}>
              Wondering how search is changing? Read <Link href="/blog/zero-click-search">zero-click search</Link>{' '}
              or visit the <Link href="/blog">blog</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <h2 id="cta-title" className={styles.ctaH2}>Ready for a Site That <span>Pulls Its Weight?</span></h2>
          <p>Book a free 30-minute strategy call. We&apos;ll look at your current site, your goals, and whether a tune-up or a custom build makes sense. No pitch deck, no pressure.</p>
          <div className={styles.ctaRow}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book Free Strategy Call
            </a>
            <Link href="/services/seo" className={styles.btnGhost}>See SEO, AEO &amp; GEO</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
