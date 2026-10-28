import Image from 'next/image'
import Link from 'next/link'
import PrivacyChoicesLink from '../../../components/PrivacyChoicesLink'
import styles from '../services.module.css'

const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'
const PAGE_URL = 'https://djsmarketingservices.com/services/website-design'
const TITLE = 'Website Design for Service Businesses | DJS Marketing'
const DESCRIPTION =
  'Website design for service businesses, with clear messaging, mobile-friendly pages, search-ready structure, and straightforward paths to inquiry.'

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

const navItems = [
  { href: '/#services', label: 'All Services' },
  { href: '/services/seo', label: 'SEO & AEO' },
  { href: '/services/website-design', label: 'Website Design' },
  { href: '/blog', label: 'Blog' },
]

const faqs = [
  {
    q: 'How long does a website build take?',
    a: 'It depends on the number of pages, how much content already exists and how quickly decisions and feedback move. We discuss a realistic timeline once scope is clear on the strategy call, rather than quoting one up front.',
  },
  {
    q: 'Is ongoing SEO included with a new website?',
    a: (
      <>
        Not automatically. A good build should be search-ready, with clean structure and crawlable pages,
        but ongoing SEO is a separate scope of work. Anything beyond the build is agreed during the strategy
        call. Learn more on our <Link href="/services/seo">SEO and AI-search</Link> page.
      </>
    ),
  },
  {
    q: 'Can you redesign my existing site instead of starting over?',
    a: 'Sometimes a tune-up is the right move and sometimes a rebuild is. We look at what you have and recommend the approach that fits your goals.',
  },
  {
    q: 'Do you build landing pages and sales funnels too?',
    a: 'Yes. Landing pages and sales funnels are among the services we offer, and they can be planned alongside a website or on their own. Which pieces make sense is part of the scoping conversation.',
  },
  {
    q: 'Will a new website guarantee more leads?',
    a: 'No website can guarantee results. What a well-built site does is remove friction: it explains your business clearly and makes it easy to reach out. Traffic, offer and follow-up all play a role too, which is why we think in systems.',
  },
]

export default function WebsiteDesignPage() {
  return (
    <div className={styles.page}>
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.logoLink} aria-label="DJS Marketing Services home">
            <Image src="/logo-nav.jpg" alt="DJS Marketing Services" width={52} height={52} className={styles.logo} priority />
          </Link>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-current={item.href === '/services/website-design' ? 'page' : undefined}
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

      <main id="main-content">
        {/* HERO */}
        <section className={styles.hero} aria-labelledby="web-title">
          <div className={styles.heroInner}>
            <div>
              <ol className={styles.crumbs} aria-label="Breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li aria-current="page">Website Design</li>
              </ol>
              <p className={styles.eyebrow}>Website Design &amp; Development</p>
              <h1 id="web-title" className={styles.h1}>
                Websites Built to <em>Explain Your Business</em> and Generate Inquiries
              </h1>
              <p className={styles.lede}>
                You are great at what you do. Your website should make that obvious in the first few seconds.
              </p>
              <p className={styles.heroText}>
                We design and develop websites for service professionals that say clearly who you help, why
                you are the right choice and exactly how to get in touch.
              </p>
              <div className={styles.btnRow}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book Free Strategy Call
                </a>
                <a href="#approach" className={styles.btnGhost}>How We Approach It</a>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <p className={styles.panelLabel}>A visitor should know</p>
              <ul className={styles.panelList}>
                <li><span className={styles.panelNum}>01</span><span><strong>What you do</strong>In plain language, without decoding jargon.</span></li>
                <li><span className={styles.panelNum}>02</span><span><strong>Why you</strong>What makes your expertise worth trusting.</span></li>
                <li><span className={styles.panelNum}>03</span><span><strong>What to do next</strong>One clear step toward an inquiry.</span></li>
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
                  Many service businesses have a website that looks fine but does not do much. It describes
                  the business in vague terms, buries the contact details and leaves visitors to figure out the
                  next step themselves.
                </p>
                <p className={styles.p}>
                  <strong>We treat your website as part of a marketing system</strong>, connected to your
                  brand, search visibility, landing pages and tracking.
                </p>
              </div>
              <ul className={styles.checklist}>
                <li><strong>Clear messaging.</strong> Copy structured around what your clients need to know.</li>
                <li><strong>Brand consistency.</strong> A look and voice that match how you show up everywhere else.</li>
                <li><strong>Accessible, mobile-friendly build.</strong> Readable, navigable and usable on any device.</li>
                <li><strong>Search-ready structure.</strong> Logical pages and headings search engines can understand.</li>
                <li><strong>Conversion paths.</strong> Obvious, repeated routes to book or contact you.</li>
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
              Every project starts by understanding your business. Scope, including which pages, features and
              any ongoing work, is agreed together before anything is built.
            </p>
            <ol className={styles.steps}>
              <li className={styles.step}><p className={styles.stepNum}>01</p><h3 className={styles.h3}>Strategy call</h3><p>Your services, clients, goals and what is or is not working today.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>02</p><h3 className={styles.h3}>Positioning</h3><p>Clarify the message and structure before design begins.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>03</p><h3 className={styles.h3}>Design and build</h3><p>Pages designed around your brand and built to be fast and accessible.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>04</p><h3 className={styles.h3}>Launch and measure</h3><p>Tracking in place so you can see how visitors use the site.</p></li>
            </ol>
            <div className={styles.callout}>
              <p>
                <strong>Tune-up or custom build?</strong> If you already have a site, we may recommend
                improving it rather than replacing it. If you are starting fresh, we build the foundation.
                Either way, you get a recommendation, not a template.
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
                <p>Focused pages for a specific offer or campaign, so ad and email traffic lands somewhere built to convert.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>SEO and AI-search visibility</h3>
                <p>Help people find you on Google and in AI-generated answers. <Link href="/services/seo" className={styles.inlineLink}>Explore SEO &amp; AEO</Link>.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Content</h3>
                <p>Useful pages and articles that answer client questions and give visitors a reason to trust you.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Brand strategy and tracking</h3>
                <p>Positioning that makes you the obvious choice, and measurement that shows what is working.</p>
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
              Your website sits in the Optimization pillar of BOOST365©, our marketing-system framework. See
              examples of our work in <Link href="/#results">client results</Link>, or browse{' '}
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
              Thinking about how search is changing? Read <Link href="/blog/zero-click-search">zero-click search</Link>{' '}
              or visit the <Link href="/blog">blog</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <h2 id="cta-title" className={styles.ctaH2}>Ready for a Site That <span>Pulls Its Weight?</span></h2>
          <p>Book a free strategy call. We will talk through your goals, your current site and what a build or tune-up would involve.</p>
          <div className={styles.ctaRow}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book Free Strategy Call
            </a>
            <Link href="/services/seo" className={styles.btnGhost}>SEO &amp; AI Search</Link>
          </div>
        </section>
      </main>

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
