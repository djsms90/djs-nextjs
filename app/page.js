'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Quiz from '../components/Quiz'

const logos = [
  { src: '/logo-ilumni.jpg',      alt: 'The Ilumni Institute' },
  { src: '/logo-cdre.jpg',        alt: 'CDRE' },
  { src: '/logo-spring-klein.jpg', alt: 'Spring Klein' },
  { src: '/logo-barracudas.jpg',  alt: 'Barracudas' },
  { src: '/logo-wallatees.jpg',   alt: 'Wallatees' },
  { src: '/logo-tbg.jpg',         alt: 'The Benjamin Group' },
  { src: '/logo-unity-bar.jpg',   alt: 'Unity Bar San Diego' },
  { src: '/logo-aaba.jpg',        alt: 'Arab American Bar Association' },
  { src: '/logo-wallasigns.jpg',  alt: 'WallaSigns' },
  { src: '/logo-mk-group.jpg',    alt: 'MK Group' },
]

const quizData = [
  {
    q: 'How consistent is your brand across all platforms — website, LinkedIn, Instagram, Google?',
    opts: [
      { label: 'Fully consistent — same look, voice, and message everywhere', val: 5 },
      { label: 'Somewhat consistent — a few gaps but mostly aligned', val: 3 },
      { label: 'Inconsistent — every platform looks and sounds different', val: 1 },
      { label: "I haven't thought about this", val: 0 },
    ],
  },
  {
    q: 'When someone searches for what you do in your city, where do you show up?',
    opts: [
      { label: 'Top 3 on Google — I show up consistently', val: 5 },
      { label: 'Page 1, but not top 3', val: 3 },
      { label: 'Page 2 or further back', val: 1 },
      { label: "I don't know where I rank", val: 0 },
    ],
  },
  {
    q: 'How are you currently generating new leads?',
    opts: [
      { label: 'Multiple channels — paid ads, organic, referrals, and content all working together', val: 5 },
      { label: 'Mostly referrals — I depend on word of mouth', val: 3 },
      { label: 'Occasionally running ads but no consistent system', val: 1 },
      { label: "I'm not generating leads consistently", val: 0 },
    ],
  },
  {
    q: 'Do you have an automated follow-up system for leads?',
    opts: [
      { label: 'Yes — automated email sequences, retargeting, and nurture campaigns', val: 5 },
      { label: 'Basic email follow-up but nothing automated', val: 3 },
      { label: 'I follow up manually when I remember', val: 1 },
      { label: 'No follow-up system at all', val: 0 },
    ],
  },
  {
    q: 'How are you currently measuring marketing performance?',
    opts: [
      { label: 'Full analytics dashboard — I track leads, conversions, cost per acquisition', val: 5 },
      { label: 'Basic metrics — website traffic and social followers', val: 3 },
      { label: 'I check occasionally but have no system', val: 1 },
      { label: "I don't track marketing performance", val: 0 },
    ],
  },
]

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    // ── Nav hide on scroll ──
    let lastScroll = 0
    const nav = document.querySelector('nav')
    const handleScroll = () => {
      const st = window.scrollY
      if (st > lastScroll && st > 80) nav?.classList.add('nav-hidden')
      else nav?.classList.remove('nav-hidden')
      lastScroll = st
      // Scroll top button
      const btn = document.getElementById('scrollTop')
      if (btn) btn.classList.toggle('visible', st > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // ── Hamburger ──
    const hamburger = document.getElementById('hamburger')
    const mobileMenu = document.getElementById('mobileMenu')
    const closeMenu = document.getElementById('closeMenu')
    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('open')
      mobileMenu?.classList.toggle('open')
    })
    closeMenu?.addEventListener('click', () => {
      hamburger?.classList.remove('open')
      mobileMenu?.classList.remove('open')
    })
    mobileMenu?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger?.classList.remove('open')
        mobileMenu?.classList.remove('open')
      })
    })

    // ── FAQ accordion ──
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true'
        document.querySelectorAll('.faq-q').forEach(b => {
          b.setAttribute('aria-expanded', 'false')
          b.nextElementSibling?.classList.remove('open')
        })
        if (!expanded) {
          btn.setAttribute('aria-expanded', 'true')
          btn.nextElementSibling?.classList.add('open')
        }
      })
    })

    // ── Hello bar ──
    const helloBar = document.getElementById('helloBar')
    const hbClose = document.getElementById('hbClose')
    setTimeout(() => helloBar?.classList.add('visible'), 3000)
    hbClose?.addEventListener('click', () => {
      helloBar?.classList.remove('visible')
      sessionStorage.setItem('hbClosed', '1')
    })

    // ── Quiz ──
    let quizShown = false
    const showQuizFn = () => {
      if (!quizShown) {
        quizShown = true
        setTimeout(() => setShowQuiz(true), 800)
      }
    }

    const scrollQuizCheck = () => {
      const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPct > 40) showQuizFn()
    }
    window.addEventListener('scroll', scrollQuizCheck, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', scrollQuizCheck)
    }
  }, [])

  // Quiz step functions
  const nextStep = (step) => {
    const current = document.querySelector(`.quiz-step[data-step="${step}"]`)
    const next = document.querySelector(`.quiz-step[data-step="${step + 1}"]`)
    const result = document.querySelector('.quiz-result')
    if (next) {
      current?.classList.remove('active')
      next.classList.add('active')
      const bar = document.getElementById('quizProgressBar')
      if (bar) bar.style.width = `${(step / 5) * 100}%`
    } else if (result) {
      current?.classList.remove('active')
      result.classList.add('active')
      const bar = document.getElementById('quizProgressBar')
      if (bar) bar.style.width = '100%'
      // Tally score
      let total = 0
      document.querySelectorAll('.quiz-option.selected').forEach(el => {
        total += parseInt(el.dataset.value || '0')
      })
      const circle = document.querySelector('.score-num')
      const tier = document.querySelector('.score-tier')
      const msg = document.querySelector('.score-message')
      if (circle) circle.textContent = total
      if (tier && msg) {
        if (total >= 20) { tier.textContent = '🏆 Marketing Leader'; msg.textContent = "You're firing on all cylinders. Let's talk about scaling what's working." }
        else if (total >= 13) { tier.textContent = '📈 Growth Ready'; msg.textContent = "Strong foundation. A few strategic upgrades could unlock serious momentum." }
        else if (total >= 6) { tier.textContent = '🔧 Tune-Up Needed'; msg.textContent = "Gaps in your system are costing you leads. Let's fix them." }
        else { tier.textContent = '🚀 Starting Point'; msg.textContent = "You're leaving money on the table. The good news: the upside is massive." }
      }
      sessionStorage.setItem('quizDone', '1')
    }
  }

  const prevStep = (step) => {
    const current = document.querySelector(`.quiz-step[data-step="${step}"]`)
    const prev = document.querySelector(`.quiz-step[data-step="${step - 1}"]`)
    if (prev) {
      current?.classList.remove('active')
      prev.classList.add('active')
      const bar = document.getElementById('quizProgressBar')
      if (bar) bar.style.width = `${((step - 2) / 5) * 100}%`
    }
  }

  const skipQuiz = () => {
    const overlay = document.getElementById('quizOverlay')
    overlay?.classList.remove('visible')
    sessionStorage.setItem('quizDismissed', '1')
  }

  const selectOption = (stepEl, option) => {
    stepEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'))
    option.classList.add('selected')
    const nextBtn = stepEl.querySelector('.quiz-btn')
    if (nextBtn) nextBtn.removeAttribute('disabled')
  }

  return (
    <>
      {/* SKIP NAV */}
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      {/* HELLO BAR */}
      <div className="hello-bar" id="helloBar">
        <span>🎯 Get the FREE BOOST365© Marketing Playbook — used by real estate &amp; service professionals to scale their marketing</span>
        <a href="/playbook.html">Get the Free Playbook</a>
        <button className="hb-close" id="hbClose" aria-label="Close">✕</button>
      </div>

      {/* NAV */}
      <nav role="navigation" aria-label="Main navigation">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height: '56px', width: 'auto', display: 'block' }} /></a>
        <button className="hamburger" id="hamburger" aria-label="Menu"><span /><span /><span /></button>
        <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#services">Services</a></li>
          <li><a href="#boost">BOOST365</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Free Strategy Call</a></li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <div className="mobile-menu" id="mobileMenu">
        <button className="close-btn" id="closeMenu" aria-label="Close menu">✕</button>
        <a href="#services">Services</a>
        <a href="#boost">BOOST365</a>
        <a href="#results">Results</a>
        <a href="/blog.html">Blog</a>
        <a href="#about">About</a>
        <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer">Book Free Strategy Call</a>
      </div>

      {/* HERO */}
      <section className="hero" id="main-content" role="main">
        <div className="hero-bg" />
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="hero-lines">
          <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q300 100 600 200 T1200 200" stroke="white" strokeWidth="2" fill="none" />
            <path d="M0 300 Q300 200 600 300 T1200 300" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="line" /><span>San Diego Digital Marketing Agency</span>
            </div>
            <p className="hero-epiphany">Most professional service providers are the best at what they do, but their marketing doesn&apos;t show it.</p>
            <h1>Turn Your Expertise Into <em>Leads, Clients</em> And Revenue.</h1>
            <p className="hero-hook">Most businesses don&apos;t have a marketing problem. They have a system problem. And we fix systems.</p>
            <div className="hero-btns">
              <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Strategy Call</a>
              <a href="#boost" className="btn-secondary">See Our BOOST365 Playbook</a>
            </div>
          </div>
          <div className="hero-card">
            <p className="card-label">Client Results</p>
            <div className="hero-stat"><div className="stat-num">1M+</div><div className="stat-desc">YouTube Views Generated for Clients</div></div>
            <div className="hero-stat"><div className="stat-num">90%+</div><div className="stat-desc">Agent Retention for National Designation Program</div></div>
            <div className="hero-stat"><div className="stat-num">5</div><div className="stat-desc">Pillars in Our BOOST365© System</div></div>
          </div>
        </div>
      </section>

      {/* MYTHS */}
      <section className="myths">
        <div className="myths-inner">
          <div className="myths-header">
            <div className="eyebrow">The Truth</div>
            <h2>Marketing Myths That Are Costing You Clients</h2>
          </div>
          <div className="myths-grid">
            {[
              { n: 'Myth #1', m: '"I just need more followers."', t: <>Followers don&apos;t pay bills. Systems do. A <strong>500-follower account with a real funnel</strong> beats a 50,000-follower account with no strategy.</> },
              { n: 'Myth #2', m: '"SEO takes too long."', t: <>Bad SEO takes forever. <strong>Strategic SEO with AEO optimization</strong> starts showing results in 60–90 days when done right.</> },
              { n: 'Myth #3', m: '"I tried ads. They didn\'t work."', t: <>Ads don&apos;t fail. Ad strategy fails. Most businesses run ads without proper <strong>targeting, landing pages, or follow-up systems.</strong></> },
              { n: 'Myth #4', m: '"My referrals are enough."', t: <>Referrals are great — until they stop. A real marketing system creates <strong>consistent, predictable lead flow</strong> independent of your network.</> },
              { n: 'Myth #5', m: '"Marketing is too expensive."', t: <>The real cost is the revenue you&apos;re not generating. <strong>A proper system pays for itself.</strong> Guesswork is what&apos;s expensive.</> },
              { n: 'Myth #6', m: '"We need to go viral."', t: <><strong>Sustainable growth</strong> doesn&apos;t come from viral moments. It comes from systems that compound — every single month.</> },
            ].map((c, i) => (
              <div key={i} className="myth-card">
                <div className="myth-label">{c.n}</div>
                <p className="myth-text">{c.m}</p>
                <p className="truth-text">{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted">
        <div className="trusted-inner">
          <div className="trusted-label">Trusted By</div>
          <div className="logos-ticker-wrap">
            <div className="logos-ticker">
              {[...logos, ...logos].map((l, i) => (
                <div key={i} className="logo-pill">
                  <Image src={l.src} alt={l.alt} width={180} height={72} style={{ objectFit: 'contain', width: '180px', height: '72px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IN */}
      <section className="featured-in">
        <div className="featured-inner">
          <div className="featured-label">As Featured In &amp; Recognized By</div>
          <div className="featured-row">
            <a href="https://sdvoyager.com/interview/hidden-gems-meet-danny-sweis-of-djs-marketing-services/" target="_blank" rel="noopener noreferrer" className="featured-card">
              <div className="fc-source">SD Voyager, San Diego</div>
              <div className="fc-title">&ldquo;Hidden Gems: Meet Danny Sweis of DJS Marketing Services&rdquo;</div>
              <div className="fc-desc">&ldquo;We don&apos;t just offer marketing services — we engineer entire marketing ecosystems that actually work together.&rdquo; Featured in SD Voyager&apos;s Hidden Gems series.</div>
              <div className="fc-link">Read the feature →</div>
            </a>
            <a href="https://www.sdsualumni.org/s/997/22/page.aspx?sid=997&gid=1&pgid=13048&cid=26290&ecid=26290&crid=0&calpgid=831&calcid=1794" target="_blank" rel="noopener noreferrer" className="featured-card">
              <div className="fc-source">SDSU Alumni Association</div>
              <div className="fc-title">San Diego State University Alumni Spotlight</div>
              <div className="fc-desc">Recognized by the SDSU Alumni Association as a standout entrepreneur from San Diego State University&apos;s Marketing program, following a family legacy of Aztec graduates.</div>
              <div className="fc-link">View the spotlight →</div>
            </a>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results" id="results">
        <div className="hero-particles" style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
          {[...Array(6)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="results-inner">
          <div className="results-header">
            <div className="eyebrow">We Don&apos;t Sell Followers. We Build Systems That Generate Revenue.</div>
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
              <p>A national real estate designation program needed everything rebuilt — sales funnels, automated marketing campaigns, standardized systems, and AI-powered AEO positioning across the country. We documented, automated, and scaled their entire operation.</p>
              <div className="result-lead">→ 90%+ agent retention. Nationwide visibility. More agents staying = more recurring program revenue.</div>
            </div>
            <div className="result-card">
              <div className="r-stat">End-to-End</div>
              <h4>AI-Powered Revenue System, Custom Apparel</h4>
              <p>A custom apparel company needed an entire AI-powered revenue machine — graphics automation, persuasive copy, landing pages, funnels, automated purchasing flows, and nurture campaigns. Built, integrated, and running on autopilot.</p>
              <div className="result-lead">→ Fully automated revenue system, more orders, more repeat buyers, owner focused on growth not operations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="positioning">
        <div className="positioning-inner">
          <div>
            <h2>Some Need a Tune-Up.<br />Others Need to <span>Build From Scratch.</span><br />Both Need BOOST365©.</h2>
            <p>Some clients come to us with something already in place — a presence, a website, a foundation. It got them this far. But it&apos;s not performing the way it should. <strong>We fix it, optimize it, and make it run the way it was meant to.</strong></p>
            <p>Others come with a vision and nothing built yet. They want infrastructure, strategy, and execution as one complete system. <strong>We build it.</strong></p>
            <p>And when the foundation is solid and the system is ready, BOOST365© goes to work. The framework that scales what&apos;s functioning into compounding revenue.</p>
          </div>
          <div className="three-stages">
            <div className="stage">
              <h4>The Tune-Up</h4>
              <p>Your system exists but underperforms. We audit, optimize, and fix what&apos;s holding you back from the results you should already be seeing.</p>
            </div>
            <div className="stage gold">
              <h4>The Custom Build</h4>
              <p>You have the vision. We build the infrastructure, strategy, execution, and systems — delivered as one complete marketing operation.</p>
            </div>
            <div className="stage red">
              <h4>The BOOST</h4>
              <p>Foundation is solid. Now we scale it. BOOST365© is the framework that takes a functioning system and compounds it — more visibility, more leads, more revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOST365 */}
      <section className="boost" id="boost">
        <div className="boost-inner">
          <div className="boost-header">
            <div className="eyebrow">The System Behind the Results</div>
            <h2>The BOOST365© Playbook</h2>
            <p>A proven 5-step framework that transforms your online presence into a lead-generating, revenue-compounding machine.</p>
          </div>
          <div className="pillars-grid">
            {[
              { n: '01', t: 'Branding', d: 'Clarify your positioning and make your brand the obvious choice in your niche.' },
              { n: '02', t: 'Optimization', d: 'Your website and SEO, built to rank, built to convert visitors into leads.' },
              { n: '03', t: 'Outreach', d: 'Precision-targeted ads and content across every platform your ideal client uses.' },
              { n: '04', t: 'Sales Funnels', d: 'Landing pages, email sequences, and automation that turns prospects into paying clients.' },
              { n: '05', t: 'Tracking', d: 'Every click, lead, and dollar measured and used to compound results week after week.' },
            ].map((p, i) => (
              <div key={i} className="pillar-card">
                <div className="p-num">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'40px' }}>
            <p style={{ fontSize:'15px', color:'var(--text-mid)', marginBottom:'16px' }}>Get the full system, free. No fluff, no filler. Just the framework.</p>
            <a href="/playbook.html" style={{ display:'inline-block', background:'var(--blue)', color:'white', fontSize:'13px', fontWeight:'900', letterSpacing:'2px', textTransform:'uppercase', padding:'16px 40px', borderRadius:'4px', textDecoration:'none' }}>Download the Free BOOST365© Playbook</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <h2>Full-Stack Digital Marketing.<br /><span>One Team. Complete Coverage.</span></h2>
            <p>From brand strategy to paid ads to AI-powered content systems, we handle the entire marketing operation so you can focus on your clients.</p>
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
              <div key={i} className="service-item"><div className="s-dot" /><span>{s}</span></div>
            ))}
          </div>
          <div className="tiers">
            {[
              { icon: '🥉', name: 'Bronze', desc: 'Foundation', cls: '' },
              { icon: '🥈', name: 'Silver', desc: 'Growth', cls: 'featured' },
              { icon: '🥇', name: 'Gold', desc: 'Scale', cls: '' },
              { icon: '🏆', name: 'Enterprise', desc: 'Full-Stack', cls: '' },
              { icon: '🤖', name: 'AI-Powered', desc: 'Maximum Output', cls: 'ai-tier' },
            ].map((t, i) => (
              <div key={i} className={`tier ${t.cls}`}>
                <div className="t-icon">{t.icon}</div>
                <h4>{t.name}</h4>
                <p>{t.desc}</p>
                <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="ai-section">
        <div className="ai-inner">
          <div>
            <h2>Faster. Smarter. <span>Built for 2026</span> and Beyond.</h2>
            <p>We&apos;ve integrated AI into every stage of our process — content creation, campaign optimization, reporting, and search positioning. The result: <strong>you get more output, faster turnaround, and marketing that compounds.</strong></p>
            <p>While your competitors are still doing everything manually, your brand runs on a system built for the speed of today&apos;s market.</p>
            <ul className="ai-points">
              <li>AI-powered content production — consistent output at scale</li>
              <li>AEO positioning: your brand in AI-generated search answers</li>
              <li>Automated reporting: you see results without waiting for a meeting</li>
              <li>Real-time campaign optimization — data-driven decisions, not guesses</li>
            </ul>
          </div>
          <div className="ai-badge">
            <div className="badge-num">24/7</div>
            <p>Your marketing system runs around the clock, generating leads, nurturing prospects, and building your brand while you focus on delivering for your clients.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div>
            <span className="about-s">S</span>
            <h2>The S Stands for More Than a Name.</h2>
            <p>The S in our logo stands for Sweis. It also stands for the belief that when a business needs help, someone should actually show up and fix it. <strong>No excuses. No runaround. Just results.</strong></p>
            <p>Danny Sweis has spent 30+ years navigating adversity, building businesses, and learning what actually moves the needle. DJS Marketing Services isn&apos;t a template agency — it&apos;s a system built from real experience and a genuine commitment to winning for every client we take on.</p>
            <p><strong>We don&apos;t take on clients we can&apos;t win for.</strong></p>
          </div>
          <div className="about-quote">
            <blockquote>&ldquo;We optimize and build the machines, pour in traffic, and keep tightening the gears until <em>revenue climbs.</em>&rdquo;</blockquote>
            <p className="q-attr">Danny Sweis, Founder &amp; CEO, DJS Marketing Services</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <h2>Join the #Abbreciate Community</h2>
          <p>Every month, straight from Danny — hard-won lessons from 30+ years of building, failing, growing, and genuinely appreciating every step of the journey. No fluff. Just real perspective from someone still in the game.</p>
          <a href="https://q55uc.share-na2.hsforms.com/2XF4Khm9LQY-WxgbupQE9kg" target="_blank" rel="noopener noreferrer" className="newsletter-btn">Join the #Abbreciate Community — It&apos;s Free</a>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section style={{ background:'var(--off-white)', padding:'80px 48px', borderTop:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', marginBottom:'40px' }}>
            <div>
              <p style={{ fontSize:'11px', fontWeight:'900', letterSpacing:'3px', textTransform:'uppercase', color:'var(--red)', marginBottom:'8px' }}>Latest Insights</p>
              <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(32px,5vw,52px)', color:'var(--text)' }}>Marketing Intelligence</h2>
            </div>
            <a href="/blog.html" style={{ fontSize:'13px', fontWeight:'800', letterSpacing:'2px', textTransform:'uppercase', color:'var(--blue)', textDecoration:'none', border:'2px solid var(--blue)', padding:'10px 24px', borderRadius:'4px' }}>View All Posts →</a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px' }}>
            {[
              { tag:'Video Marketing', title:'How Probate Real Estate Agents Can Dominate YouTube', desc:'The exact strategy we used to take a client from zero to 1M+ views and make YouTube their #1 inbound source.' },
              { tag:'SEO & AEO', title:'What Is Answer Engine Optimization and Why Your Clients Need It Now', desc:"How we're getting clients appearing in AI-generated search answers before competitors know AEO exists." },
              { tag:'Paid Advertising', title:'Google PMax Updates: What Every Agency Owner Needs to Know', desc:'Customer list exclusions and channel reporting finally arrived. Here\'s what to do in your campaigns today.' },
            ].map((b, i) => (
              <div key={i} style={{ background:'white', border:'1px solid var(--border)', borderTop:'4px solid var(--blue)', borderRadius:'4px', padding:'24px' }}>
                <p style={{ fontSize:'10px', fontWeight:'900', letterSpacing:'2px', textTransform:'uppercase', color:'var(--blue)', marginBottom:'8px' }}>{b.tag}</p>
                <h3 style={{ fontSize:'18px', fontWeight:'800', color:'var(--text)', marginBottom:'8px', lineHeight:'1.3' }}>{b.title}</h3>
                <p style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:'1.6', marginBottom:'16px' }}>{b.desc}</p>
                <a href="/blog.html" style={{ fontSize:'12px', fontWeight:'800', color:'var(--blue)', textDecoration:'none', letterSpacing:'1px', textTransform:'uppercase' }}>Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="section-label">
            <div className="line" /><span>Frequently Asked Questions</span><div className="line" />
          </div>
          <div className="faq-grid">
            {[
              { q: 'What makes DJSMS different from other marketing agencies?', a: "We don't just offer services — we build complete marketing systems using the BOOST365© framework. Every strategy is custom-built for your niche, powered by AI for faster delivery, and tracked so you always know what's working." },
              { q: 'How long does it take to see results?', a: 'Most clients see measurable improvements in visibility and lead quality within 60-90 days. SEO and content compound over time, paid ads and social can move faster. We set clear benchmarks so you\'re never guessing.' },
              { q: 'Do you work with businesses outside of real estate?', a: "Yes. While we have deep expertise in real estate, legal, and financial services, we work with any niche service business that needs a done-for-you marketing system. If you have expertise and a target audience, we can build the system around it." },
              { q: 'What is the BOOST365© Playbook?', a: 'BOOST365© is our proprietary 5-pillar marketing framework covering Branding, Optimization, Outreach, Sales Funnels, and Tracking. It\'s the system we use with every client to build a marketing operation that compounds over time. Download the free version above.' },
              { q: 'What does a strategy call involve?', a: "A 30-minute conversation about where your business is, where you want to go, and whether DJSMS is the right fit. No pitch deck, no pressure. You'll walk away with at least one actionable insight regardless of whether we work together." },
              { q: 'Do you offer month-to-month contracts?', a: 'We offer flexible arrangements depending on the scope of work. Some services are project-based, others are ongoing retainers. We\'ll recommend the right structure based on your goals during the strategy call.' },
            ].map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" aria-expanded="false">{f.q}</button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="hero-particles" style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
          {[...Array(6)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="cta-inner">
          <h2>Ready to Build a System <span>That Actually Works?</span></h2>
          <p>Whether your system needs optimization, a complete rebuild, or you&apos;re ready to scale what&apos;s already working — the call starts with a straight conversation about where you are and where you want to go. No pitch deck. No pressure.</p>
          <a href="https://meetings-na2.hubspot.com/sweis" className="btn-cta" target="_blank" rel="noopener noreferrer">Claim Your Free Strategy Call</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="/"><Image src="/logo-footer.jpg" alt="DJS Marketing Services" width={160} height={44} style={{ height:'44px', width:'auto' }} /></a>
        <div className="footer-contact">
          <p>© {new Date().getFullYear()} DJS Marketing Services. All Rights Reserved.</p>
          <p><a href="mailto:marketing@djs90.com">marketing@djs90.com</a> &nbsp;|&nbsp; <a href="tel:+16199284669">(619) 928-4669</a></p>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/djsmarketingservices" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.facebook.com/djsmarketingservices" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/djs-marketing-services/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <a href="#" className="scroll-top" id="scrollTop" aria-label="Back to top">↑</a>

      {/* QUIZ POPUP */}
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
      <div style={{display:'none'}} id="quizOverlay">
        <div className="quiz-box">
          <button className="quiz-close" id="quizClose" aria-label="Close marketing quiz">✕</button>
          <div className="quiz-header">
            <p className="q-eyebrow">Free Marketing Audit</p>
            <h2>What&apos;s Your Marketing Score?</h2>
            <p>5 questions. 60 seconds. See how your marketing stacks up.</p>
          </div>
          <div className="quiz-progress">
            <div className="quiz-progress-bar" id="quizProgressBar" style={{ width:'0%' }} />
          </div>
          <div className="quiz-body">
            {quizData.map((step, si) => (
              <div key={si} className={`quiz-step ${si === 0 ? 'active' : ''}`} data-step={si + 1}>
                <p className="quiz-q-num">Question {si + 1} of 5</p>
                <p className="quiz-q-text">{step.q}</p>
                <div className="quiz-options">
                  {step.opts.map((opt, oi) => (
                    <div
                      key={oi}
                      className="quiz-option"
                      data-value={opt.val}
                      onClick={(e) => {
                        const stepEl = e.currentTarget.closest('.quiz-step')
                        if (stepEl) selectOption(stepEl, e.currentTarget)
                      }}
                    >{opt.label}</div>
                  ))}
                </div>
                <div className="quiz-nav">
                  {si === 0
                    ? <button className="quiz-btn-skip" onClick={skipQuiz}>Skip for now</button>
                    : <button className="quiz-btn-skip" onClick={() => prevStep(si + 1)}>← Back</button>
                  }
                  <button className="quiz-btn" id={`q${si + 1}Next`} disabled onClick={() => nextStep(si + 1)}>
                    {si === 4 ? 'See My Score →' : 'Next →'}
                  </button>
                </div>
              </div>
            ))}
            <div className="quiz-result">
              <div className="score-circle"><span className="score-num">0</span><span className="score-label">/ 25</span></div>
              <p className="score-tier">Calculating...</p>
              <p className="score-message" />
              <a href="https://meetings-na2.hubspot.com/sweis" target="_blank" rel="noopener noreferrer" className="quiz-cta-btn">Book a Free Strategy Call →</a>
              <button className="quiz-dismiss" onClick={() => { document.getElementById('quizOverlay')?.classList.remove('visible') }}>No thanks, I&apos;ll figure it out myself</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
