'use client'
import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'

/*
  Cookie consent + CCPA "Do Not Sell or Share" handling.

  - US and everywhere else outside Europe: opt-out. Google Analytics and the
    Meta Pixel load right away, a notice explains that, and the visitor can opt out.
  - EEA / UK / Switzerland: opt-in. Nothing loads until the visitor clicks Accept.
  - Global Privacy Control (browser "do not track me" signal) is always honored
    as an opt-out, as California law requires.
  - The footer link "Do Not Sell or Share My Personal Information" reopens this
    panel from any page (it fires the `djs:privacy-choices` event).
*/

const GA_ID = 'G-4DFX8R6SKR'
const PIXEL_ID = '1307109944174919'
const STORAGE_KEY = 'djs_consent'
export const OPEN_EVENT = 'djs:privacy-choices'

function readChoice() {
  try {
    const v = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null')
    return v && (v.choice === 'granted' || v.choice === 'denied') ? v.choice : null
  } catch { return null }
}

function saveChoice(choice) {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() })) } catch {}
}

function loadTrackers() {
  if (window.__djsTrackersLoaded) {
    window[`ga-disable-${GA_ID}`] = false
    window.gtag?.('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' })
    window.fbq?.('consent', 'grant')
    return
  }
  window.__djsTrackersLoaded = true

  // Google Analytics (with Consent Mode v2 signals)
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' })
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  const ga = document.createElement('script')
  ga.async = true
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(ga)

  // Meta Pixel (standard base code)
  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

function disableTrackers() {
  window[`ga-disable-${GA_ID}`] = true
  window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
  window.fbq?.('consent', 'revoke')
  // Remove cookies these tools already set, on this host and the parent domain.
  const host = window.location.hostname
  const domains = ['', host, '.' + host.replace(/^www\./, '')]
  document.cookie.split(';').map(c => c.split('=')[0].trim())
    .filter(name => /^(_ga|_gid|_gat|_fbp|_fbc)/.test(name))
    .forEach(name => domains.forEach(d => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`
    }))
}

export default function ConsentManager() {
  // mode: null (hidden) | 'notice' (US opt-out) | 'optin' (Europe) | 'prefs' (footer link)
  const [mode, setMode] = useState(null)
  const [choice, setChoice] = useState(null)
  const bannerRef = useRef(null)

  // While the banner is open, pad the bottom of the page by its height
  // so it never covers the footer or the last CTA.
  useEffect(() => {
    const el = bannerRef.current
    if (!mode || !el) { document.body.style.paddingBottom = ''; return }
    const apply = () => { document.body.style.paddingBottom = el.offsetHeight + 'px' }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    return () => { ro.disconnect(); document.body.style.paddingBottom = '' }
  }, [mode])

  useEffect(() => {
    const stored = readChoice()
    const gpc = navigator.globalPrivacyControl === true
    setChoice(stored)

    if (gpc) {
      if (stored !== 'denied') saveChoice('denied')
      setChoice('denied')
      return
    }
    if (stored === 'granted') { loadTrackers(); return }
    if (stored === 'denied') return

    let cancelled = false
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 3000)
    fetch('/api/geo', { signal: ctrl.signal })
      .then(r => r.json())
      .then(({ optIn }) => {
        if (cancelled) return
        if (optIn) { setMode('optin') } else { loadTrackers(); setMode('notice') }
      })
      // If we can't tell where the visitor is, take the strict path.
      .catch(() => { if (!cancelled) setMode('optin') })
      .finally(() => clearTimeout(timer))
    return () => { cancelled = true; ctrl.abort() }
  }, [])

  useEffect(() => {
    const open = () => { setChoice(readChoice()); setMode('prefs') }
    window.addEventListener(OPEN_EVENT, open)
    return () => window.removeEventListener(OPEN_EVENT, open)
  }, [])

  const allow = useCallback(() => {
    saveChoice('granted'); setChoice('granted'); loadTrackers(); setMode(null)
  }, [])
  const deny = useCallback(() => {
    saveChoice('denied'); setChoice('denied'); disableTrackers(); setMode(null)
  }, [])

  if (!mode) return null

  const gpcOn = typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true

  return (
    <div ref={bannerRef} className="consent-banner" role="region" aria-label="Privacy choices">
      <div className="consent-inner">
        {mode === 'prefs' && (
          <button type="button" className="consent-close" onClick={() => setMode(null)} aria-label="Close privacy choices">×</button>
        )}
        <div className="consent-text">
          {mode === 'notice' && (
            <p>
              <span className="consent-long">We use cookies and similar tools (Google Analytics and Meta Pixel) to measure site traffic and show relevant ads. You can opt out of the sale or sharing of your personal information at any time.</span>
              <span className="consent-short">We use cookies for analytics and ads. You can opt out anytime.</span>{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          )}
          {mode === 'optin' && (
            <p>
              <span className="consent-long">We would like to use cookies (Google Analytics and Meta Pixel) to measure site traffic and show relevant ads. Nothing is tracked unless you accept.</span>
              <span className="consent-short">We would like to use cookies for analytics and ads. Nothing is tracked unless you accept.</span>{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          )}
          {mode === 'prefs' && (
            <>
              <p className="consent-title">Your Privacy Choices</p>
              <p>
                {gpcOn
                  ? 'Your browser is sending a Global Privacy Control signal, so analytics and advertising tracking are off. '
                  : choice === 'denied'
                    ? 'Analytics and advertising tracking are currently off. '
                    : 'Analytics and advertising tracking (Google Analytics, Meta Pixel) are currently on. '}
                We do not sell your personal information for money. Opting out also stops sharing for targeted advertising.{' '}
                <Link href="/privacy-policy">Privacy Policy</Link>
              </p>
            </>
          )}
        </div>
        <div className="consent-actions">
          {mode === 'notice' && (<>
            <button type="button" className="consent-btn consent-btn-primary" onClick={allow}>Got It</button>
            <button type="button" className="consent-btn consent-btn-secondary" onClick={deny}>Opt Out</button>
          </>)}
          {mode === 'optin' && (<>
            <button type="button" className="consent-btn consent-btn-primary" onClick={allow}>Accept</button>
            <button type="button" className="consent-btn consent-btn-primary" onClick={deny}>Reject</button>
          </>)}
          {mode === 'prefs' && (<>
            {!gpcOn && choice === 'denied' && (
              <button type="button" className="consent-btn consent-btn-secondary" onClick={allow}>Allow Tracking</button>
            )}
            {choice !== 'denied' && !gpcOn && (
              <button type="button" className="consent-btn consent-btn-primary" onClick={deny}>Do Not Sell or Share My Info</button>
            )}
            {(choice === 'denied' || gpcOn) && (
              <button type="button" className="consent-btn consent-btn-primary" onClick={() => setMode(null)}>Done</button>
            )}
          </>)}
        </div>
      </div>
    </div>
  )
}
