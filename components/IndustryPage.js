import HeroBackground from './HeroBackground'
import Link from 'next/link'
import PageShell, { BOOKING_URL } from './PageShell'
import { serviceSchemas, JsonLd } from '../lib/seo'
import styles from '../app/services/services.module.css'

/**
 * Industry landing page template. All copy comes from the page's `content` object
 * so each niche page stays a single, readable data file.
 * FAQ answers are plain strings so the FAQPage markup matches the visible text exactly.
 */
export default function IndustryPage({ content: c }) {
  const schemas = serviceSchemas({
    name: c.serviceName,
    serviceType: 'Digital marketing',
    description: c.description,
    path: c.path,
    audience: c.audience,
    crumb: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
      { name: c.crumb, path: c.path },
    ],
    faqs: c.faqs.map((f) => ({ q: f.q, text: f.a })),
  })

  return (
    <PageShell current="/industries">
      <JsonLd data={schemas} />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="page-title">
        <HeroBackground />
        <div className={styles.heroInner}>
          <div>
            <ol className={styles.crumbs} aria-label="Breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li aria-current="page">{c.crumb}</li>
            </ol>
            <p className={styles.eyebrow}>{c.eyebrow}</p>
            <h1 id="page-title" className={styles.h1}>
              {c.h1} <em>{c.h1Em}</em>
            </h1>
            <p className={styles.lede}>{c.lede}</p>
            <p className={styles.heroText}>{c.heroText}</p>
            <div className={styles.btnRow}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Book Free Strategy Call
              </a>
              <a href="#proof" className={styles.btnGhost}>See the Results</a>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelLabel}>What we build</p>
            <ul className={styles.panelList}>
              {c.panel.map((p, i) => (
                <li key={p.t}>
                  <span className={styles.panelNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span><strong>{p.t}</strong>{p.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="problems-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>Sound familiar?</p>
          <h2 id="problems-title" className={styles.h2}>{c.problemsH2} <span>{c.problemsH2Em}</span></h2>
          <div className={styles.cards}>
            {c.problems.map((p) => (
              <div key={p.t} className={styles.card}>
                <h3 className={styles.h3}>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section className={styles.section} aria-labelledby="system-title">
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <p className={styles.kicker}>The system</p>
              <h2 id="system-title" className={styles.h2}>{c.systemH2} <span>{c.systemH2Em}</span></h2>
              {c.systemText.map((t, i) => <p key={i} className={styles.p}>{t}</p>)}
            </div>
            <ul className={styles.checklist}>
              {c.checklist.map((item) => (
                <li key={item.t}><strong>{item.t}</strong> {item.d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="proof-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>Proof, not promises</p>
          <h2 id="proof-title" className={styles.h2}>{c.proofH2} <span>{c.proofH2Em}</span></h2>
          <div className={styles.cards}>
            {c.proof.map((p) => (
              <div key={p.t} className={styles.card}>
                <h3 className={styles.h3}>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
          {c.clients && <p className={styles.p} style={{ marginTop: 28 }}>{c.clients}</p>}
        </div>
      </section>

      {/* BOOST365 */}
      <section className={styles.section} aria-labelledby="boost-title">
        <div className={styles.inner}>
          <p className={styles.kicker}>How it fits together</p>
          <h2 id="boost-title" className={styles.h2}>Built on the <span>BOOST365© System</span></h2>
          <p className={styles.p}>{c.boostText}</p>
          <ol className={styles.boost} aria-label="BOOST365© pillars">
            <li><span>01</span>Branding</li>
            <li><span>02</span>Optimization</li>
            <li><span>03</span>Outreach</li>
            <li><span>04</span>Sales Funnels</li>
            <li><span>05</span>Tracking</li>
          </ol>
          <p className={styles.p} style={{ marginTop: 28 }}>
            Related: <Link href="/services/seo" className={styles.inlineLink}>SEO, AEO &amp; GEO</Link>,{' '}
            <Link href="/services/website-design" className={styles.inlineLink}>website design</Link>, and the free{' '}
            <Link href="/playbook" className={styles.inlineLink}>BOOST365© Playbook</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title">
        <div className={styles.narrow}>
          <p className={styles.kicker}>Straight answers</p>
          <h2 id="faq-title" className={styles.h2}>{c.crumb} Marketing <span>FAQ</span></h2>
          <div className={styles.faq}>
            {c.faqs.map((f) => (
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
        <h2 id="cta-title" className={styles.ctaH2}>{c.ctaH2} <span>{c.ctaH2Em}</span></h2>
        <p>A free 30-minute strategy call. No pitch deck, no pressure. You&apos;ll walk away with at least one actionable insight, whether we work together or not.</p>
        <div className={styles.ctaRow}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Book Free Strategy Call
          </a>
          <Link href="/industries" className={styles.btnGhost}>Other Industries We Serve</Link>
        </div>
      </section>
    </PageShell>
  )
}

/** Shared metadata builder for industry pages. */
export function industryMeta({ title, description, path }) {
  const url = `https://djsmarketingservices.com${path}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'DJS Marketing Services',
      locale: 'en_US',
      images: [{ url: 'https://djsmarketingservices.com/og-image-v2.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://djsmarketingservices.com/og-image-v2.jpg'],
    },
  }
}
