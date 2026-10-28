import Image from 'next/image'
import Link from 'next/link'
import PrivacyChoicesLink from '../../../components/PrivacyChoicesLink'
import styles from '../services.module.css'

const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'
const PAGE_URL = 'https://djsmarketingservices.com/services/seo'
const TITLE = 'San Diego SEO & AI Search Optimization | DJS Marketing'
const DESCRIPTION =
  'SEO and AI-search optimization (AEO/GEO) for service businesses. Clear content, accessible websites, and a practical plan scoped to your goals.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services/seo' },
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
    q: 'How long does SEO take to show results?',
    a: (
      <>
        There is no fixed timeline. It depends on your starting point, your market, how competitive the
        searches are and how consistently work is done. Search engines also need time to discover and
        re-evaluate changes. SEO is generally a longer-term channel than paid ads, so we talk through
        realistic expectations for your situation on the strategy call rather than promising a date.
      </>
    ),
  },
  {
    q: 'Can you guarantee my business will appear in Google AI Overviews or ChatGPT answers?',
    a: (
      <>
        No. Agencies do not control which sources AI systems cite, and those systems change often. What we can do
        is make your information clear, consistent and genuinely useful, which is the kind of content these
        tools tend to draw from. Our guide to <Link href="/blog/ai-overviews">AI Overviews</Link> explains
        how they work.
      </>
    ),
  },
  {
    q: 'Does Google require special schema for AI Overviews or AI Mode?',
    a: (
      <>
        No. Google says there are no additional technical requirements beyond its normal search
        requirements. Supporting pages must be indexed and eligible to appear with a snippet.
        Relevant structured data can help describe a page, but does not guarantee AI visibility.
        Other AI tools have their own requirements.
      </>
    ),
  },
  {
    q: 'Is SEO included when you build my website?',
    a: (
      <>
        A new site should be built with search in mind: sensible structure, crawlable pages and clear
        content. Ongoing SEO is a separate scope of work. What is included in any engagement is agreed on
        the strategy call, not assumed. See our{' '}
        <Link href="/services/website-design">website design</Link> page for how builds work.
      </>
    ),
  },
  {
    q: 'Do you only work with San Diego businesses?',
    a: (
      <>
        We are based in San Diego and work with service professionals. Whether we are a fit for your market
        and goals is one of the first things we figure out together on the call.
      </>
    ),
  },
]

export default function SeoServicePage() {
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
                  aria-current={item.href === '/services/seo' ? 'page' : undefined}
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
        <section className={styles.hero} aria-labelledby="seo-title">
          <div className={styles.heroInner}>
            <div>
              <ol className={styles.crumbs} aria-label="Breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li aria-current="page">SEO &amp; AEO</li>
              </ol>
              <p className={styles.eyebrow}>San Diego SEO &amp; AEO</p>
              <h1 id="seo-title" className={styles.h1}>
                SEO and <em>AI-Search Optimization</em> for Service Businesses
              </h1>
              <p className={styles.lede}>
                Your next client might search on Google, or ask an AI assistant. Either way, your business
                should be easy to find and easy to understand.
              </p>
              <p className={styles.heroText}>
                We help service professionals build search visibility on a solid foundation: a technically
                accessible website, content that answers real questions, and a clear path from search result
                to inquiry.
              </p>
              <div className={styles.btnRow}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book Free Strategy Call
                </a>
                <a href="#seo-vs-aeo" className={styles.btnGhost}>SEO vs. AEO, Explained</a>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <p className={styles.panelLabel}>What we focus on</p>
              <ul className={styles.panelList}>
                <li><span className={styles.panelNum}>01</span><span><strong>Be findable</strong>Pages search engines can crawl and understand.</span></li>
                <li><span className={styles.panelNum}>02</span><span><strong>Be useful</strong>Content that answers what clients actually ask.</span></li>
                <li><span className={styles.panelNum}>03</span><span><strong>Be chosen</strong>Clear next steps from search to inquiry.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO vs AEO vs GEO */}
        <section id="seo-vs-aeo" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="compare-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Plain-language definitions</p>
            <h2 id="compare-title" className={styles.h2}>
              Search Changed. <span>The Goal Didn&apos;t.</span>
            </h2>
            <p className={styles.p}>
              People still want a trustworthy answer and someone to call. What changed is where they get that
              answer. These three terms describe the same job from different angles.
            </p>
            <div className={styles.compare}>
              <div className={styles.compareCol}>
                <p className={styles.compareTag}>SEO</p>
                <p className={styles.compareSub}>Search Engine Optimization</p>
                <p className={styles.compareQ}>Can people find you in search results?</p>
                <p>Helping your pages show up in Google and other search engines when someone looks for what you do.</p>
              </div>
              <div className={styles.compareCol}>
                <p className={styles.compareTag}>AEO</p>
                <p className={styles.compareSub}>Answer Engine Optimization</p>
                <p className={styles.compareQ}>Does your content answer the question directly?</p>
                <p>Writing clear, specific answers that search features and assistants can understand and reference.</p>
              </div>
              <div className={styles.compareCol}>
                <p className={styles.compareTag}>GEO</p>
                <p className={styles.compareSub}>Generative Engine Optimization</p>
                <p className={styles.compareQ}>Is your business described accurately in AI-generated answers?</p>
                <p>Making your expertise and business details consistent so AI tools have reliable information to work from.</p>
              </div>
            </div>
            <div className={styles.callout}>
              <p>
                <strong>An honest note:</strong> no one can guarantee placement in AI-generated answers. These
                systems decide on their own which sources to use. Good SEO fundamentals remain the base that
                AEO and GEO build on. Read more in <Link href="/blog/aeo" className={styles.inlineLink}>What is AEO?</Link>{' '}
                and <Link href="/blog/geo-vs-seo" className={styles.inlineLink}>GEO vs. SEO</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT THE WORK COVERS */}
        <section className={styles.section} aria-labelledby="work-title">
          <div className={styles.inner}>
            <div className={styles.split}>
              <div>
                <p className={styles.kicker}>The work</p>
                <h2 id="work-title" className={styles.h2}>
                  Built on Fundamentals, <span>Not Tricks.</span>
                </h2>
                <p className={styles.p}>
                  Start with a site search engines can access, genuinely useful content, and accurate
                  information wherever your business appears. These are practical foundations, not a
                  guarantee of how any particular search or AI system will rank or cite you.
                </p>
                <p className={styles.p}>
                  The exact focus depends on where you are today. Some businesses need a foundation; others
                  need a tune-up. <strong>We agree on scope together on the strategy call</strong>, so you
                  know what is being done and why.
                </p>
              </div>
              <ul className={styles.checklist}>
                <li><strong>Technical accessibility.</strong> Pages that load, can be crawled and are organized logically.</li>
                <li><strong>Useful content.</strong> Service pages and articles that answer the questions your clients ask before they hire.</li>
                <li><strong>Clear business information.</strong> Who you are, what you do and where you serve, stated consistently.</li>
                <li><strong>Conversion paths.</strong> Visitors who find you should see an obvious next step.</li>
                <li><strong>Tracking.</strong> Measurement so decisions are based on what is happening, not guesses.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="fit-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Is this a fit?</p>
            <h2 id="fit-title" className={styles.h2}>For Experts Whose <span>Marketing Undersells Them</span></h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles.h3}>You rely mostly on referrals</h3>
                <p>Referrals are valuable, but search can bring in people who do not know you yet and are actively looking.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Your site does not explain what you do</h3>
                <p>If a page is vague to a person, it is usually vague to a search engine too. Clarity helps both.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>You are unsure how AI search affects you</h3>
                <p>We explain what changed, what has not, and where it makes sense to focus. See our piece on <Link href="/blog/zero-click-search" className={styles.inlineLink}>zero-click search</Link>.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>You want SEO connected to everything else</h3>
                <p>Search works best alongside your website, content, landing pages and tracking, not as an isolated task.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOOST365 */}
        <section className={styles.section} aria-labelledby="boost-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Where SEO fits</p>
            <h2 id="boost-title" className={styles.h2}>One Pillar of the <span>BOOST365 System</span></h2>
            <p className={styles.p}>
              SEO and AEO live in the Optimization pillar of BOOST365, our marketing-system framework. It is
              connected to your branding, outreach, funnels and tracking so visibility turns into conversations.
            </p>
            <ol className={styles.boost} aria-label="BOOST365 pillars">
              <li><span>01</span>Branding</li>
              <li className={styles.boostActive}><span>02</span>Optimization</li>
              <li><span>03</span>Outreach</li>
              <li><span>04</span>Sales Funnels</li>
              <li><span>05</span>Tracking</li>
            </ol>
            <ol className={styles.steps} aria-label="How we start">
              <li className={styles.step}><p className={styles.stepNum}>01</p><h3 className={styles.h3}>Strategy call</h3><p>We learn about your business, clients and goals.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>02</p><h3 className={styles.h3}>Agree on scope</h3><p>We recommend what to focus on and agree on it together.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>03</p><h3 className={styles.h3}>Do the work</h3><p>Fundamentals first, then content and improvements.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>04</p><h3 className={styles.h3}>Measure and adjust</h3><p>Tracking shows what is working so we can refine.</p></li>
            </ol>
            <p className={styles.p} style={{ marginTop: 28 }}>
              Want to see the kind of work we do? Visit <Link href="/#results">client results</Link> on our homepage.
            </p>
          </div>
        </section>

        {/* READING */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="reads-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Learn before you hire</p>
            <h2 id="reads-title" className={styles.h2}>Guides From <span>Our Blog</span></h2>
            <ul className={styles.reads}>
              {[
                { href: '/blog/aeo', t: 'What is AEO?', d: 'Answer Engine Optimization in plain terms.' },
                { href: '/blog/geo-vs-seo', t: 'GEO vs. SEO', d: 'How generative search relates to traditional SEO.' },
                { href: '/blog/ai-overviews', t: 'Google AI Overviews', d: 'What they are and what they mean for businesses.' },
                { href: '/blog/zero-click-search', t: 'Zero-Click Search', d: 'Why some searches end without a click, and how to respond.' },
              ].map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className={styles.readLink}>
                    <span className={styles.readTitle}>{r.t}</span>
                    <span className={styles.readDesc}>{r.d}</span>
                    <span className={styles.readMore} aria-hidden="true">Read the guide</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.narrow}>
            <p className={styles.kicker}>Straight answers</p>
            <h2 id="faq-title" className={styles.h2}>SEO &amp; AI Search <span>FAQ</span></h2>
            <div className={styles.faq}>
              {faqs.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <h2 id="cta-title" className={styles.ctaH2}>Let&apos;s Talk About <span>Your Search Presence.</span></h2>
          <p>A free strategy call to look at where you are, what matters for your business, and whether we are the right fit.</p>
          <div className={styles.ctaRow}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book Free Strategy Call
            </a>
            <Link href="/services/website-design" className={styles.btnGhost}>Website Design</Link>
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
