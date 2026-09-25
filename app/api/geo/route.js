import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// EEA (EU 27 + Iceland, Liechtenstein, Norway) + UK + Switzerland.
// Visitors from these countries get opt-in consent (GDPR / UK GDPR / FADP).
const OPT_IN_COUNTRIES = new Set([
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU',
  'MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH',
])

export function GET(request) {
  // Vercel's geolocation header (https://vercel.com/docs/headers/request-headers).
  // Vercel does not guarantee it is present, so an unknown country is treated
  // the strict way: ask for consent before loading any tracking.
  const country = request.headers.get('x-vercel-ip-country') || null
  return NextResponse.json(
    { country, optIn: country ? OPT_IN_COUNTRIES.has(country) : true },
    { headers: { 'Cache-Control': 'private, no-store' } }
  )
}
