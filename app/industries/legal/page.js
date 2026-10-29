import IndustryPage, { industryMeta } from '../../../components/IndustryPage'

const path = '/industries/legal'
const description =
  'Websites and marketing for nonprofit bar associations and law firms. Clear sites, member communication and event promotion for attorneys, judges and members.'

export const metadata = industryMeta({
  title: 'Bar Association & Law Firm Marketing | DJS Marketing',
  description,
  path,
})

const content = {
  path,
  description,
  crumb: 'Legal',
  serviceName: 'Bar Association and Law Firm Marketing',
  audience: 'Nonprofit bar associations, attorneys and law firms',
  eyebrow: 'Marketing for Bar Associations & Law Firms',
  h1: 'Websites and Marketing',
  h1Em: 'for the Legal Community.',
  lede:
    'Bar associations run on volunteers. Attorneys and judges give their time to lead them. Nobody has hours left over to fix the website, promote the gala or chase down member renewals.',
  heroText:
    'We build websites and marketing systems for nonprofit bar associations in San Diego, and for attorneys who run their own firms. Clear sites, consistent communication, and events people actually show up to.',
  panel: [
    { t: 'A site that works', d: 'Mission, membership, events and sponsors, easy to find and easy to update.' },
    { t: 'Members who stay engaged', d: 'Email and social that keep members, attorneys and judges in the loop.' },
    { t: 'Events that fill', d: 'Promotion for galas, CLEs and mixers, planned instead of last-minute.' },
  ],
  problemsH2: 'Great Mission.',
  problemsH2Em: 'Outdated Website.',
  problems: [
    {
      t: 'The website is years behind',
      d: 'Old board members, past events and broken links tell visitors the association is inactive, even when it is not.',
    },
    {
      t: 'Every board inherits a mess',
      d: 'Boards turn over every year. Logins, files and know-how walk out the door with them. The new board starts from scratch.',
    },
    {
      t: 'Events depend on word of mouth',
      d: 'Galas, installation dinners and CLEs need registration pages, promotion and reminders, not one email a week before.',
    },
    {
      t: 'Sponsors want to see value',
      d: 'Firms that sponsor want visibility. A professional site and real promotion make sponsorship easier to sell.',
    },
  ],
  systemH2: 'Built for Volunteer Boards',
  systemH2Em: 'and Busy Attorneys.',
  systemText: [
    'An association website has to outlast the board that built it. We build sites that are simple to update, with everything documented, so next year’s board is not starting over.',
    'For attorneys with their own practice, the job is the same at a smaller scale: a clear site that explains what you do in plain English and makes it easy to call. Nothing is published in your name without your approval.',
  ],
  checklist: [
    { t: 'Website design and rebuilds.', d: 'Membership, events, sponsors and leadership, organized so visitors find what they need.' },
    { t: 'Events and registration.', d: 'Pages and promotion for galas, installation dinners, CLEs and mixers.' },
    { t: 'Member communication.', d: 'Email newsletters and announcements that members actually open.' },
    { t: 'Social media.', d: 'A steady, professional presence without a board member posting at midnight.' },
    { t: 'Handoff and documentation.', d: 'Logins, files and how-tos in one place, so the next board inherits a system.' },
    { t: 'Law firm websites and SEO.', d: 'For attorneys: plain-English practice pages, search visibility and a clear next step.' },
  ],
  proofH2: 'Trusted by the',
  proofH2Em: 'San Diego Legal Community.',
  proof: [
    {
      t: 'San Diego Unity Bar',
      d: 'We are building the website for the San Diego Unity Bar, which brings together San Diego’s diverse bar associations, including the Arab American Bar Association of San Diego, the Korean American Bar Association of San Diego and the Filipino American Lawyers of San Diego.',
    },
    {
      t: 'Attorneys with their own firms',
      d: 'We also work with attorneys who run their own practices, including Wellspring Law, a professional license defense firm.',
    },
  ],
  clients:
    'Legal clients include the San Diego Unity Bar, the Arab American Bar Association of San Diego and Wellspring Law.',
  boostText:
    'A new website is a start. BOOST365© turns it into a system: a clear brand, a site people can find, consistent outreach to members and the community, registration and sign-up paths that work, and tracking that shows what is paying off.',
  faqs: [
    {
      q: 'Do you work with nonprofit bar associations?',
      a: 'Yes. Most of our legal work is with nonprofit bar associations in San Diego. We understand volunteer boards, annual turnover, sponsor relationships and event-driven calendars.',
    },
    {
      q: 'Can the next board update the website without you?',
      a: 'Yes. We build sites that are simple to update and document how everything works, so a new board can take over without starting from scratch.',
    },
    {
      q: 'Do you also work with individual attorneys and law firms?',
      a: 'Yes. We work with attorneys who run their own firms, including professional license defense. Attorney advertising is regulated, so nothing is published in your name without your review and approval.',
    },
    {
      q: 'Can you guarantee more members or cases?',
      a: 'No. Nobody honest can. What we control is the system: a site people can use, consistent communication and a clear next step. Then we track what it produces.',
    },
  ],
  ctaH2: 'Ready for a Website',
  ctaH2Em: 'Your Board Can Be Proud Of?',
}

export default function LegalIndustryPage() {
  return <IndustryPage content={content} />
}
