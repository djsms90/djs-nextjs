import { fetchPosts } from '../../../../../lib/instagram'

// Serves a feed image from our own domain. Only ids that are in the current
// feed are served, so this can't be used to fetch arbitrary URLs.
export async function GET(_request, { params }) {
  const { id } = await params
  const posts = await fetchPosts()
  const post = posts.find(p => p.id === id)
  if (!post) return new Response('Not found', { status: 404 })

  const upstream = await fetch(post.image, { cache: 'no-store' })
  if (!upstream.ok || !upstream.body) return new Response('Image unavailable', { status: 502 })

  return new Response(upstream.body, {
    headers: {
      'Content-Type': upstream.headers.get('content-type') || 'image/jpeg',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
