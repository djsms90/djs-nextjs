import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

// This site also builds on Vercel. Workspace-only registry URLs must never be
// committed, even when installation inside Replit succeeds.
const lock = JSON.parse(await readFile(new URL('../package-lock.json', import.meta.url), 'utf8'))
let checked = 0
for (const [name, pkg] of Object.entries(lock.packages)) {
  if (!pkg.resolved) continue
  const url = new URL(pkg.resolved)
  assert.equal(url.protocol, 'https:', `${name}: package download must use HTTPS`)
  assert.equal(url.hostname, 'registry.npmjs.org', `${name}: package URL is not portable to external hosting`)
  checked++
}
console.log(`PASS ${checked} package download URLs use the public HTTPS npm registry`)
