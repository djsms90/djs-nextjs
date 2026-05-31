import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | DJS Marketing Services',
  description: 'Privacy Policy for DJS Marketing Services. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://djsmarketingservices.com/privacy-policy' },
}

export default function PrivacyPolicy() {
  const updated = 'May 25, 2026'

  return (
    <>
      <nav role="navigation" style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:'rgba(4,103,177,0.97)', borderBottom:'2px solid #f7e400', padding:'4px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', backdropFilter:'blur(8px)' }}>
        <Link href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height:'48px', width:'auto' }} /></Link>
        <Link href="/" style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.9)', textDecoration:'none', letterSpacing:'0.5px', textTransform:'uppercase' }}>← Back to Home</Link>
      </nav>

      <main style={{ maxWidth:'860px', margin:'0 auto', padding:'120px 48px 80px', fontFamily:'Inter, sans-serif', color:'#111', lineHeight:'1.8' }}>
        <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(40px,6vw,72px)', color:'#111', marginBottom:'8px', lineHeight:'1' }}>Privacy Policy</h1>
        <p style={{ fontSize:'14px', color:'#777', marginBottom:'48px' }}>Last updated: {updated}</p>

        <p style={{ fontSize:'16px', marginBottom:'32px', color:'#444' }}>DJS Marketing Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>djsmarketingservices.com</strong> and interact with our services.</p>

        {[
          {
            title: '1. Information We Collect',
            body: `We may collect the following personal information when you voluntarily provide it through our website forms, marketing quiz, or contact requests:

• Full name
• Email address
• Phone number
• Business information you choose to share

We also automatically collect certain non-personal information, including browser type, IP address, pages visited, and time spent on our site through standard analytics tools (Google Analytics, Meta Pixel).`
          },
          {
            title: '2. How We Use Your Information',
            body: `We use the information we collect to:

• Respond to your inquiries and schedule strategy calls
• Send you marketing insights, resources, and relevant communications you have opted into
• Improve our website and services
• Comply with legal obligations

We will only contact you for purposes related to the services you expressed interest in. We do not engage in unsolicited bulk communications.`
          },
          {
            title: '3. How We Share Your Information',
            body: `We do not sell, trade, rent, or otherwise transfer your personal information to third parties for their marketing purposes.

We may share your information with trusted service providers who assist us in operating our website and conducting business (e.g., HubSpot CRM, email providers), provided those parties agree to keep your information confidential.

We may also disclose your information when required by law or to protect the rights, property, or safety of DJS Marketing Services or others.`
          },
          {
            title: '4. California Privacy Rights (CCPA)',
            body: `If you are a California resident, you have the right under the California Consumer Privacy Act (CCPA) to:

• Know what personal information we collect about you
• Request deletion of your personal information
• Opt out of the sale of your personal information (we do not sell personal information)
• Non-discrimination for exercising your privacy rights

To exercise any of these rights, contact us at privacy@djsmarketingservices.com or (619) 928-4669.`
          },
          {
            title: '5. GDPR Rights (EEA Residents)',
            body: `If you are located in the European Economic Area, you have the right to access, correct, or delete your personal data. You also have the right to restrict or object to processing, and the right to data portability.

Our lawful basis for processing your data is your explicit consent, provided at the time of form submission. You may withdraw consent at any time by contacting us.`
          },
          {
            title: '6. Cookies & Tracking Technologies',
            body: `We use cookies and similar tracking technologies to analyze site traffic and improve your experience. These include:

• Google Analytics (traffic analysis)
• Meta Pixel (advertising measurement)

You can control cookie settings through your browser. Disabling cookies may affect some functionality of our website.`
          },
          {
            title: '7. Data Retention',
            body: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us.`
          },
          {
            title: '8. Data Security',
            body: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`
          },
          {
            title: '9. Third-Party Links',
            body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.`
          },
          {
            title: '10. Children\'s Privacy',
            body: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected such information, we will delete it promptly.`
          },
          {
            title: '11. Changes to This Policy',
            body: `We may update this Privacy Policy periodically. We will notify you of significant changes by updating the "Last updated" date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.`
          },
          {
            title: '12. Contact Us',
            body: `If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:

DJS Marketing Services
San Diego, CA
Email: marketing@djs90.com
Phone: (619) 928-4669
Website: djsmarketingservices.com`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom:'40px' }}>
            <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'#0467b1', marginBottom:'12px' }}>{section.title}</h2>
            <div style={{ fontSize:'15px', color:'#444', whiteSpace:'pre-line' }}>{section.body}</div>
          </div>
        ))}

        <div style={{ marginTop:'64px', padding:'32px', background:'#f7f9fb', borderRadius:'8px', borderLeft:'4px solid #0467b1' }}>
          <p style={{ fontSize:'14px', color:'#444', margin:0 }}>
            Questions about your data? Email us at <a href="mailto:marketing@djs90.com" style={{ color:'#0467b1' }}>marketing@djs90.com</a> or call <a href="tel:+16199284669" style={{ color:'#0467b1' }}>(619) 928-4669</a>.
          </p>
        </div>
      </main>

      <footer style={{ background:'#111', padding:'28px 48px', textAlign:'center' }}>
        <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.5)', margin:0 }}>
          © {new Date().getFullYear()} DJS Marketing Services. All Rights Reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none' }}>Privacy Policy</Link>
        </p>
      </footer>
    </>
  )
}
