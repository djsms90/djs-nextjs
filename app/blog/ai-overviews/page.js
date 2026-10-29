import BlogLayout from '../../../components/BlogLayout'
import { blogMeta, articleSchema, blogBreadcrumb, JsonLd } from '../../../lib/seo'

export const metadata = blogMeta({
  seoTitle: 'Google AI Overviews: How to Get Your Brand Cited',
  title: 'Google AI Overviews Are Stealing Your Clicks: Here Is How to Fight Back',
  description: 'AI Overviews are answering questions before users click anything. Here is the strategy to get your brand cited inside those answers.',
  slug: 'ai-overviews',
  date: '2026-04-21',
  modified: '2026-10-28',
})

export default function BlogPost() {
  return (
    <BlogLayout
      slug="ai-overviews"
      tag="SEO & AI Search"
      title="Google AI Overviews Are Stealing Your Clicks: Here Is How to Fight Back"
      date="April 21, 2026"
      updated="October 28, 2026"
      readTime="6 min read"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Google AI Overviews Are Stealing Your Clicks: Here Is How to Fight Back', description: 'AI Overviews are answering questions before users click anything. Here is the strategy to get your brand cited inside those answers.', slug: 'ai-overviews', date: '2026-04-21', modified: '2026-10-28', category: 'SEO & AI Search', wordCount: 1100 })) }} />
      <JsonLd data={blogBreadcrumb({ title: 'Google AI Overviews Are Stealing Your Clicks: Here Is How to Fight Back', slug: 'ai-overviews' })} />

      <div dangerouslySetInnerHTML={{ __html: `<h2>The #1 Website Traffic Problem Nobody's Talking About</h2>
    <p>You are ranking on page one of Google. You've had that spot for months. Your content is solid. But your traffic is down. Way down. And you cannot figure out why.</p>
    <p>Here Is why: Google is not sending your visitors to you anymore.</p>
    <p>They're answering the question <em>for</em> them. Right there on the search page. No click required.</p>
    <p>That's what <strong>Google AI Overviews</strong> do. And if you have not adjusted your strategy to account for them, you are competing in a game that changed the rules on you.</p>

    <h2>What Are Google AI Overviews?</h2>
    <p>AI Overviews (previously called Search Generative Experience, or SGE) are AI-generated answer summaries that appear at the <em>very top</em> of Google search results, above every organic ranking and every featured snippet.</p>
    <p>Google's AI (powered by Gemini) pulls from multiple websites, synthesizes the information, and delivers a complete answer directly on the page. The user never has to click. The user never visits your site.</p>
    <p>For searchers: great. For businesses: brutal.</p>

    <h2>The Numbers Are Not Pretty</h2>
    <p>This is not speculation. The data is in.</p>

    <div class="stat-grid">
      <div class="stat-card">
        <div class="num">61%</div>
        <div class="label">Drop in organic click-through rate on searches with an AI Overview, from 1.76% to 0.61% across 3,119 queries (Seer Interactive)</div>
      </div>
      <div class="stat-card">
        <div class="num">48%</div>
        <div class="label">Of the queries BrightEdge tracks now show an AI Overview, up from 31% a year earlier. Nearly half.</div>
      </div>
      <div class="stat-card">
        <div class="num">58%</div>
        <div class="label">Lower click-through rate for the #1 ranking page when an AI Overview is present, across 300,000 keywords (Ahrefs)</div>
      </div>
      <div class="stat-card">
        <div class="num">25%</div>
        <div class="label">Projected drop in traditional search engine volume by 2026. That was Gartner's forecast in 2024. It is 2026.</div>
      </div>
    </div>

    <p>If your business depends on organic Google traffic, and most service businesses do, this is a five-alarm fire.</p>

    <h2>Who's Getting Hit Hardest</h2>
    <p>Some industries are feeling this more than others. If your business or your clients fall into any of these categories, you are already in the danger zone:</p>

    <ul>
      <li><strong>Real estate professionals:</strong> Buyers and sellers search "how does probate work in California" or "what is a divorce real estate specialist." AI Overviews now answer those questions completely. The person who used to find your blog now never sees your site.</li>
      <li><strong>Legal and financial professionals:</strong> "How to find a probate attorney," "what does a mortgage broker do," "steps in a divorce home sale." All prime AI Overview territory.</li>
      <li><strong>Service businesses and agencies:</strong> Educational and informational content that drives top-of-funnel traffic gets hit hardest. If you built an SEO strategy on being the go-to answer, Google has positioned itself as the answer instead.</li>
    </ul>

    <div class="callout">
      <strong>The shift in mindset</strong>
      <p>The goal is no longer just to <em>rank</em>. The goal is to be <strong>cited</strong> inside the AI Overview itself. When you are a cited source, your brand appears inside Google's answer at the top of the page, with a link back to your site. That's more valuable than a #1 ranking. Most of your competitors have not figured this out yet.</p>
    </div>

    <h2>5 Strategies to Win in an AI Overview World</h2>

    <div class="strategy-card">
      <div class="num">01</div>
      <h3>Answer Questions Directly and Immediately</h3>
      <p>Google's AI rewards content that gets to the point. If your article answers "What is a divorce real estate specialist?" with two paragraphs of preamble before actually answering, you are getting skipped.</p>
      <div class="fix-box">
        <strong>The Fix</strong>
        <p>Lead with the direct answer in the first 1-2 sentences. Then expand. Think: concise statement → supporting context → depth. Structure every piece of content this way.</p>
      </div>
    </div>

    <div class="strategy-card">
      <div class="num">02</div>
      <h3>Build Topical Authority, Not Just Individual Posts</h3>
      <p>Google does not just look at one article when deciding who to cite. It evaluates whether your <em>entire website</em> is a credible, comprehensive resource on a given subject.</p>
      <div class="fix-box">
        <strong>The Fix</strong>
        <p>Build content clusters. A hub page on "Probate Real Estate" that links to supporting articles on "How to Sell a Home in Probate," "Probate Timelines by State," and "Probate Real Estate Agent vs. Traditional Agent." When Google sees depth and consistency, it trusts you as an authority.</p>
      </div>
    </div>

    <div class="strategy-card">
      <div class="num">03</div>
      <h3>Optimize for E-E-A-T</h3>
      <p>Experience, Expertise, Authoritativeness, Trust. This is the yardstick Google uses to judge whose content deserves trust. Even the giants are not immune. HubSpot's blog lost an estimated 76-81% of its organic traffic between early 2024 and early 2025, according to Ahrefs, Semrush and Sistrix data. HubSpot rebuilt its content around clear, simple semantics. The result, by HubSpot's own report? A 642% increase in AI citations.</p>
      <div class="fix-box">
        <strong>The Fix</strong>
        <p>Publish content with attributed authors who have real credentials. Use schema markup to identify your expertise. Get cited in third-party sources: directories, press mentions, local news. Refresh existing content regularly to stay "credible" in AI eyes.</p>
      </div>
    </div>

    <div class="strategy-card">
      <div class="num">04</div>
      <h3>Use Structured Data and Schema Markup</h3>
      <p>Schema markup is code that tells Google exactly what your content is about: FAQ schema, how-to schema, local business schema, professional service schema. It is like handing Google a clean, organized map of your content. Is it a magic citation button? No. Ahrefs tracked 1,885 pages that added schema and found no major jump in AI citations from schema alone. It is table stakes: it removes the guesswork about who you are, and the content still has to earn the citation.</p>
      <div class="fix-box">
        <strong>The Fix</strong>
        <p>Add FAQ schema to every page that answers common questions. Add local business schema with your specialization (e.g., "Probate Real Estate Agent" or "Divorce Mortgage Specialist"). If implementation feels daunting, your marketing team can handle it in a single technical SEO session.</p>
      </div>
    </div>

    <div class="strategy-card">
      <div class="num">05</div>
      <h3>Publish Proprietary Insight, Not Generic Content</h3>
      <p>The content that gets cited in AI Overviews is specific, credible, and hard to replicate. Generic "10 tips for home sellers" posts are a dime a dozen. Google will not cite you when five bigger sites already said the same thing better.</p>
      <div class="fix-box">
        <strong>The Fix</strong>
        <p>Draw on your actual experience: "What I have seen in 50+ probate real estate transactions in San Diego." "The 3 mistakes divorcing couples make when selling their home, from a certified specialist." When no one else can replicate what you wrote, you become the source.</p>
      </div>
    </div>

    <h2>The Bigger Picture: This Isn't Going Away</h2>
    <p>Google's AI search is not a test phase. It is the future of search. Businesses that adapt now, shifting from chasing rankings to earning citations, will build a compounding advantage over the next 12-24 months.</p>
    <p>The businesses that do not? They'll keep watching their traffic slide and wonder what happened.</p>

    <blockquote>"The goal is not to rank #1 anymore. The goal is to be the source Google quotes at the top of the page."</blockquote>

    <p>Want your business positioned to be the source Google quotes? See how our <a href="/services/seo">SEO, AEO &amp; GEO service</a> works.</p>


    <div class="sources-box">
      <h2>Sources</h2>

      <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener">Google Search Central: AI Features and Your Website</a>
      <a href="https://www.seerinteractive.com/blog/aio-impact-on-google-ctr-september-2025-update" target="_blank" rel="noopener">Seer Interactive: AI Overviews Impact on Google CTR, September 2025 Update</a>
      <a href="https://almcorp.com/blog/google-ai-overviews-surge-9-industries/" target="_blank" rel="noopener">ALM Corp: Google AI Overviews Surge, BrightEdge Data 2026</a>
      <a href="https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/" target="_blank" rel="noopener">Ahrefs: Update: AI Overviews Reduce Clicks by 58% (February 2026)</a>
      <a href="https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents" target="_blank" rel="noopener">Gartner: Search Engine Volume Will Drop 25% by 2026 (February 2024)</a>
      <a href="https://www.lyntonweb.com/library/hubspot-aeo-traffic-drop" target="_blank" rel="noopener">Lynton: HubSpot's Blog Traffic Drop</a>
      <a href="https://blog.hubspot.com/marketing/how-simple-semantics-increased-our-ai-citations-by-642-new-results" target="_blank" rel="noopener">HubSpot: How Simple Semantics Increased Our AI Citations by 642%</a>
      <a href="https://ahrefs.com/blog/schema-ai-citations/" target="_blank" rel="noopener">Ahrefs: Does Schema Increase AI Citations? (May 2026)</a>
      <a href="https://www.digivate.com/blog/aeo/how-to-rank-in-google-ai-overviews-2026-2/" target="_blank" rel="noopener">Digivate: Optimizing Content for Google AI Overviews 2026</a>
    </div>` }} />
    </BlogLayout>
  )
}
