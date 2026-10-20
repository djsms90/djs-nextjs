// Instagram feed helpers (server-only).
//
// How it works:
// - Posts come from the Instagram API with Instagram Login (graph.instagram.com),
//   using a long-lived Instagram User access token for @djsmarketingservices.
//   https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
// - Long-lived tokens last 60 days and can only be refreshed while still valid and
//   at least 24 hours old, so a daily Vercel cron (/api/instagram/refresh) renews it.
// - The current token is stored in Vercel Global Config (formerly Edge Config) under
//   the key "instagram", because the refresh can return a new token string and an
//   environment variable can't be changed at runtime.
//   https://vercel.com/docs/global-config/using-global-config
// - INSTAGRAM_ACCESS_TOKEN (env) is only the starting token, used until the first refresh.

const GRAPH = 'https://graph.instagram.com'
const CONFIG_KEY = 'instagram'
export const POST_LIMIT = 6
const MEDIA_FIELDS = 'id,media_type,media_url,thumbnail_url,permalink,timestamp'

// GLOBAL_CONFIG is added automatically when a Global Config store is connected
// to the project. Format: https://global-config.vercel.com/<id>?token=<readToken>
function parseConnection() {
  const raw = process.env.GLOBAL_CONFIG
  if (!raw) return null
  try {
    const u = new URL(raw)
    const id = u.pathname.replace(/^\/+/, '').split('/')[0]
    const token = u.searchParams.get('token')
    if (!id || !token) return null
    return { base: `${u.origin}/${id}`, id, token }
  } catch {
    return null
  }
}

export async function readStoredToken() {
  const conn = parseConnection()
  if (!conn) return null
  try {
    const res = await fetch(`${conn.base}/item/${CONFIG_KEY}`, {
      headers: { Authorization: `Bearer ${conn.token}` },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const value = await res.json()
    return value && typeof value.token === 'string' ? value : null
  } catch {
    return null
  }
}

// Pasting into Vercel's multi-line value box can add a trailing line break,
// spaces or quotes, which Instagram rejects ("Cannot parse access token").
export function cleanToken(value) {
  if (typeof value !== 'string') return null
  const t = value.trim().replace(/^["']+|["']+$/g, '').replace(/\s+/g, '')
  return t || null
}

export async function getAccessToken() {
  const stored = await readStoredToken()
  return cleanToken(stored?.token) || cleanToken(process.env.INSTAGRAM_ACCESS_TOKEN)
}

// Safe diagnostics: never logs the token itself, only its shape.
function describeToken(token) {
  const raw = process.env.INSTAGRAM_ACCESS_TOKEN || ''
  return `length=${token.length} prefix=${token.slice(0, 4).replace(/[^A-Za-z]/g, '?')} rawEnvLength=${raw.length} rawHadWhitespace=${/\s/.test(raw)}`
}

// Writes go through the Vercel REST API (needs a Vercel access token).
// https://vercel.com/docs/global-config/vercel-api
export async function saveToken(record) {
  const conn = parseConnection()
  const apiToken = process.env.VERCEL_API_TOKEN
  if (!conn || !apiToken) throw new Error('GLOBAL_CONFIG or VERCEL_API_TOKEN is not set')
  const team = process.env.VERCEL_TEAM_ID ? `?teamId=${encodeURIComponent(process.env.VERCEL_TEAM_ID)}` : ''
  const res = await fetch(`https://api.vercel.com/v1/global-config/${conn.id}/items${team}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${apiToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: [{ operation: 'upsert', key: CONFIG_KEY, value: record }] }),
  })
  if (!res.ok) throw new Error(`Global Config write failed: ${res.status} ${await res.text()}`)
}

// https://developers.facebook.com/docs/instagram-platform/reference/refresh_access_token/
export async function refreshToken(currentToken) {
  const url = `${GRAPH}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(currentToken)}`
  const res = await fetch(url, { cache: 'no-store' })
  const body = await res.json().catch(() => ({}))
  if (!res.ok || !body.access_token) {
    throw new Error(`Instagram token refresh failed: ${res.status} ${JSON.stringify(body.error || body)}`)
  }
  const now = Date.now()
  return {
    token: body.access_token,
    refreshedAt: now,
    expiresAt: now + Number(body.expires_in || 0) * 1000,
  }
}

// Returns the latest posts in a display-ready shape, or [] if anything fails.
// media_url can be omitted for videos with licensed audio, so videos use
// thumbnail_url and anything without an image is skipped.
export async function fetchPosts() {
  const token = await getAccessToken()
  if (!token) return []
  try {
    const url = `${GRAPH}/me/media?fields=${MEDIA_FIELDS}&limit=${POST_LIMIT}&access_token=${encodeURIComponent(token)}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) {
      console.error('[instagram] media request failed', res.status, await res.text(), describeToken(token))
      return []
    }
    const { data = [] } = await res.json()
    return data
      .map(m => ({
        id: m.id,
        type: m.media_type,
        image: m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url,
        permalink: m.permalink,
        timestamp: m.timestamp,
      }))
      .filter(p => p.id && p.image && p.permalink)
      .slice(0, POST_LIMIT)
  } catch (e) {
    console.error('[instagram] media request error', e)
    return []
  }
}
