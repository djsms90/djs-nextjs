import HeroBackground from '../../../components/HeroBackground'
import Image from 'next/image'
import Link from 'next/link'
import PrivacyChoicesLink from '../../../components/PrivacyChoicesLink'
import SiteNav from '../../../components/SiteNav'
import { serviceSchemas, JsonLd } from '../../../lib/seo'
import styles from '../services.module.css'

const BOOKING_URL = 'https://meetings-na2.hubspot.com/sweis'
const PAGE_URL = 'https://djsmarketingservices.com/services/seo'
const TITLE = 'San Diego SEO & AI Search Optimization | DJS Marketing'
const DESCRIPTION =
  'SEO, AEO and GEO for service businesses. Get found on Google, get cited by AI, and turn searchers into clients with the BOOST365© system.'

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


const faqs = [
  {
    q: 'How long does SEO take to show results?',
    a: (
      <>
        It depends on the channel and where you are starting from. Bad SEO takes forever. Strategic SEO
        compounds, and every month builds on the last. We set clear benchmarks on day one so you are never
        guessing.
      </>
    ),
    text: 'It depends on the channel and where you are starting from. Bad SEO takes forever. Strategic SEO compounds, and every month builds on the last. We set clear benchmarks on day one so you are never guessing.',
  },
  {
    q: 'Can you guarantee my business will appear in Google AI Overviews or ChatGPT answers?',
    a: (
      <>
        No. And run from anyone who promises one. AI tools decide for themselves which sources to cite, and
        they change constantly. What we control is making your information clear, consistent and genuinely
        useful, which is exactly what these tools draw from. Our guide to{' '}
        <Link href="/blog/ai-overviews">AI Overviews</Link> breaks it down.
      </>
    ),
    text: 'No. And run from anyone who promises one. AI tools decide for themselves which sources to cite, and they change constantly. What we control is making your information clear, consistent and genuinely useful, which is exactly what these tools draw from. Our guide to AI Overviews breaks it down.',
  },
  {
    q: 'Does Google require special schema for AI Overviews or AI Mode?',
    a: (
      <>
        No. Google says AI Overviews and AI Mode have no extra technical requirements beyond normal search.
        Your pages need to be indexed and eligible to show a snippet. Schema helps search engines understand
        your business. It does not buy you a citation. Your content earns that.
      </>
    ),
    text: 'No. Google says AI Overviews and AI Mode have no extra technical requirements beyond normal search. Your pages need to be indexed and eligible to show a snippet. Schema helps search engines understand your business. It does not buy you a citation. Your content earns that.',
  },
  {
    q: 'Is SEO included when you build my website?',
    a: (
      <>
        Every site we build is built with search in mind: clean structure, crawlable pages, clear content.
        Ongoing SEO is its own scope, and we agree on it upfront. Never assumed. See how builds work on
        our <Link href="/services/website-design">website design</Link> page.
      </>
    ),
    text: 'Every site we build is built with search in mind: clean structure, crawlable pages, clear content. Ongoing SEO is its own scope, and we agree on it upfront. Never assumed. See how builds work on our website design page.',
  },
  {
    q: 'Do you only work with San Diego businesses?',
    a: (
      <>
        We are based in San Diego, but location is not the filter. Fit is. We work with service
        professionals in real estate, legal, financial services and other niches. If you have expertise and
        a target audience, we can build the system around it.
      </>
    ),
    text: 'We are based in San Diego, but location is not the filter. Fit is. We work with service professionals in real estate, legal, financial services and other niches. If you have expertise and a target audience, we can build the system around it.',
  },
]


const schemas = serviceSchemas({
  name: 'SEO, AEO & GEO Optimization',
  serviceType: 'Search engine optimization',
  description: DESCRIPTION,
  path: '/services/seo',
  crumb: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'SEO & AEO', path: '/services/seo' },
  ],
  faqs: faqs.map((f) => ({ q: f.q, text: f.text || f.a })),
})

export default function SeoServicePage() {
  return (
    <div className={styles.page}>
      <JsonLd data={schemas} />
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <SiteNav />
      <div className="nav-spacer" aria-hidden="true" />

      <main id="main-content">
        {/* HERO */}
        <section className={styles.hero} aria-labelledby="seo-title">
          <HeroBackground />
          <div className={styles.heroInner}>
            <div>
              <ol className={styles.crumbs} aria-label="Breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li aria-current="page">SEO &amp; AEO</li>
              </ol>
              <p className={styles.eyebrow}>San Diego SEO, AEO &amp; GEO</p>
              <h1 id="seo-title" className={styles.h1}>
                Get Found on Google. <em>Get Cited by AI.</em>
              </h1>
              <p className={styles.lede}>
                Your next client is searching right now. On Google. In ChatGPT. In an AI Overview. The only
                question is whether they find you or your competitor.
              </p>
              <p className={styles.heroText}>
                Ranking is not enough anymore. We build search systems for service professionals: a website
                Google can read, content that answers what your clients actually ask, and a clear path from
                search result to booked call.
              </p>
              <div className={styles.btnRow}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book Free Strategy Call
                </a>
                <a href="#seo-vs-aeo" className={styles.btnGhost}>SEO vs. AEO, Explained</a>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <p className={styles.panelLabel}>What we build</p>
              <ul className={styles.panelList}>
                <li><span className={styles.panelNum}>01</span><span><strong>Get found</strong>A site search engines can crawl, read and trust.</span></li>
                <li><span className={styles.panelNum}>02</span><span><strong>Get cited</strong>Content that answers the question before your competitor does.</span></li>
                <li><span className={styles.panelNum}>03</span><span><strong>Get chosen</strong>One obvious next step from search result to strategy call.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO vs AEO vs GEO */}
        <section id="seo-vs-aeo" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="compare-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>No jargon</p>
            <h2 id="compare-title" className={styles.h2}>
              Search Changed. <span>The Goal Didn&apos;t.</span>
            </h2>
            <p className={styles.p}>
              People still want a trustworthy answer and someone to call. What changed is where they get the
              answer. Three acronyms. One job: make you the obvious choice.
            </p>
            <div className={styles.compare}>
              <div className={styles.compareCol}>
                <p className={styles.compareTag}>SEO</p>
                <p className={styles.compareSub}>Search Engine Optimization</p>
                <p className={styles.compareQ}>Can people find you?</p>
                <p>Getting your pages in front of people searching Google for exactly what you do. The blue links still matter.</p>
              </div>
              <div className={styles.compareCol}>
                <p className={styles.compareTag}>AEO</p>
                <p className={styles.compareSub}>Answer Engine Optimization</p>
                <p className={styles.compareQ}>Do you answer the question?</p>
                <p>Clear, direct answers that Google&apos;s AI features and AI assistants can pull from. Bury the answer in paragraph twelve and you get skipped.</p>
              </div>
              <div className={styles.compareCol}>
                <p className={styles.compareTag}>GEO</p>
                <p className={styles.compareSub}>Generative Engine Optimization</p>
                <p className={styles.compareQ}>Does AI get your business right?</p>
                <p>Consistent, credible information everywhere you show up, so ChatGPT, Gemini and Perplexity describe you accurately. And name you.</p>
              </div>
            </div>
            <div className={styles.callout}>
              <p>
                <strong>Straight talk:</strong> nobody can guarantee you a spot in an AI answer. Anyone who
                promises one is selling you something. What we can do is build the foundation AI tools pull
                from, and SEO is still that foundation. Go deeper: <Link href="/blog/aeo" className={styles.inlineLink}>What is AEO?</Link>{' '}
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
                  Tricks get you penalized. Fundamentals compound. We start with a site search engines can
                  actually access, content that is genuinely useful, and business information that says the
                  same thing everywhere you appear.
                </p>
                <p className={styles.p}>
                  Some businesses need the foundation built. Others need a tune-up. <strong>We figure out
                  which on the strategy call</strong>, so you know exactly what is being done and why. No
                  guesswork.
                </p>
              </div>
              <ul className={styles.checklist}>
                <li><strong>Technical foundation.</strong> Fast pages Google can crawl and understand.</li>
                <li><strong>Content that answers.</strong> Service pages and articles built around the questions your clients ask before they hire.</li>
                <li><strong>Consistent business info.</strong> Who you are, what you do and where you serve. The same everywhere.</li>
                <li><strong>Conversion paths.</strong> Traffic that doesn&apos;t convert is a vanity metric. Every visitor sees an obvious next step.</li>
                <li><strong>Tracking.</strong> Every click, lead and dollar measured. Decisions based on data, not guesses.</li>
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
                <h3 className={styles.h3}>You live on referrals</h3>
                <p>Referrals are great, until they stop. Search puts you in front of people actively looking who have never heard your name.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Your website is vague</h3>
                <p>If a page confuses a person, it confuses Google too. Clarity wins with both.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>AI search has you guessing</h3>
                <p>We show you what changed, what didn&apos;t, and where your effort actually pays off. Start with <Link href="/blog/zero-click-search" className={styles.inlineLink}>zero-click search</Link>.</p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>You want SEO that connects</h3>
                <p>SEO on its own is a task. SEO connected to your website, content, funnels and tracking is a system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOOST365 */}
        <section className={styles.section} aria-labelledby="boost-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Where SEO fits</p>
            <h2 id="boost-title" className={styles.h2}>One Pillar of the <span>BOOST365© System</span></h2>
            <p className={styles.p}>
              SEO, AEO and GEO live in the Optimization pillar of BOOST365©. On its own, visibility is just
              traffic. Connected to your branding, outreach, funnels and tracking, it turns into conversations
              and clients.
            </p>
            <ol className={styles.boost} aria-label="BOOST365© pillars">
              <li><span>01</span>Branding</li>
              <li className={styles.boostActive}><span>02</span>Optimization</li>
              <li><span>03</span>Outreach</li>
              <li><span>04</span>Sales Funnels</li>
              <li><span>05</span>Tracking</li>
            </ol>
            <ol className={styles.steps} aria-label="How we start">
              <li className={styles.step}><p className={styles.stepNum}>01</p><h3 className={styles.h3}>Strategy call</h3><p>30 minutes on your business, your clients and your goals. No pitch deck.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>02</p><h3 className={styles.h3}>Agree on scope</h3><p>We tell you what to focus on first, and why.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>03</p><h3 className={styles.h3}>Build the foundation</h3><p>Fundamentals first. Then content. Then optimization.</p></li>
              <li className={styles.step}><p className={styles.stepNum}>04</p><h3 className={styles.h3}>Measure and compound</h3><p>Tracking shows what&apos;s working. We double down on it.</p></li>
            </ol>
            <p className={styles.p} style={{ marginTop: 28 }}>
              Want proof? 1M+ YouTube views for a probate real estate professional. 90%+ agent retention for
              a national designation program. See the full <Link href="/#results">client results</Link>.
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
                { href: '/blog/aeo', t: 'What is AEO?', d: 'How to become the source AI tools pull from.' },
                { href: '/blog/geo-vs-seo', t: 'GEO vs. SEO', d: 'The new optimization game your competitors don\'t know about.' },
                { href: '/blog/ai-overviews', t: 'Google AI Overviews', d: 'They\'re stealing your clicks. Here\'s how to fight back.' },
                { href: '/blog/zero-click-search', t: 'Zero-Click Search', d: 'How to win when nobody clicks.' },
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
          <h2 id="cta-title" className={styles.ctaH2}>Ready to Be <span>the Answer?</span></h2>
          <p>A free 30-minute strategy call. No pitch deck, no pressure. You&apos;ll walk away with at least one actionable insight, whether we work together or not.</p>
          <div className={styles.ctaRow}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book Free Strategy Call
            </a>
            <Link href="/services/website-design" className={styles.btnGhost}>See Website Design</Link>
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
