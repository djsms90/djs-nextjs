import IndustryPage, { industryMeta } from '../../../components/IndustryPage'

const path = '/industries/law-firms'
const description =
  'Marketing for law firms and bar associations. Websites, SEO, email and event campaigns that build trust, fill webinars and bring in clients and members.'

export const metadata = industryMeta({
  title: 'Law Firm & Bar Association Marketing | DJS Marketing',
  description,
  path,
})

const content = {
  path,
  description,
  crumb: 'Law Firms',
  serviceName: 'Law Firm and Bar Association Marketing',
  audience: 'Law firms, attorneys and bar associations',
  eyebrow: 'Marketing for Law Firms & Bar Associations',
  h1: 'Attorneys Win on Trust.',
  h1Em: 'Your Marketing Should Earn It.',
  lede:
    'People do not hire a lawyer from a billboard slogan. They hire the one who already answered their question, clearly, before they ever picked up the phone.',
  heroText:
    'We build marketing systems for law firms and bar associations: websites that explain what you do in plain English, content that gets found, and email and event campaigns that keep your name in front of the right people.',
  panel: [
    { t: 'Get trusted', d: 'Clear, credible positioning that sounds like you, not a template.' },
    { t: 'Get found', d: 'Answers to the questions clients search before they call.' },
    { t: 'Get the call', d: 'One obvious next step on every page and in every email.' },
  ],
  problemsH2: 'Great Lawyers.',
  problemsH2Em: 'Forgettable Marketing.',
  problems: [
    {
      t: 'Your site reads like a brief',
      d: 'Legal jargon confuses the people you want to help. If a page confuses a person, it confuses Google too.',
    },
    {
      t: 'Referrals are your whole pipeline',
      d: 'Referrals from other attorneys are gold. A system brings in clients who are searching and have never heard your name.',
    },
    {
      t: 'Events and webinars need a crowd',
      d: 'Associations and firms run great programs that too few people hear about. Promotion has to be planned, not an afterthought.',
    },
    {
      t: 'Nobody owns the marketing',
      d: 'Partners are billing. Board members are volunteers. Marketing slips. We take it off your plate and report back.',
    },
  ],
  systemH2: 'Credibility,',
  systemH2Em: 'Built Into Every Touchpoint.',
  systemText: [
    'Legal marketing has rules, and your reputation is the asset. Everything we create goes to you for approval before it goes live. You decide what is said in your name.',
    'Some firms need a new foundation. Others need what they have tightened. We figure out which on the strategy call.',
  ],
  checklist: [
    { t: 'Website design.', d: 'Practice-area pages written in plain English with a clear next step.' },
    { t: 'SEO, AEO and GEO.', d: 'Content that answers what clients ask Google and AI tools before they hire.' },
    { t: 'Email campaigns.', d: 'Newsletters and event promotion for clients, members and referral partners.' },
    { t: 'Webinar and event marketing.', d: 'Registration pages, promotion sequences and follow-up.' },
    { t: 'Social media.', d: 'Consistent, professional presence without partners writing posts at midnight.' },
    { t: 'Tracking.', d: 'Which channels bring inquiries and registrations, so budget goes where it works.' },
  ],
  proofH2: 'Trusted by the',
  proofH2Em: 'Legal Community.',
  proof: [
    {
      t: 'Bar associations',
      d: 'Two San Diego bar associations trust us with their marketing. Associations need what firms need: a clear message, a reason for members to stay engaged, and events people actually attend.',
    },
    {
      t: 'Attorney-facing campaigns',
      d: 'We run email and webinar campaigns aimed at family law attorneys for a national education program, including promotion for an attorney-hosted webinar series.',
    },
    {
      t: 'Content for referral partners',
      d: 'We have produced attorney-facing guides on divorce, probate, bankruptcy and elder law for a real estate professional who serves the legal community.',
    },
  ],
  clients:
    'Legal clients include Wellspring Law, the Arab American Bar Association of San Diego, and the San Diego Unity Bar.',
  boostText:
    'A website alone does not build a practice. BOOST365© connects a clear brand, content that gets found, outreach to clients and referral sources, funnels that turn inquiries into consultations, and tracking that shows what is working.',
  faqs: [
    {
      q: 'Do you follow attorney advertising rules?',
      a: 'Attorney advertising is regulated, and you are responsible for what goes out in your name. That is why nothing we create is published without your review and approval. We write plainly and avoid promising outcomes.',
    },
    {
      q: 'Do you work with bar associations and nonprofits, not just firms?',
      a: 'Yes. Associations need the same things firms do: a clear website, member communication, and promotion for events and programs. We work with both.',
    },
    {
      q: 'Can you guarantee more cases or members?',
      a: 'No. Nobody honest can. What we control is the system: being found, being trusted, and making the next step obvious. Then we track what it produces.',
    },
    {
      q: 'Do you only work with San Diego law firms?',
      a: 'We are based in San Diego and work with firms and associations here, but location is not the filter. Fit is.',
    },
  ],
  ctaH2: 'Ready to Be the Firm',
  ctaH2Em: 'They Already Trust?',
}

export default function LawFirmsIndustryPage() {
  return <IndustryPage content={content} />
}
