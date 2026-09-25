import Link from 'next/link'
import PrivacyChoicesLink from '../../components/PrivacyChoicesLink'

export const metadata = {
  title: 'BOOST365 Marketing Playbook: Free Download | DJS Marketing',
  description: 'Free BOOST365© Marketing Playbook: the 5-pillar system niche service pros use to generate consistent leads, convert prospects, and scale revenue.',
  alternates: { canonical: 'https://djsmarketingservices.com/playbook' },
  keywords: 'BOOST365 playbook, marketing playbook, free marketing framework, 5-pillar marketing system, lead generation system, niche service marketing, DJS Marketing Services',
  openGraph: {
    type: 'website',
    url: 'https://djsmarketingservices.com/playbook',
    title: 'BOOST365© Marketing Playbook — Free Download',
    description: 'The 5-pillar system used by niche service professionals to build consistent leads, convert prospects, and scale revenue.',
    images: [{ url: 'https://djsmarketingservices.com/og-image-v2.jpg', width: 1200, height: 630 }],
    siteName: 'DJS Marketing Services',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOOST365© Marketing Playbook — Free Download',
    description: 'The 5-pillar system for niche service professionals. Build consistent leads and scale revenue.',
    images: ['https://djsmarketingservices.com/og-image-v2.jpg'],
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://djsmarketingservices.com/playbook/#webpage',
  url: 'https://djsmarketingservices.com/playbook',
  name: 'BOOST365© Marketing Playbook — Free Download',
  description: 'Download the free BOOST365© Marketing Playbook — the 5-pillar system used by niche service professionals to build consistent leads, convert prospects, and scale revenue.',
  isPartOf: { '@id': 'https://djsmarketingservices.com/#website' },
  about: {
    '@type': 'CreativeWork',
    name: 'BOOST365© Marketing Playbook',
    author: { '@id': 'https://djsmarketingservices.com/#danny-sweis' },
    publisher: { '@id': 'https://djsmarketingservices.com/#organization' },
    description: 'A free marketing framework covering five pillars: Branding, Optimization, Outreach, Sales Funnels, and Tracking. Designed for niche service professionals including real estate agents, mortgage originators, attorneys, and local service businesses.',
  },
  breadcrumb: { '@id': 'https://djsmarketingservices.com/playbook/#breadcrumb' },
  publisher: { '@id': 'https://djsmarketingservices.com/#organization' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://djsmarketingservices.com/playbook/#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://djsmarketingservices.com' },
    { '@type': 'ListItem', position: 2, name: 'BOOST365© Playbook', item: 'https://djsmarketingservices.com/playbook' },
  ],
}

const pillars = [
  {
    num: '01',
    title: 'Branding',
    short: 'Own your niche, establish authority',
    detail: 'Clarify your positioning so your ideal client instantly understands who you serve, what you do, and why you are the obvious choice. Consistent brand identity across your website, social platforms, and every client touchpoint.',
  },
  {
    num: '02',
    title: 'Optimization',
    short: 'Convert traffic into leads',
    detail: 'Your website and search presence built to rank and built to convert. SEO, AEO (Answer Engine Optimization), site speed, mobile experience, and conversion rate optimization working together so traffic turns into qualified leads.',
  },
  {
    num: '03',
    title: 'Outreach',
    short: 'Attract the right audience at scale',
    detail: 'Precision-targeted advertising and content distribution across every platform your ideal client uses — Google, Meta, LinkedIn, YouTube, TikTok. Paid and organic working together, not in silos.',
  },
  {
    num: '04',
    title: 'Sales Funnels',
    short: 'Automate your lead-to-client pipeline',
    detail: 'Landing pages, email sequences, retargeting, and automation that move prospects from first touch to paying client. No more manual follow-up. No more leads falling through the cracks.',
  },
  {
    num: '05',
    title: 'Tracking',
    short: 'Know exactly what is working and why',
    detail: 'Every click, lead, and dollar measured. Analytics dashboards, conversion tracking, and attribution so you know which channels drive revenue and where to double down.',
  },
]

const faqs = [
  {
    q: 'What is the BOOST365© Marketing Playbook?',
    a: 'The BOOST365© Marketing Playbook is a free, actionable marketing framework created by Danny Sweis at DJS Marketing Services. It breaks down the five pillars every niche service business needs to generate leads consistently: Branding, Optimization, Outreach, Sales Funnels, and Tracking. It is the same system we deploy with every client.',
  },
  {
    q: 'Who is the playbook designed for?',
    a: 'The playbook is built for niche service professionals — real estate agents, mortgage originators, attorneys, financial advisors, and local service businesses who need a marketing system that generates leads without depending entirely on referrals or one-off tactics.',
  },
  {
    q: 'Is the playbook actually free?',
    a: 'Yes. There is no charge, no credit card required, and no hidden upsell inside the playbook itself. You enter your name and email, and we send it immediately. You will receive occasional marketing emails from DJS Marketing Services, which you can opt out of at any time.',
  },
  {
    q: 'How is this different from other marketing guides?',
    a: 'Most marketing guides give you a list of tactics. The BOOST365© Playbook gives you a system — five interconnected pillars that compound over time. It is built from what we actually implement with paying clients, not theoretical advice.',
  },
  {
    q: 'What happens after I download the playbook?',
    a: 'You will receive the playbook immediately via email. If you want help implementing any of the five pillars, you can book a free 30-minute strategy call with our team. No pitch, no pressure — just clarity on what your business needs.',
  },
  {
    q: 'Can I implement the playbook on my own?',
    a: 'Yes. The playbook is designed to be actionable whether you implement it yourself or bring in a team. Each pillar includes clear steps you can start executing immediately. For businesses that want done-for-you execution, DJS Marketing Services offers full implementation through our retainer packages.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const audiences = [
  { role: 'Real Estate Professionals', desc: 'Agents, brokers, and teams who need consistent listing leads and buyer pipeline beyond referrals.' },
  { role: 'Mortgage & Financial Services', desc: 'Loan officers and financial advisors who need to generate their own leads instead of waiting for partner referrals.' },
  { role: 'Attorneys & Legal Professionals', desc: 'Law firms and solo practitioners building authority in a specific practice area and geographic market.' },
  { role: 'Local Service Businesses', desc: 'Any niche service business — consultants, coaches, medical practices, trades — that depends on local visibility and trust.' },
]

export default function PlaybookPage() {
  return (
    <>
      {/* SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <a href="#main-content" className="skip-nav">Skip to main content</a>

      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation">
        <Link href="/" className="pb-logo-link"><img src="/logo-nav.jpg" alt="DJS Marketing Services home" /></Link>
        <Link href="/" className="pb-back">← Back to Home</Link>
      </nav>

      <main id="main-content">
        {/* HERO — DOWNLOAD CTA */}
        <div className="playbook-wrapper">
          <div className="playbook-grid">

            {/* LEFT — on mobile this column flattens so the CTA card sits under the intro */}
            <div className="pb-hero-copy">
              <p className="pb-eyebrow">Free Download</p>
              <h1 className="pb-h1">
                The BOOST365© <span>Marketing Playbook</span>
              </h1>
              <p className="pb-lead">
                The 5-pillar system used by niche service professionals to build consistent leads, convert prospects, and scale revenue without doing everything manually.
              </p>
              <ul className="pb-pillar-list">
                {pillars.map((p, i) => (
                  <li key={i}>
                    <span className="pb-pillar-num" aria-hidden="true">{i + 1}</span>
                    <span><strong>{p.title}:</strong> {p.short}</span>
                  </li>
                ))}
              </ul>
              <p className="pb-proof">
                Used by real estate professionals, mortgage experts, attorneys, and niche service businesses across San Diego and beyond.
              </p>
            </div>

            {/* RIGHT — FORM */}
            <div className="playbook-form-card">
              <h2 className="pb-card-title">Get Instant Access</h2>
              <p className="pb-card-sub">Enter your details and we will send your free playbook immediately.</p>
              <a
                href="https://q55uc.share-na2.hsforms.com/2ijaRSaieQMaSfVEKZ7_78A"
                target="_blank"
                rel="noopener noreferrer"
                className="playbook-cta"
              >
                Complete Your Free Download{"\u00a0"}→
              </a>
              <p className="pb-card-note">Opens a quick form. Takes 30 seconds.</p>
              <div className="pb-secure">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0467b1" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                Your information is secure and will never be shared.
              </div>
            </div>
          </div>
        </div>

        {/* WHAT'S INSIDE */}
        <section className="playbook-section">
          <div className="playbook-content">
            <h2 className="pb-h2">What's Inside the Playbook</h2>
            <p className="pb-intro">
              The BOOST365© Marketing Playbook breaks down the five pillars of a complete marketing system. Each pillar builds on the last. Together, they create a compounding engine that grows your visibility, your leads, and your revenue over time.
            </p>
            <div className="playbook-pillars-grid">
              {pillars.map((p, i) => (
                <div key={i} className="playbook-pillar-card">
                  <div className="pb-pillar-card-num" aria-hidden="true">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="playbook-section pb-alt">
          <div className="playbook-content">
            <h2 className="pb-h2">Who This Playbook Is For</h2>
            <p className="pb-intro">
              The BOOST365© system is built for niche service professionals — people with real expertise who need a marketing operation that matches the quality of their work.
            </p>
            <div className="playbook-audience-grid">
              {audiences.map((a, i) => (
                <div key={i} className="pb-audience-card">
                  <h3>{a.role}</h3>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SYSTEMS BEAT TACTICS */}
        <section className="playbook-section">
          <div className="playbook-content">
            <h2 className="pb-h2">Why Systems Beat Tactics</h2>
            <div className="pb-prose">
              <p>
                One blog post does not build a brand. One ad campaign does not create a pipeline. One social media push does not compound into revenue. Tactics in isolation produce spikes that fade. Systems produce results that build on themselves.
              </p>
              <p>
                The BOOST365© Playbook exists because most niche service professionals are doing some marketing, but none of it connects. Their website does not talk to their ads. Their ads do not feed a funnel. Their funnel does not get tracked. They spend money and time without knowing what is working.
              </p>
              <p>
                This playbook gives you the framework to connect every piece — branding to optimization to outreach to funnels to tracking — so each dollar and hour you invest compounds instead of evaporating.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — native accordion; answers stay in the HTML for search + AI crawlers */}
        <section className="playbook-section pb-alt">
          <div className="playbook-content">
            <h2 className="pb-h2">Frequently Asked Questions</h2>
            <div className="pb-faq">
              {faqs.map((faq, i) => (
                <details key={i}>
                  <summary><h3>{faq.q}</h3></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="playbook-section pb-cta-band">
          <div className="playbook-content">
            <h2 className="pb-h2">Ready to Build a System That Compounds?</h2>
            <p className="pb-cta-band-text">
              Download the free BOOST365© Playbook and see the framework behind the results. Or book a strategy call and we will show you how it applies to your business.
            </p>
            <div className="pb-btn-row">
              <a href="https://q55uc.share-na2.hsforms.com/2ijaRSaieQMaSfVEKZ7_78A" target="_blank" rel="noopener noreferrer" className="pb-btn pb-btn-gold">
                Download the Playbook{"\u00a0"}→
              </a>
              <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="pb-btn pb-btn-ghost">
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* AUTHOR / CREDIBILITY */}
        <section className="playbook-section">
          <div className="playbook-content pb-narrow pb-author">
            <p className="pb-kicker">About the Author</p>
            <h2 className="pb-h2">Danny Sweis</h2>
            <p>
              Founder and CEO of <Link href="/">DJS Marketing Services</Link>, a San Diego-based full-stack digital marketing agency. Danny builds done-for-you marketing systems for niche service professionals — real estate, legal, mortgage, and local service businesses — using the BOOST365© framework.
            </p>
            <p>
              DJS Marketing Services handles everything from brand strategy and SEO to paid advertising, sales funnels, and AI-powered content systems. The BOOST365© Playbook is the same framework we deploy with every client.
            </p>
          </div>
        </section>

        {/* RELATED CONTENT */}
        <section className="playbook-section pb-alt">
          <div className="playbook-content">
            <h2 className="pb-h2 pb-h2-sm">Related Reading</h2>
            <div className="playbook-links-grid">
              <Link href="/blog/aeo" className="pb-link-card">
                <p className="pb-link-tag">Blog</p>
                <p className="pb-link-title">How to Actually Show Up in AI-Powered Search Results</p>
                <p className="pb-link-desc">The Optimization pillar in action — AEO strategy for niche businesses.</p>
              </Link>
              <Link href="/blog/local-seo" className="pb-link-card">
                <p className="pb-link-tag">Blog</p>
                <p className="pb-link-title">The Local SEO Playbook for Niche Service Professionals</p>
                <p className="pb-link-desc">How local visibility drives the Outreach pillar for service businesses.</p>
              </Link>
              <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="pb-link-card">
                <p className="pb-link-tag">Next Step</p>
                <p className="pb-link-title">Book a Free 30-Minute Strategy Call</p>
                <p className="pb-link-desc">No pitch, no pressure. Walk away with at least one actionable insight.</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="playbook-footer">
        <Link href="/" className="pb-logo-link"><img src="/logo-footer.jpg" alt="DJS Marketing Services home" className="pb-footer-logo" /></Link>
        <div className="pb-footer-meta">
          <span>© {new Date().getFullYear()} DJS Marketing Services. All Rights Reserved.</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <PrivacyChoicesLink className="privacy-choices-link pb-privacy-choices" />
        </div>
      </footer>
    </>
  )
}
