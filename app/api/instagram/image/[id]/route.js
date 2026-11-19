import { fetchPosts, getAccessToken } from '../../../../../lib/instagram'

const GRAPH = 'https://graph.instagram.com'

// Serves a feed image from our own domain so visitors' browsers never
// request anything from Instagram/Meta directly.
//
// First checks the current feed (cheapest path — reuses cached data).
// If the id isn't in the current feed (stale client cache after a new post
// pushes an older one out), falls back to fetching the single media item
// by id from the Instagram API, which works for any post the account owns.
export async function GET(_request, { params }) {
  const { id } = await params

  // 1. Try the current feed first (reuses the same cached fetchPosts)
  const posts = await fetchPosts()
  let imageUrl = posts.find(p => p.id === id)?.image

  // 2. Fallback: fetch the specific media item directly by id
  if (!imageUrl) {
    const token = await getAccessToken()
    if (!token) return new Response('Not found', { status: 404 })
    try {
      const res = await fetch(
        `${GRAPH}/${encodeURIComponent(id)}?fields=media_type,media_url,thumbnail_url&access_token=${encodeURIComponent(token)}`,
        { cache: 'no-store' }
      )
      if (res.ok) {
        const m = await res.json()
        imageUrl = m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url
      }
    } catch { /* fall through to 404 */ }
  }

  if (!imageUrl) return new Response('Not found', { status: 404 })

  const upstream = await fetch(imageUrl, { cache: 'no-store' })
  if (!upstream.ok || !upstream.body) return new Response('Image unavailable', { status: 502 })

  return new Response(upstream.body, {
    headers: {
      'Content-Type': upstream.headers.get('content-type') || 'image/jpeg',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}