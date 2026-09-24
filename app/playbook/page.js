import Link from 'next/link'

export const metadata = {
  title: 'BOOST365 Marketing Playbook: Free Download | DJS Marketing',
  description: 'Download the free BOOST365© Marketing Playbook — the 5-pillar system (Branding, Optimization, Outreach, Sales Funnels, Tracking) used by niche service professionals to build consistent leads, convert prospects, and scale revenue.',
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

export default function PlaybookPage() {
  return (
    <>
      {/* SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation">
        <Link href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height: '48px', width: 'auto' }} /></Link>
        <Link href="/" style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.9)', textDecoration:'none', letterSpacing:'0.5px', textTransform:'uppercase' }}>← Back to Home</Link>
      </nav>

      {/* HERO — DOWNLOAD CTA */}
      <div className="playbook-wrapper">
        <div className="playbook-grid">

          {/* LEFT */}
          <div>
            <p style={{ fontSize:'11px', fontWeight:'900', letterSpacing:'3px', textTransform:'uppercase', color:'#f7e400', marginBottom:'16px' }}>Free Download</p>
            <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(40px,6vw,72px)', color:'white', lineHeight:'1.0', marginBottom:'24px' }}>
              The BOOST365© <span style={{ color:'#f7e400' }}>Marketing Playbook</span>
            </h1>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.8)', lineHeight:'1.7', marginBottom:'32px' }}>
              The 5-pillar system used by niche service professionals to build consistent leads, convert prospects, and scale revenue without doing everything manually.
            </p>
            <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0 }}>
              {pillars.map((p, i) => (
                <li key={i} style={{ display:'flex', gap:'12px', alignItems:'flex-start', marginBottom:'12px', fontSize:'15px', color:'rgba(255,255,255,0.85)' }}>
                  <span style={{ background:'#f7e400', color:'#c20000', width:'24px', height:'24px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'12px', flexShrink:0 }}>{i+1}</span>
                  <span><strong>{p.title}:</strong> {p.short}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)' }}>
              Used by real estate professionals, mortgage experts, attorneys, and niche service businesses across San Diego and beyond.
            </p>
          </div>

          {/* RIGHT — FORM */}
          <div className="playbook-form-card">
            <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'#111', marginBottom:'6px' }}>Get Instant Access</h2>
            <p style={{ fontSize:'14px', color:'#777', marginBottom:'24px' }}>Enter your details below and we will send your free playbook immediately.</p>
            <a
              href="https://q55uc.share-na2.hsforms.com/2ijaRSaieQMaSfVEKZ7_78A"
              target="_blank"
              rel="noopener noreferrer"
              className="playbook-cta"
            >
              Complete Your Free Download →
            </a>
            <p style={{ fontSize:'12px', color:'#777', marginTop:'10px', textAlign:'center' }}>Opens a quick form. Takes 30 seconds.</p>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'16px', fontSize:'13px', color:'#666' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0467b1"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              Your information is secure and will never be shared.
            </div>
          </div>
        </div>
      </div>

      {/* WHAT'S INSIDE */}
      <section className="playbook-section">
        <div className="playbook-content">
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'36px', color:'#111', marginBottom:'8px' }}>What's Inside the Playbook</h2>
          <p style={{ fontSize:'16px', color:'#555', lineHeight:'1.7', marginBottom:'40px', maxWidth:'680px' }}>
            The BOOST365© Marketing Playbook breaks down the five pillars of a complete marketing system. Each pillar builds on the last. Together, they create a compounding engine that grows your visibility, your leads, and your revenue over time.
          </p>

          <div className="playbook-pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="playbook-pillar-card">
                <div style={{ fontSize:'32px', fontWeight:'900', color:'#0467b1', fontFamily:'Bebas Neue, sans-serif', marginBottom:'4px' }}>{p.num}</div>
                <h3 style={{ fontSize:'20px', fontWeight:'800', color:'#111', marginBottom:'8px' }}>{p.title}</h3>
                <p style={{ fontSize:'15px', color:'#555', lineHeight:'1.7' }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="playbook-section" style={{ background:'#f8f9fb' }}>
        <div className="playbook-content">
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'36px', color:'#111', marginBottom:'8px' }}>Who This Playbook Is For</h2>
          <p style={{ fontSize:'16px', color:'#555', lineHeight:'1.7', marginBottom:'32px', maxWidth:'680px' }}>
            The BOOST365© system is built for niche service professionals — people with real expertise who need a marketing operation that matches the quality of their work.
          </p>
          <div className="playbook-audience-grid">
            {[
              { role: 'Real Estate Professionals', desc: 'Agents, brokers, and teams who need consistent listing leads and buyer pipeline beyond referrals.' },
              { role: 'Mortgage & Financial Services', desc: 'Loan officers and financial advisors who need to generate their own leads instead of waiting for partner referrals.' },
              { role: 'Attorneys & Legal Professionals', desc: 'Law firms and solo practitioners building authority in a specific practice area and geographic market.' },
              { role: 'Local Service Businesses', desc: 'Any niche service business — consultants, coaches, medical practices, trades — that depends on local visibility and trust.' },
            ].map((a, i) => (
              <div key={i} style={{ padding:'24px', background:'white', borderRadius:'8px', border:'1px solid #e0e8f0' }}>
                <h3 style={{ fontSize:'17px', fontWeight:'800', color:'#0467b1', marginBottom:'8px' }}>{a.role}</h3>
                <p style={{ fontSize:'14px', color:'#555', lineHeight:'1.6' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SYSTEMS BEAT TACTICS */}
      <section className="playbook-section">
        <div className="playbook-content">
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'36px', color:'#111', marginBottom:'8px' }}>Why Systems Beat Tactics</h2>
          <div style={{ maxWidth:'680px', fontSize:'16px', color:'#555', lineHeight:'1.8' }}>
            <p style={{ marginBottom:'16px' }}>
              One blog post does not build a brand. One ad campaign does not create a pipeline. One social media push does not compound into revenue. Tactics in isolation produce spikes that fade. Systems produce results that build on themselves.
            </p>
            <p style={{ marginBottom:'16px' }}>
              The BOOST365© Playbook exists because most niche service professionals are doing some marketing, but none of it connects. Their website does not talk to their ads. Their ads do not feed a funnel. Their funnel does not get tracked. They spend money and time without knowing what is working.
            </p>
            <p>
              This playbook gives you the framework to connect every piece — branding to optimization to outreach to funnels to tracking — so each dollar and hour you invest compounds instead of evaporating.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="playbook-section" style={{ background:'#f8f9fb' }}>
        <div className="playbook-content">
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'36px', color:'#111', marginBottom:'32px' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth:'720px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom:'24px', paddingBottom:'24px', borderBottom: i < faqs.length - 1 ? '1px solid #e0e8f0' : 'none' }}>
                <h3 style={{ fontSize:'17px', fontWeight:'700', color:'#111', marginBottom:'8px' }}>{faq.q}</h3>
                <p style={{ fontSize:'15px', color:'#555', lineHeight:'1.7' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="playbook-section" style={{ background:'#0467b1', textAlign:'center' }}>
        <div className="playbook-content">
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'36px', color:'white', marginBottom:'12px' }}>Ready to Build a System That Compounds?</h2>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.8)', marginBottom:'24px', maxWidth:'560px', margin:'0 auto 24px' }}>
            Download the free BOOST365© Playbook and see the framework behind the results. Or book a strategy call and we will show you how it applies to your business.
          </p>
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
            <a
              href="https://q55uc.share-na2.hsforms.com/2ijaRSaieQMaSfVEKZ7_78A"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:'inline-block', background:'#f7e400', color:'#c20000', fontSize:'13px', fontWeight:'900', letterSpacing:'1px', textTransform:'uppercase', padding:'16px 32px', borderRadius:'6px', textDecoration:'none' }}
            >
              Download the Playbook →
            </a>
            <a
              href="https://meetings-na2.hubspot.com/sweis"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:'inline-block', background:'transparent', color:'white', fontSize:'13px', fontWeight:'900', letterSpacing:'1px', textTransform:'uppercase', padding:'16px 32px', borderRadius:'6px', textDecoration:'none', border:'2px solid rgba(255,255,255,0.4)' }}
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* AUTHOR / CREDIBILITY */}
      <section className="playbook-section">
        <div className="playbook-content" style={{ maxWidth:'680px' }}>
          <p style={{ fontSize:'13px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', color:'#0467b1', marginBottom:'12px' }}>About the Author</p>
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'#111', marginBottom:'12px' }}>Danny Sweis</h2>
          <p style={{ fontSize:'15px', color:'#555', lineHeight:'1.7', marginBottom:'16px' }}>
            Founder and CEO of <Link href="/" style={{ color:'#0467b1', textDecoration:'none', fontWeight:'600' }}>DJS Marketing Services</Link>, a San Diego-based full-stack digital marketing agency. Danny builds done-for-you marketing systems for niche service professionals — real estate, legal, mortgage, and local service businesses — using the BOOST365© framework.
          </p>
          <p style={{ fontSize:'15px', color:'#555', lineHeight:'1.7' }}>
            DJS Marketing Services handles everything from brand strategy and SEO to paid advertising, sales funnels, and AI-powered content systems. The BOOST365© Playbook is the same framework we deploy with every client.
          </p>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="playbook-section" style={{ background:'#f8f9fb' }}>
        <div className="playbook-content">
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'#111', marginBottom:'24px' }}>Related Reading</h2>
          <div className="playbook-links-grid">
            <Link href="/blog/aeo" style={{ display:'block', padding:'20px', background:'white', borderRadius:'8px', border:'1px solid #e0e8f0', textDecoration:'none' }}>
              <p style={{ fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'1px', color:'#0467b1', marginBottom:'6px' }}>Blog</p>
              <p style={{ fontSize:'16px', fontWeight:'700', color:'#111', marginBottom:'4px' }}>How to Actually Show Up in AI-Powered Search Results</p>
              <p style={{ fontSize:'13px', color:'#777' }}>The Optimization pillar in action — AEO strategy for niche businesses.</p>
            </Link>
            <Link href="/blog/local-seo" style={{ display:'block', padding:'20px', background:'white', borderRadius:'8px', border:'1px solid #e0e8f0', textDecoration:'none' }}>
              <p style={{ fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'1px', color:'#0467b1', marginBottom:'6px' }}>Blog</p>
              <p style={{ fontSize:'16px', fontWeight:'700', color:'#111', marginBottom:'4px' }}>The Local SEO Playbook for Niche Service Professionals</p>
              <p style={{ fontSize:'13px', color:'#777' }}>How local visibility drives the Outreach pillar for service businesses.</p>
            </Link>
            <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" style={{ display:'block', padding:'20px', background:'white', borderRadius:'8px', border:'1px solid #e0e8f0', textDecoration:'none' }}>
              <p style={{ fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'1px', color:'#0467b1', marginBottom:'6px' }}>Next Step</p>
              <p style={{ fontSize:'16px', fontWeight:'700', color:'#111', marginBottom:'4px' }}>Book a Free 30-Minute Strategy Call</p>
              <p style={{ fontSize:'13px', color:'#777' }}>No pitch, no pressure. Walk away with at least one actionable insight.</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="playbook-footer">
        <Link href="/"><img src="/logo-footer.jpg" alt="DJS Marketing Services" style={{ height:'40px', width:'auto' }} /></Link>
        <p style={{ fontSize:'12px', color:'#777' }}>
          © {new Date().getFullYear()}{' '}DJS Marketing Services. All Rights Reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" style={{ color:'#0467b1', textDecoration:'none' }}>Privacy Policy</Link>
          &nbsp;|&nbsp;
          <Link href="/terms" style={{ color:'#0467b1', textDecoration:'none' }}>Terms & Conditions</Link>
        </p>
      </footer>
    </>
  )
}
