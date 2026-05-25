import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero" id="main-content" role="main">
        <div className="hero-bg" />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">San Diego Digital Marketing Agency</div>
            <h1>Turn Your Expertise Into <span>Leads, Clients</span> And Revenue.</h1>
            <p className="hero-epiphany">
              Most professional service providers are the best at what they do, but their marketing doesn't show it.
            </p>
            <p className="hero-hook">
              Most businesses don't have a marketing problem. They have a system problem. And we fix systems.
            </p>
            <div className="hero-btns">
              <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Free Strategy Call
              </a>
              <Link href="#boost" className="btn-secondary">
                See Our BOOST365 Playbook
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-stat">
              <div className="stat-num">1M+</div>
              <div className="stat-label">YouTube Views Generated for Clients</div>
            </div>
            <div className="hero-stat">
              <div className="stat-num">90%+</div>
              <div className="stat-label">Agent Retention for National Designation Program</div>
            </div>
            <div className="hero-stat">
              <div className="stat-num">5</div>
              <div className="stat-label">Pillars in Our BOOST365© System</div>
            </div>
          </div>
        </div>
      </section>

      {/* MYTH BUSTERS */}
      <section className="myths">
        <div className="myths-inner">
          <h2>Marketing Myths That Are Costing You Clients</h2>
          <div className="myths-grid">
            {[
              { myth: 'Myth #1', title: '"I just need more followers."', body: 'Followers don\'t pay bills. Systems do. A 500-follower account with a real funnel beats a 50,000-follower account with no strategy.' },
              { myth: 'Myth #2', title: '"SEO takes too long."', body: 'Bad SEO takes forever. Strategic SEO with AEO optimization starts showing results in 60–90 days when done right.' },
              { myth: 'Myth #3', title: '"I tried ads. They didn\'t work."', body: 'Ads don\'t fail. Ad strategy fails. Most businesses run ads without proper targeting, landing pages, or follow-up systems.' },
              { myth: 'Myth #4', title: '"My referrals are enough."', body: 'Referrals are great — until they stop. A real marketing system creates consistent, predictable lead flow independent of your network.' },
            ].map((m, i) => (
              <div key={i} className="myth-card">
                <div className="myth-label">{m.myth}</div>
                <h4>{m.title}</h4>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted">
        <div className="trusted-inner">
          <div className="trusted-label">Trusted By</div>
          <div className="logo-row">
            {[
              { src: '/logo-ilumni.jpg', alt: 'The Ilumni Institute' },
              { src: '/logo-cdre.jpg', alt: 'CDRE' },
              { src: '/logo-spring-klein.jpg', alt: 'Spring Klein' },
              { src: '/logo-barracudas.jpg', alt: 'Barracudas' },
              { src: '/logo-wallatees.jpg', alt: 'Wallatees' },
              { src: '/logo-tbg.jpg', alt: 'The Benjamin Group' },
              { src: '/logo-unity-bar.jpg', alt: 'Unity Bar San Diego' },
              { src: '/logo-aaba.jpg', alt: 'Arab American Bar Association San Diego' },
              { src: '/logo-wallasigns.jpg', alt: 'WallaSigns' },
            ].map((l, i) => (
              <div key={i} className="logo-pill">
                <Image src={l.src} alt={l.alt} width={80} height={36} style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AS FEATURED IN */}
      <section className="featured-in">
        <div className="featured-inner">
          <div className="featured-label">As Featured In & Recognized By</div>
          <div className="featured-row">
            <a href="https://sdvoyager.com/interview/hidden-gems-meet-danny-sweis-of-djs-marketing-services/" target="_blank" rel="noopener noreferrer" className="featured-card">
              <div className="fc-source">SD Voyager, San Diego</div>
              <div className="fc-title">"Hidden Gems: Meet Danny Sweis of DJS Marketing Services"</div>
              <div className="fc-desc">"We don't just offer marketing services — we engineer entire marketing ecosystems that actually work together." Featured in SD Voyager's Hidden Gems series.</div>
              <div className="fc-link">Read the feature →</div>
            </a>
            <a href="https://www.sdsualumni.org/s/997/22/page.aspx?sid=997&gid=1&pgid=13048&cid=26290&ecid=26290&crid=0&calpgid=831&calcid=1794" target="_blank" rel="noopener noreferrer" className="featured-card">
              <div className="fc-source">SDSU Alumni Association</div>
              <div className="fc-title">San Diego State University Alumni Spotlight</div>
              <div className="fc-desc">Recognized by the SDSU Alumni Association as a standout entrepreneur from San Diego State University's Marketing program, following a family legacy of Aztec graduates.</div>
              <div className="fc-link">View the spotlight →</div>
            </a>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results" id="results">
        <div className="results-inner">
          <div className="results-header">
            <div className="eyebrow">We Don't Sell Followers. We Build Systems That Generate Revenue.</div>
            <h2>Real Results. Real Businesses.</h2>
          </div>
          <div className="results-grid">
            <div className="result-card">
              <div className="r-stat">1M+</div>
              <h4>YouTube Views, Probate Real Estate</h4>
              <p>A probate real estate professional had the expertise but no system to scale it. We built an AI-powered content strategy, created educational video content, and optimized every upload for search. The result: 8,000+ subscribers and over a million total views.</p>
              <div className="result-lead">→ YouTube is now her #1 source of inbound clients, zero cold outreach</div>
            </div>
            <div className="result-card">
              <div className="r-stat">90%+</div>
              <h4>Full System Build, National Designation Program</h4>
              <p>A national real estate designation program needed everything rebuilt — sales funnels, automated marketing campaigns, standardized systems, and AI-powered AEO positioning. We documented, automated, and scaled their entire operation.</p>
              <div className="result-lead">→ 90%+ agent retention. Nationwide visibility. More recurring program revenue.</div>
            </div>
            <div className="result-card">
              <div className="r-stat">End-to-End</div>
              <h4>AI-Powered Revenue System, Custom Apparel</h4>
              <p>A custom apparel company needed an entire AI-powered revenue machine — graphics automation, persuasive copy, landing pages, funnels, and nurture campaigns. Built, integrated, and running on autopilot.</p>
              <div className="result-lead">→ Fully automated revenue system. More orders, more repeat buyers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="positioning">
        <div className="positioning-inner">
          <div className="eyebrow">Why DJS</div>
          <h2>We're Not An Agency. We're Your Marketing Department.</h2>
          <p>
            Traditional agencies sell deliverables. We build infrastructure. There's a difference between posting content and building a system that converts. Between running ads and engineering a funnel. Between SEO and AI-optimized search visibility. We work with niche service businesses — real estate, legal, professional services — who are experts in their field but invisible online. We fix that.
          </p>
        </div>
      </section>

      {/* BOOST365 */}
      <section className="boost" id="boost">
        <div className="boost-inner">
          <div className="boost-eyebrow">Our Framework</div>
          <h2>The <span>BOOST365©</span> Playbook</h2>
          <p className="boost-desc">
            Five pillars. One system. Built to generate consistent leads, authority, and revenue — 365 days a year. Not a campaign. Not a tactic. An engine.
          </p>
          <div className="boost-pillars">
            {[
              { num: '01', title: 'Branding' },
              { num: '02', title: 'Optimization' },
              { num: '03', title: 'Outreach' },
              { num: '04', title: 'Sales Funnels' },
              { num: '05', title: 'Tracking' },
            ].map((p, i) => (
              <div key={i} className="pillar-card">
                <div className="p-num">{p.num}</div>
                <h4>{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <h2>What We Build For You</h2>
          </div>
          <div className="services-list">
            {[
              'Search Engine Optimization (SEO & AEO)',
              'Paid Advertising — Meta, Google, LinkedIn, TikTok',
              'Social Media Management & Content Creation',
              'Email Marketing & Automation',
              'Video Production & Strategy',
              'Website Design & Development',
              'Landing Pages & Sales Funnels',
              'Brand Strategy & Positioning',
              'AI-Powered Marketing Systems',
            ].map((s, i) => (
              <div key={i} className="service-item">
                <div className="s-dot" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="ai-section">
        <div className="ai-inner">
          <div className="eyebrow">AI-Powered Marketing</div>
          <h2>We Don't Just Use AI. We Build With It.</h2>
          <p>
            While other agencies are adding AI as a feature, we've built it into the foundation of everything we do. AI-powered content creation, automated nurture sequences, AEO-optimized content for generative search, and intelligent reporting systems. The result: faster execution, better targeting, and marketing that gets smarter over time.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div>
            <h2>Built By A Marketer Who Knows What It's Like To Be The Expert Nobody Can Find.</h2>
            <p>
              Danny Sweis founded DJS Marketing Services in 2024 after years of watching talented professionals get outranked by inferior competitors with better marketing. He built DJS on one principle: your expertise should be visible.
            </p>
            <p>
              San Diego born and raised — SDSU Marketing grad, following a family legacy of Aztecs. What started as freelance work became a full-stack agency built for professionals who are done being the best-kept secret in their industry.
            </p>
            <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24, display: 'inline-block' }}>
              Let's Talk Strategy
            </a>
          </div>
          <div className="about-img">
            <Image src="/danny-sweis.jpg" alt="Danny Sweis, DJS Marketing Services" width={400} height={480} style={{ objectFit: 'cover', borderRadius: 12 }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready To Build A Marketing System That <span>Actually Works?</span></h2>
        <p>Book a free 30-minute strategy call. No pitch. No pressure. Just clarity on what your business needs to grow.</p>
        <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book Your Free Strategy Call
        </a>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2>Frequently Asked Questions</h2>
          {[
            { q: 'What types of businesses do you work with?', a: 'We specialize in niche service businesses — primarily real estate professionals, legal professionals, and other expert-based service providers. If you\'re the expert in your field but invisible online, that\'s exactly who we built this for.' },
            { q: 'How long before I see results?', a: 'It depends on the service. Paid ads can generate leads in week one. SEO typically shows measurable momentum in 60–90 days. Full system builds take 30–60 days to build and begin compounding from there.' },
            { q: 'Do you offer one-off services or only full systems?', a: 'Both. We have project-based engagements for specific deliverables and ongoing retainer partnerships for full system management. Most clients start with a focused project and expand from there.' },
            { q: 'What makes DJS different from other marketing agencies?', a: 'We build infrastructure, not just deliverables. Most agencies sell posts, ads, or SEO reports. We build systems — funnels, automation, content engines — that work together and compound over time.' },
            { q: 'How do we get started?', a: 'Book a free 30-minute strategy call. We\'ll diagnose what\'s actually holding your growth back and outline what a real marketing system looks like for your specific business.' },
          ].map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{faq.q} <span>+</span></div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
