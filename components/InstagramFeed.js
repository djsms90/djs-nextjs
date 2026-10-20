'use client'
import { useEffect, useState } from 'react'

const PROFILE_URL = 'https://www.instagram.com/djsmarketingservices'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  } catch {
    return ''
  }
}

// Homepage Instagram feed. Loads the latest posts from /api/instagram.
// If there are no posts (token not set up yet, or Instagram is down) the
// section still renders the heading and the follow button, never an empty grid.
export default function InstagramFeed() {
  const [posts, setPosts] = useState(null) // null = loading

  useEffect(() => {
    let cancelled = false
    fetch('/api/instagram')
      .then(r => (r.ok ? r.json() : { posts: [] }))
      .then(d => { if (!cancelled) setPosts(Array.isArray(d.posts) ? d.posts : []) })
      .catch(() => { if (!cancelled) setPosts([]) })
    return () => { cancelled = true }
  }, [])

  return (
    <section className="ig-feed" aria-labelledby="ig-feed-title">
      <div className="ig-feed-inner">
        <p className="ig-eyebrow">@djsmarketingservices</p>
        <h2 id="ig-feed-title">Follow Along on Instagram</h2>
        <p className="ig-sub">Client wins, behind-the-scenes builds, and marketing that actually works, as it happens.</p>

        {posts === null && (
          <div className="ig-grid" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => <div key={i} className="ig-tile ig-skeleton" />)}
          </div>
        )}

        {posts && posts.length > 0 && (
          <ul className="ig-grid">
            {posts.map(p => (
              <li key={p.id}>
                <a
                  href={p.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-tile"
                  aria-label={`${p.type === 'VIDEO' ? 'Instagram video' : 'Instagram post'} from ${formatDate(p.timestamp)} (opens in a new tab)`}
                >
                  <img src={p.src} alt="" width="360" height="360" loading="lazy" decoding="async" />
                  {p.type === 'VIDEO' && <span className="ig-badge" aria-hidden="true">▶</span>}
                  {p.type === 'CAROUSEL_ALBUM' && <span className="ig-badge" aria-hidden="true">❐</span>}
                </a>
              </li>
            ))}
          </ul>
        )}

        <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="ig-follow">
          Follow @djsmarketingservices
        </a>
      </div>
    </section>
  )
}
