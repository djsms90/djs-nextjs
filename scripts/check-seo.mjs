import assert from 'node:assert/strict'

// Run against a locally running production build. Never submits forms or follows
// external booking links. Override only when deliberately checking another host.
const base = (process.env.SEO_CHECK_BASE_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')
const site = 'https://djsmarketingservices.com'
const excluded = ['/blog/linkedin-dms', '/blog/pmax', '/blog/youtube', '/blog/local-seo', '/blog/boost365']
const updated = ['/blog/aeo', '/blog/geo-vs-seo', '/blog/ai-overviews', '/blog/zero-click-search']
const services = ['/services/seo', '/services/website-design']

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([-\w:]+)\s*=\s*"([^"]*)"/g)].map((m) => [m[1], m[2]]))
}

function meta(html, name) {
  return [...html.matchAll(/<meta\b[^>]*>/g)]
    .map((m) => attributes(m[0]))
    .find((a) => a.name === name || a.property === name)?.content
}

async function page(path) {
  const response = await fetch(`${base}${path}`, { redirect: 'manual' })
  assert.equal(response.status, 200, `${path}: expected HTTP 200`)
  return response.text()
}

const sitemap = await page('/sitemap.xml')
assert.match(sitemap, /<urlset\b/, 'Sitemap must be XML, not an HTML fallback')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URL')
const paths = urls.map((url) => {
  const parsed = new URL(url)
  assert.equal(parsed.origin, site, 'Unexpected canonical host in sitemap')
  return parsed.pathname
})
for (const path of services) assert.ok(paths.includes(path), `${path}: missing from sitemap`)
for (const path of excluded) assert.ok(!paths.includes(path), `${path}: unfinished article in sitemap`)

const titles = new Set()
const documents = new Map()
const internalPaths = new Set()
for (const path of paths) {
  const html = await page(path)
  documents.set(path, html)
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
  assert.ok(title, `${path}: missing title`)
  assert.ok(!titles.has(title), `${path}: duplicate title`)
  titles.add(title)
  assert.ok(meta(html, 'description'), `${path}: missing description`)
  assert.ok(!/noindex/i.test(meta(html, 'robots') || ''), `${path}: sitemap page is noindex`)
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: expected one H1`)
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((m) => attributes(m[0])).filter((a) => a.rel === 'canonical')
  assert.equal(canonical.length, 1, `${path}: expected one canonical`)
  assert.equal(canonical[0].href.replace(/\/$/, ''), `${site}${path}`.replace(/\/$/, ''), `${path}: wrong canonical`)

  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
  assert.ok(schemas.length, `${path}: missing inherited organization/site markup`)
  if (updated.includes(path)) {
    const article = schemas.find((schema) => schema['@type'] === 'Article')
    assert.ok(article, `${path}: missing Article markup`)
    assert.equal(article.dateModified, '2026-10-28')
    assert.equal(meta(html, 'article:modified_time')?.slice(0, 10), article.dateModified)
    assert.ok(html.includes('Updated '), `${path}: missing visible update label`)
    assert.ok(html.includes('developers.google.com/search/docs/appearance/ai-features'), `${path}: missing official source`)
    assert.ok(html.includes('/services/seo'), `${path}: missing service link`)
    if (path === '/blog/ai-overviews') {
      assert.equal(article.datePublished, '2026-04-21')
      assert.ok(html.includes('April 21, 2026'))
    }
  }
  for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(tag[0]).href
    if (!href) continue
    const target = new URL(href, `${site}${path}`)
    if (target.origin === site && target.pathname !== path) internalPaths.add(target.pathname)
  }
  if (services.includes(path)) {
    assert.equal(meta(html, 'og:url'), `${site}${path}`)
    assert.ok(meta(html, 'og:image'), `${path}: missing sharing image`)
    assert.ok(html.includes('https://meetings-na2.hubspot.com/sweis'), `${path}: missing existing booking URL`)
    assert.ok(!/<form\b/.test(html), `${path}: service page unexpectedly includes a form`)
    assert.ok(html.includes('/privacy-policy') && html.includes('/terms'), `${path}: missing legal links`)
  }
  console.log(`PASS ${path}: HTTP, metadata, H1, canonical, robots, JSON-LD`)
}

for (const path of services) {
  assert.ok(documents.get('/').includes(`href="${path}"`), `Homepage does not link to ${path}`)
}
for (const path of excluded) {
  const html = await page(path)
  assert.match(meta(html, 'robots') || '', /noindex/i, `${path}: unfinished article became indexable`)
  assert.ok(!documents.get('/blog').includes(`href="${path}"`), `${path}: unfinished article appears in listing`)
}
for (const path of internalPaths) {
  if (!documents.has(path)) await page(path)
}
const home = documents.get('/')
const homeSchemas = [...home.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
const question = homeSchemas.find((s) => s['@type'] === 'FAQPage')?.mainEntity
  .find((q) => q.name === 'Do you help businesses appear in AI-generated answers?')
assert.ok(question, 'Missing new FAQ in structured data')
const visibleHome = home.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')
assert.ok(visibleHome.includes(question.acceptedAnswer.text), 'FAQ markup does not match visible answer')
const robots = await page('/robots.txt')
assert.match(robots, /User-agent:\s*\*/)
assert.ok(robots.includes(`${site}/sitemap.xml`))
assert.ok(!robots.includes('Disallow: /_next'), 'Next.js assets are blocked')
console.log(`PASS ${paths.length} sitemap pages, ${excluded.length} excluded articles, internal page links and new FAQ consistency`)
