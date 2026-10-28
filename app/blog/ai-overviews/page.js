import BlogLayout from '../../../components/BlogLayout'
import { blogMeta, articleSchema } from '../../../lib/seo'

export const metadata = blogMeta({
  title: 'Google AI Overviews: What Businesses Should Know',
  description: 'Learn what Google AI Overviews are, how normal SEO supports eligibility, and how to measure search performance without promises of AI placement.',
  slug: 'ai-overviews',
  date: '2026-04-25',
  modified: '2026-10-28',
})

export default function BlogPost() {
  return (
    <BlogLayout
      tag="SEO & AI Search"
      title="Google AI Overviews: What Businesses Should Know"
      date="April 25, 2026"
      updated="October 28, 2026"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Google AI Overviews: What Businesses Should Know', description: metadata.description, slug: 'ai-overviews', date: '2026-04-25', modified: '2026-10-28', category: 'SEO & AI Search' })) }} />

      <div dangerouslySetInnerHTML={{ __html: `<p><strong>Google AI Overviews are AI-generated summaries that appear for some searches and may include links to supporting websites.</strong> There is no special submission process or required AI schema. Pages must meet Google's normal search requirements, be indexed, and be eligible to appear with a snippet to be considered as supporting links.</p>
    <h2>What a Change in Search Traffic Can Mean</h2>
    <p>You are ranking on page one of Google. You've had that spot for months. Your content is solid. But your traffic is down. Way down. And you cannot figure out why.</p>
    <p>An AI Overview may be one factor, but a traffic change alone does not establish the cause. Seasonality, demand, competitors, site changes, and other search updates can also affect performance.</p>
    <p>Check which pages and queries changed in Search Console, then compare traffic with qualified inquiries and bookings. Our guide to <a href="/blog/zero-click-search">zero-click search</a> explains why website visits are only part of the picture.</p>

    <h2>What Are Google AI Overviews?</h2>
    <p>AI Overviews summarize information and provide links for further exploration. They do not appear for every query, and their position is not fixed above every ad or other search feature.</p>
    <p>Google says AI Overviews and AI Mode may issue related searches across subtopics to develop a response. The responses and supporting links can differ between features and over time.</p>
    <p>Some users continue to the linked sources; others may find enough information in the summary. Do not assume every AI Overview prevents a visit.</p>

    <h2>Use Your Own Performance Data</h2>
    <p>Industry studies can be useful, but their samples, queries, countries, and time periods differ. A percentage from one study is not a forecast for every business.</p>
    <p>Google includes traffic from AI Overviews and AI Mode within Search Console's Web performance reporting. This is not a separate report identifying every AI citation. Combine those reports with referral data, qualified inquiries, and booking outcomes.</p>

    <h2>Start with Your Clients' Questions</h2>
    <p>These examples illustrate topics to consider; they are not evidence that a particular query currently triggers an AI Overview:</p>

    <ul>
      <li><strong>Real estate professionals:</strong> "How does probate work in California?" or "What is a divorce real estate specialist?" Provide accurate, jurisdiction-appropriate information within your expertise.</li>
      <li><strong>Legal and financial professionals:</strong> "How do I find a probate attorney?" or "What does a mortgage broker do?" Include relevant qualifications and avoid unsupported advice.</li>
      <li><strong>Service businesses and agencies:</strong> Explain your services, process, and common decision points clearly enough that a prospect can evaluate whether you are a fit.</li>
    </ul>

    <div className="callout">
      <strong>The shift in mindset</strong>
      <p>AI citations can provide another source of visibility alongside traditional rankings. Their value depends on whether they reach relevant prospects and contribute to qualified inquiries or sales. A citation is not automatically more valuable than a first-place ranking.</p>
    </div>

    <h2>5 Strategies to Win in an AI Overview World</h2>

    <div className="strategy-card">
      <div className="num">01</div>
      <h3>Answer Questions Directly and Immediately</h3>
      <p>Help readers find the answer without working through an unrelated introduction. Clear content is useful whether someone arrives from a traditional result, an AI feature, or a referral.</p>
      <div className="fix-box">
        <strong>The Fix</strong>
        <p>Lead with the direct answer in the first 1-2 sentences. Then expand. Think: concise statement → supporting context → depth. Structure every piece of content this way.</p>
      </div>
    </div>

    <div className="strategy-card">
      <div className="num">02</div>
      <h3>Build Topical Authority, Not Just Individual Posts</h3>
      <p>Cover related questions when you have useful expertise to contribute, rather than repeating the same information across many pages.</p>
      <div className="fix-box">
        <strong>The Fix</strong>
        <p>A useful hub can connect guides on probate-sale steps, jurisdiction-specific timelines, and professional roles. Each guide should provide distinct value, be reviewed for accuracy, and link to related resources in context.</p>
      </div>
    </div>

    <div className="strategy-card">
      <div className="num">03</div>
      <h3>Optimize for E-E-A-T</h3>
      <p>Show who created your content, explain relevant expertise, and make claims that readers can verify. Do not treat an E-E-A-T checklist as a formula that guarantees selection by an AI feature.</p>
      <div className="fix-box">
        <strong>The Fix</strong>
        <p>Attribute content to its real author, cite reliable sources, and correct outdated information. Include genuine first-hand examples when you have permission to share them. Do not manufacture credentials or results.</p>
      </div>
    </div>

    <div className="strategy-card">
      <div className="num">04</div>
      <h3>Use Structured Data and Schema Markup</h3>
      <p>Relevant structured data can help search engines understand a page. It must match visible information. Google does not require special schema for AI Overviews or AI Mode.</p>
      <div className="fix-box">
        <strong>The Fix</strong>
        <p>Review existing markup for accuracy and use only types that fit the page. Do not mark up a service description as an article or add irrelevant FAQ markup merely to target AI features.</p>
      </div>
    </div>

    <div className="strategy-card">
      <div className="num">05</div>
      <h3>Publish Proprietary Insight, Not Generic Content</h3>
      <p>Specific, well-supported experience can make content more useful than generic advice. That is a reason to improve the content, not a promise of an AI citation.</p>
      <div className="fix-box">
        <strong>The Fix</strong>
        <p>Explain a real client problem, your approach, and what can be documented about the outcome. Use client names, figures, and examples only when accurate and approved for publication.</p>
      </div>
    </div>

    <h2>The Bigger Picture: This Isn't Going Away</h2>
    <p>Strong SEO foundations still matter. Keep pages accessible, explain your business clearly, publish helpful content, and measure whether the work contributes to meaningful business outcomes.</p>
    <p>Our <a href="/blog/aeo">answer engine optimization guide</a> explains the terminology, and our <a href="/services/seo">SEO and AI-search optimization service</a> describes how it fits into a wider marketing system.</p>

    <div className="sources-box">
      <h2>Sources</h2>
      <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Google Search Central: AI features and your website</a>
      <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer">Google Search Central: General structured data guidelines</a>
      <a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" target="_blank" rel="noopener noreferrer">Google Search Central: Link best practices</a>
    </div>` }} />
    </BlogLayout>
  )
}
