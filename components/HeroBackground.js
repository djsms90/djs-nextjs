/** The homepage hero's animated background (shifting gradient, gold particles, wave lines).
 *  Drop it in as the first child of any hero section that is position: relative; overflow: hidden. */
export default function HeroBackground() {
  return (
    <>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {[...Array(12)].map((_, i) => <div key={i} className="particle" />)}
      </div>
      <div className="hero-lines" aria-hidden="true">
        <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 Q300 100 600 200 T1200 200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 300 Q300 200 600 300 T1200 300" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </>
  )
}
