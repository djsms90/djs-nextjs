import IndustryPage, { industryMeta } from '../../../components/IndustryPage'

const path = '/industries/real-estate'
const description =
  'Marketing systems for real estate agents in probate, divorce and other niches. Video, SEO, funnels and follow-up that turn your expertise into listings.'

export const metadata = industryMeta({
  title: 'Real Estate Agent Marketing | DJS Marketing Services',
  description,
  path,
})

const content = {
  path,
  description,
  crumb: 'Real Estate',
  serviceName: 'Real Estate Agent Marketing',
  audience: 'Real estate agents and real estate education programs',
  eyebrow: 'Marketing for Real Estate Agents',
  h1: 'More Listings From the Expertise',
  h1Em: 'You Already Have.',
  lede:
    "Every agent posts the same just-listed graphic. The agents who win own a niche: probate, divorce, seniors, the legal community. Then they make sure everyone in that niche knows it.",
  heroText:
    'We build the marketing system behind that. Educational video that ranks, content attorneys and referral partners actually share, and follow-up that keeps you top of mind until the listing is ready.',
  panel: [
    { t: 'Get known', d: 'A niche position clients and referral partners remember.' },
    { t: 'Get found', d: 'Video and search content that answers what your niche asks.' },
    { t: 'Get the call', d: 'Funnels and follow-up that turn viewers into appointments.' },
  ],
  problemsH2: 'Great Agent.',
  problemsH2Em: 'Invisible Marketing.',
  problems: [
    {
      t: 'You live and die by referrals',
      d: 'Referrals are the best leads you will ever get. They are also the least predictable. A system fills the gaps between them.',
    },
    {
      t: 'Your content looks like everyone else’s',
      d: 'Listings and market updates do not set you apart. Answering the hard questions your niche asks does.',
    },
    {
      t: 'You have no time to create',
      d: 'You should be with clients, not editing videos. We turn one recording session into weeks of content.',
    },
    {
      t: 'Leads go cold before they are ready',
      d: 'Probate and divorce sales can take months to surface. Follow-up has to run without you remembering to do it.',
    },
  ],
  systemH2: 'Your Expertise,',
  systemH2Em: 'Working While You Sleep.',
  systemText: [
    'Niche real estate is an education business. The agent who explains the process best gets trusted first. We take what you already know and put it in front of the people who need it.',
    'Some agents need a foundation built. Others need what they have tightened up. We figure out which on the strategy call.',
  ],
  checklist: [
    { t: 'YouTube and video strategy.', d: 'Educational videos built around real questions, optimized so they keep getting found.' },
    { t: 'Short-form clips and social.', d: 'Long recordings cut into posts for Instagram, Facebook and LinkedIn.' },
    { t: 'Referral partner content.', d: 'Guides and posts made for attorneys and other professionals who refer you.' },
    { t: 'Website and landing pages.', d: 'A clear page for your niche with one obvious next step.' },
    { t: 'Email and CRM follow-up.', d: 'Automated nurture that keeps long-cycle leads warm.' },
    { t: 'Tracking.', d: 'Where every lead came from, so you spend on what works.' },
  ],
  proofH2: 'Real Agents.',
  proofH2Em: 'Real Results.',
  proof: [
    {
      t: '1M+ views, probate real estate',
      d: 'A probate real estate professional had the expertise but no system to scale it. We built an educational video strategy and optimized every upload for search. Result: 8,000+ subscribers, over a million views, and YouTube is now her #1 source of inbound clients. Zero cold outreach.',
    },
    {
      t: '90%+ retention, national designation program',
      d: 'A national real estate designation program needed its marketing rebuilt: funnels, automated campaigns, standardized systems and AEO positioning. We documented, automated and scaled it. Result: 90%+ agent retention and nationwide visibility.',
    },
  ],
  clients:
    'Real estate clients include MK Group Properties and The Ilumni Institute, home of the CDRE designation.',
  boostText:
    'Video, SEO and social are only tactics on their own. BOOST365© connects them: a clear niche brand, content that gets found, outreach to referral partners, funnels that book appointments, and tracking that shows what is paying off.',
  faqs: [
    {
      q: 'Do you only work with probate and divorce agents?',
      a: 'No. Probate and divorce are where our results are deepest, but the system works for any agent with a defined niche: seniors, investors, relocation, luxury, the legal community. If you have expertise and a target audience, we can build around it.',
    },
    {
      q: 'Do I have to be on camera?',
      a: 'Video works best when it is you, because people hire the agent they already trust. We make it easy: one focused recording session, and we handle the editing, clips, titles and publishing.',
    },
    {
      q: 'How long before video and SEO bring in leads?',
      a: 'It depends on your niche and where you are starting from. Content compounds, so every month builds on the last. We set clear benchmarks on day one so you are never guessing.',
    },
    {
      q: 'Can you guarantee a certain number of listings?',
      a: 'No. Nobody honest can. What we control is the system: being visible in your niche, being easy to trust, and following up every time. The results above show what that system can do.',
    },
  ],
  ctaH2: 'Ready to Own',
  ctaH2Em: 'Your Niche?',
}

export default function RealEstateIndustryPage() {
  return <IndustryPage content={content} />
}
