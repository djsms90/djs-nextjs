import Link from 'next/link'

export const metadata = {
  title: 'Download the BOOST365© Marketing Playbook | DJS Marketing Services',
  description: 'The 5-pillar system used by niche service professionals to build consistent leads, convert prospects, and scale revenue. Free download.',
}

export default function PlaybookPage() {
  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <Link href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height: '48px', width: 'auto' }} /></Link>
        <Link href="/" style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.9)', textDecoration:'none', letterSpacing:'0.5px', textTransform:'uppercase' }}>← Back to Home</Link>
      </nav>

      <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0467b1 0%,#035a9e 40%,#024d8a 100%)', display:'flex', alignItems:'center', padding:'100px 48px 80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', width:'100%', display:'grid', gridTemplateColumns:'1fr 420px', gap:'64px', alignItems:'center' }}>

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
              {[
                'Branding: own your niche, establish authority',
                'Optimization: convert traffic into leads',
                'Outreach: attract the right audience at scale',
                'Sales Funnels: automate your lead-to-client pipeline',
                'Tracking: know exactly what is working and why',
              ].map((item, i) => (
                <li key={i} style={{ display:'flex', gap:'12px', alignItems:'flex-start', marginBottom:'12px', fontSize:'15px', color:'rgba(255,255,255,0.85)' }}>
                  <span style={{ background:'#f7e400', color:'#c20000', width:'24px', height:'24px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'12px', flexShrink:0 }}>{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)' }}>
              Used by real estate professionals, mortgage experts, attorneys, and niche service businesses across San Diego and beyond.
            </p>
          </div>

          {/* RIGHT — FORM */}
          <div style={{ background:'white', borderRadius:'12px', padding:'40px', boxShadow:'0 8px 32px rgba(0,0,0,0.2)', borderTop:'4px solid #0467b1' }}>
            <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'#111', marginBottom:'6px' }}>Get Instant Access</h2>
            <p style={{ fontSize:'14px', color:'#777', marginBottom:'24px' }}>Enter your details below and we will send your free playbook immediately.</p>
            <a
              href="https://q55uc.share-na2.hsforms.com/2ijaRSaieQMaSfVEKZ7_78A"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:'block', background:'#0467b1', color:'white', fontSize:'15px', fontWeight:'900', letterSpacing:'1px', textTransform:'uppercase', padding:'18px 32px', borderRadius:'6px', textDecoration:'none', textAlign:'center' }}
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

      <footer style={{ background:'white', borderTop:'1px solid #e0e8f0', padding:'28px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
        <Link href="/"><img src="/logo-footer.jpg" alt="DJS Marketing Services" style={{ height:'40px', width:'auto' }} /></Link>
        <p style={{ fontSize:'12px', color:'#777' }}>
          © {new Date().getFullYear()} DJS Marketing Services. All Rights Reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" style={{ color:'#0467b1', textDecoration:'none' }}>Privacy Policy</Link>
          &nbsp;|&nbsp;
          <Link href="/terms" style={{ color:'#0467b1', textDecoration:'none' }}>Terms & Conditions</Link>
        </p>
      </footer>
    </>
  )
}
