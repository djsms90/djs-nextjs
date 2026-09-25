'use client'

// Footer link required by the CCPA/CPRA. Opens the privacy choices panel
// rendered by <ConsentManager /> in the root layout.
export default function PrivacyChoicesLink({ className = 'privacy-choices-link', style }) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => window.dispatchEvent(new Event('djs:privacy-choices'))}
    >
      Do Not Sell or Share My Personal Information
    </button>
  )
}
