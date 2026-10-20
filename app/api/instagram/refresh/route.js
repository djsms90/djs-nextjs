import { NextResponse } from 'next/server'
import { readStoredToken, refreshToken, saveToken } from '../../../../lib/instagram'

export const dynamic = 'force-dynamic'

const DAY = 24 * 60 * 60 * 1000
// Refresh weekly: well inside the 60-day lifetime, and keeps Global Config
// writes to ~5 a month (Hobby includes 100).
const REFRESH_EVERY = 7 * DAY

// Called daily by Vercel Cron (see vercel.json). Vercel sends
// "Authorization: Bearer <CRON_SECRET>". https://vercel.com/docs/cron-jobs/manage-cron-jobs
export async function GET(request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const stored = await readStoredToken()
  const current = stored?.token || process.env.INSTAGRAM_ACCESS_TOKEN
  if (!current) return NextResponse.json({ ok: false, reason: 'no token configured' }, { status: 500 })

  if (stored?.refreshedAt && Date.now() - stored.refreshedAt < REFRESH_EVERY) {
    return NextResponse.json({ ok: true, skipped: true, expiresAt: new Date(stored.expiresAt).toISOString() })
  }

  try {
    const record = await refreshToken(current)
    await saveToken(record)
    return NextResponse.json({ ok: true, refreshed: true, expiresAt: new Date(record.expiresAt).toISOString() })
  } catch (e) {
    console.error('[instagram] refresh failed', e)
    return NextResponse.json({ ok: false, error: String(e.message || e) }, { status: 500 })
  }
}
