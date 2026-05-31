import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | DJS Marketing Services',
  description: 'Terms and Conditions for DJS Marketing Services. Read the rules and guidelines governing use of our website and services.',
  alternates: { canonical: 'https://djsmarketingservices.com/terms' },
}

export default function Terms() {
  const updated = 'May 25, 2026'

  return (
    <>
      <nav role="navigation" style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:'rgba(4,103,177,0.97)', borderBottom:'2px solid #f7e400', padding:'4px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', backdropFilter:'blur(8px)' }}>
        <Link href="/"><img src="/logo-nav.jpg" alt="DJS Marketing Services" style={{ height:'48px', width:'auto' }} /></Link>
        <Link href="/" style={{ fontSize:'13px', fontWeight:'700', color:'rgba(255,255,255,0.9)', textDecoration:'none', letterSpacing:'0.5px', textTransform:'uppercase' }}>← Back to Home</Link>
      </nav>

      <main style={{ maxWidth:'860px', margin:'0 auto', padding:'120px 48px 80px', fontFamily:'Inter, sans-serif', color:'#111', lineHeight:'1.8' }}>
        <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(40px,6vw,72px)', color:'#111', marginBottom:'8px', lineHeight:'1' }}>Terms & Conditions</h1>
        <p style={{ fontSize:'14px', color:'#777', marginBottom:'48px' }}>Last updated: {updated}</p>

        <p style={{ fontSize:'16px', marginBottom:'32px', color:'#444' }}>
          Please read these Terms and Conditions carefully before using <strong>djsmarketingservices.com</strong> operated by DJS Marketing Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part, please do not use our website.
        </p>

        {[
          {
            title: '1. Acceptance of Terms',
            body: `By accessing djsmarketingservices.com, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. We reserve the right to update these Terms at any time. Continued use of the website after changes constitutes your acceptance of the revised Terms.`
          },
          {
            title: '2. Use of Website',
            body: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not:

• Use this site to transmit any unlawful, harmful, or offensive content
• Attempt to gain unauthorized access to any part of the website or its systems
• Use automated tools to scrape, crawl, or harvest content from this site without prior written consent
• Impersonate DJS Marketing Services or any of its employees or representatives`
          },
          {
            title: '3. Intellectual Property',
            body: `All content on this website — including but not limited to text, graphics, logos, images, the BOOST365© framework, blog posts, and downloadable resources — is the exclusive property of DJS Marketing Services and is protected by U.S. and international copyright, trademark, and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission. The BOOST365© name and playbook are proprietary frameworks of DJS Marketing Services.`
          },
          {
            title: '4. Services & Engagements',
            body: `Information on this website is provided for general informational purposes only and does not constitute a binding service agreement. All marketing services provided by DJS Marketing Services are governed by separate written agreements executed between DJS Marketing Services and the client.

Results mentioned on this website (including case studies and statistics) represent specific client outcomes and are not guarantees of future performance. Individual results will vary based on business type, market conditions, and other factors.`
          },
          {
            title: '5. Free Resources & Downloads',
            body: `Free resources offered on this site, including the BOOST365© Marketing Playbook, are provided for educational purposes. By downloading or accessing these resources, you agree to receive marketing communications from DJS Marketing Services, which you may opt out of at any time.

These resources are for personal and business use only and may not be resold, redistributed, or repackaged without written permission.`
          },
          {
            title: '6. Third-Party Links',
            body: `Our website may contain links to third-party websites including HubSpot, social media platforms, and partner services. These links are provided for convenience only. DJS Marketing Services has no control over the content or practices of third-party sites and accepts no responsibility for them. Accessing third-party links is at your own risk.`
          },
          {
            title: '7. Disclaimer of Warranties',
            body: `This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. DJS Marketing Services does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.

We make no representations or warranties regarding the accuracy, completeness, or suitability of any information on the website for any particular purpose.`
          },
          {
            title: '8. Limitation of Liability',
            body: `To the fullest extent permitted by law, DJS Marketing Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content — even if we have been advised of the possibility of such damages.

Our total liability for any claim arising from use of this website shall not exceed $100.`
          },
          {
            title: '9. Indemnification',
            body: `You agree to indemnify, defend, and hold harmless DJS Marketing Services and its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including reasonable attorneys\' fees) arising from your use of the website, your violation of these Terms, or your violation of any rights of a third party.`
          },
          {
            title: '10. Privacy',
            body: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`
          },
          {
            title: '11. Governing Law & Jurisdiction',
            body: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in San Diego County, California.`
          },
          {
            title: '12. Severability',
            body: `If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will otherwise remain in full force and effect.`
          },
          {
            title: '13. Contact Us',
            body: `If you have questions about these Terms and Conditions, contact us at:

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
            Questions? Email <a href="mailto:marketing@djs90.com" style={{ color:'#0467b1' }}>marketing@djs90.com</a> or call <a href="tel:+16199284669" style={{ color:'#0467b1' }}>(619) 928-4669</a>.
          </p>
        </div>
      </main>

      <footer style={{ background:'#111', padding:'28px 48px', textAlign:'center' }}>
        <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.5)', margin:0 }}>
          © {new Date().getFullYear()} DJS Marketing Services. All Rights Reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none' }}>Privacy Policy</Link>
          &nbsp;|&nbsp;
          <Link href="/terms" style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none' }}>Terms & Conditions</Link>
        </p>
      </footer>
    </>
  )
}
