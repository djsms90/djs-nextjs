import { NextResponse } from 'next/server'
import { fetchPosts } from '../../../lib/instagram'

// Public list of the latest posts for the homepage feed.
// Image URLs point at our own /api/instagram/image/<id> route so visitors'
// browsers never request anything from Instagram/Meta directly.
export async function GET() {
  const posts = await fetchPosts()
  return NextResponse.json(
    {
      posts: posts.map(p => ({
        id: p.id,
        type: p.type,
        permalink: p.permalink,
        timestamp: p.timestamp,
        src: `/api/instagram/image/${p.id}`,
      })),
    },
    { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
  )
}
