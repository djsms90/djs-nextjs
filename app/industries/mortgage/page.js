import IndustryPage, { industryMeta } from '../../../components/IndustryPage'

const path = '/industries/mortgage'
const description =
  'Marketing for loan officers and mortgage teams. Video-first content, social and follow-up that turn your expertise into borrower and referral partner leads.'

export const metadata = industryMeta({
  title: 'Loan Officer & Mortgage Marketing | DJS Marketing',
  description,
  path,
})

const content = {
  path,
  description,
  crumb: 'Mortgage',
  serviceName: 'Loan Officer and Mortgage Marketing',
  audience: 'Mortgage loan originators and mortgage teams',
  eyebrow: 'Marketing for Loan Officers',
  h1: 'Rates Are a Commodity.',
  h1Em: 'Your Expertise Is Not.',
  lede:
    'Borrowers can get a rate quote anywhere. What they cannot get anywhere is a loan officer who explains their situation clearly, especially when it is complicated.',
  heroText:
    'We build video-first marketing systems for loan officers: long-form content that shows what you know, short clips that keep you visible, and follow-up that stays in touch until borrowers and agents are ready.',
  panel: [
    { t: 'Get known', d: 'A clear specialty borrowers and agents remember.' },
    { t: 'Get found', d: 'Video and content that answers the questions borrowers ask.' },
    { t: 'Get the call', d: 'Follow-up that turns viewers into applications.' },
  ],
  problemsH2: 'Great Loan Officer.',
  problemsH2Em: 'Generic Marketing.',
  problems: [
    {
      t: 'You compete on rate alone',
      d: 'Rate shoppers leave for a quarter point. Borrowers who trust your expertise stay and send their friends.',
    },
    {
      t: 'Realtor partners forget you',
      d: 'Agents refer the loan officer they think of first. Consistent, useful content keeps that you.',
    },
    {
      t: 'Your best borrowers are complex',
      d: 'Self-employed, first-time, life transitions. Those borrowers need explanation, and explanation is content.',
    },
    {
      t: 'Content takes time you do not have',
      d: 'You are closing loans. We turn one recording session into weeks of posts, clips and emails.',
    },
  ],
  systemH2: 'Record Once.',
  systemH2Em: 'Show Up Everywhere.',
  systemText: [
    'The system starts with long-form video, because that is where your expertise shows. Then we cut it into short clips, posts and emails so one session keeps you visible for weeks.',
    'Mortgage advertising is regulated, and your company has its own review process. We build that review into the workflow so nothing goes live without approval.',
  ],
  checklist: [
    { t: 'Long-form video.', d: 'Episodes built around the borrower situations you specialize in.' },
    { t: 'Short-form clips and social.', d: 'Edited for Instagram, Facebook, LinkedIn and YouTube Shorts.' },
    { t: 'Referral partner content.', d: 'Material realtors and other partners can share with their clients.' },
    { t: 'Landing pages.', d: 'One clear page per specialty with an obvious next step.' },
    { t: 'Email follow-up.', d: 'Nurture for borrowers who are months away from buying.' },
    { t: 'Tracking.', d: 'Which content brings in conversations, so you do more of it.' },
  ],
  proofH2: 'Built for',
  proofH2Em: 'How Loan Officers Win.',
  proof: [
    {
      t: 'Video-first content system',
      d: 'For a loan originator at a national lender, we built a system around long-form video edited into short clips, recorded in focused sessions so it fits a production schedule.',
    },
    {
      t: 'Specialty positioning',
      d: 'Content is organized around the borrowers she serves best: self-employed borrowers, first-time buyers, complex loan scenarios and clients going through life transitions.',
    },
  ],
  clients: 'Mortgage clients include The Putnam Group.',
  boostText:
    'Posting clips is a tactic. BOOST365© makes it a system: a clear specialty brand, content that gets found, outreach to referral partners, funnels that turn interest into applications, and tracking that shows what is paying off.',
  faqs: [
    {
      q: 'Do you handle mortgage advertising compliance?',
      a: 'Your company and its compliance team have the final say on what goes out under your license. We build their review into the workflow and nothing is published without approval.',
    },
    {
      q: 'Do I have to be on camera?',
      a: 'Video works best when it is you, because borrowers want to know who they are trusting with the biggest purchase of their lives. We make it efficient: focused recording sessions, and we handle editing and publishing.',
    },
    {
      q: 'Can you guarantee a number of closed loans?',
      a: 'No. Nobody honest can. What we control is the system: being visible, being trusted, and following up consistently. Then we track what it produces.',
    },
    {
      q: 'Do you work with loan officers outside San Diego?',
      a: 'Yes. We are based in San Diego, but our mortgage work is not limited to it. Fit matters more than location.',
    },
  ],
  ctaH2: 'Ready to Be More',
  ctaH2Em: 'Than a Rate Quote?',
}

export default function MortgageIndustryPage() {
  return <IndustryPage content={content} />
}
