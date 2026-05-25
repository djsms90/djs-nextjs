'use client'
import { useState } from 'react'

const questions = [
  {
    step: 1,
    q: 'How consistent is your brand across all platforms — website, LinkedIn, Instagram, Google?',
    opts: [
      { label: 'Fully consistent — same look, voice, and message everywhere', val: 5 },
      { label: 'Somewhat consistent — a few gaps but mostly aligned', val: 3 },
      { label: 'Inconsistent — every platform looks and sounds different', val: 1 },
      { label: "I haven't thought about this", val: 0 },
    ],
  },
  {
    step: 2,
    q: 'When someone searches for what you do in your city, where do you show up?',
    opts: [
      { label: 'Top 3 on Google — I show up consistently', val: 5 },
      { label: 'Page 1, but not top 3', val: 3 },
      { label: 'Page 2 or further back', val: 1 },
      { label: "I don't know where I rank", val: 0 },
    ],
  },
  {
    step: 3,
    q: 'How are you currently generating new leads?',
    opts: [
      { label: 'Multiple channels — paid ads, organic, referrals, and content all working together', val: 5 },
      { label: 'Mostly referrals — I depend on word of mouth', val: 3 },
      { label: 'Occasionally running ads but no consistent system', val: 1 },
      { label: "I'm not generating leads consistently", val: 0 },
    ],
  },
  {
    step: 4,
    q: 'What happens after someone expresses interest in your services?',
    opts: [
      { label: 'Automated follow-up sequence — emails, nurture content, and booking flow running 24/7', val: 5 },
      { label: 'I follow up manually when I remember', val: 3 },
      { label: 'I follow up sometimes, it\'s inconsistent', val: 1 },
      { label: 'Nothing formal — they either convert or they don\'t', val: 0 },
    ],
  },
  {
    step: 5,
    q: 'Do you know your cost per lead and which marketing channels are generating the best ROI?',
    opts: [
      { label: 'Yes — I track everything and review performance monthly', val: 5 },
      { label: 'I have some data but don\'t review it consistently', val: 3 },
      { label: 'I have analytics set up but rarely look at them', val: 1 },
      { label: 'No tracking in place', val: 0 },
    ],
  },
]

function getResult(score) {
  if (score >= 80) return { tier: 'You Are Scaling', msg: 'Your marketing foundation is strong. The opportunity now is optimization and acceleration — tightening the system, improving conversion rates, and compounding what is already working. A strategy call will identify the highest-leverage moves.', color: '#0467b1' }
  if (score >= 55) return { tier: 'Building Momentum', msg: 'You have solid pieces in place, but there are clear gaps in your system — likely in consistency, automation, or tracking. A strategy call will pinpoint exactly where the leaks are and what to fix first for the fastest impact.', color: '#f7e400' }
  if (score >= 30) return { tier: 'Needs a System', msg: 'Your marketing is running on effort, not a system. Results are inconsistent, follow-up is manual, and growth depends on how much time you have. A well-built system changes this faster than most people expect.', color: '#c20000' }
  return { tier: 'Time to Build', msg: 'Your marketing does not have a foundation yet — and that is okay. Every strong system starts somewhere. A strategy call will show you the fastest path from where you are now to consistent, predictable leads.', color: '#c20000' }
}

export default function Quiz({ onClose }) {
  const [step, setStep] = useState(1)        // 1–5 = questions, 6 = results
  const [selected, setSelected] = useState({}) // { stepNum: val }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const totalRaw = Object.values(selected).reduce((a, b) => a + b, 0)
  const score = Math.round((totalRaw / 25) * 100)
  const progress = step > 5 ? 100 : ((step - 1) / 5) * 100
  const { tier, msg, color } = getResult(score)

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
    else setStep(6)
  }

  const handleSubmit = async () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!name.trim() || !emailOk) {
      setError('Please enter your name and a valid email.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          score,
          tier,
          answers: questions.map(q => ({
            question: q.q,
            answer: q.opts.find(o => o.val === selected[q.step])?.label ?? 'Not answered',
          })),
        }),
      })
    } catch (e) {
      // still proceed even if email fails
    }
    setDone(true)
    setSubmitting(false)
    window.open('https://meetings-na2.hubspot.com/sweis', '_blank')
  }

  return (
    <div className="quiz-overlay visible" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="quiz-box">
        <button className="quiz-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="quiz-header">
          <p className="q-eyebrow">Free Marketing Audit</p>
          <h2>What&apos;s Your Marketing Score?</h2>
          <p>5 questions. 60 seconds. See how your marketing stacks up.</p>
        </div>
        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-body">

          {/* QUESTIONS */}
          {step <= 5 && (
            <div className="quiz-step active">
              <p className="quiz-q-num">Question {step} of 5</p>
              <p className="quiz-q-text">{questions[step - 1].q}</p>
              <div className="quiz-options">
                {questions[step - 1].opts.map((opt, i) => (
                  <div
                    key={i}
                    className={`quiz-option${selected[step] === opt.val ? ' selected' : ''}`}
                    onClick={() => setSelected({ ...selected, [step]: opt.val })}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
              <div className="quiz-nav">
                {step === 1
                  ? <button className="quiz-btn-skip" onClick={onClose}>Skip for now</button>
                  : <button className="quiz-btn-skip" onClick={() => setStep(step - 1)}>← Back</button>
                }
                <button
                  className="quiz-btn"
                  disabled={selected[step] === undefined}
                  onClick={handleNext}
                >
                  {step === 5 ? 'See My Score →' : 'Next →'}
                </button>
              </div>
            </div>
          )}

          {/* RESULTS */}
          {step === 6 && (
            <div className="quiz-result active">
              <div className="score-circle" style={{ borderColor: color }}>
                <span className="score-num" style={{ color: '#0467b1' }}>{score}</span>
                <span className="score-label">/ 100</span>
              </div>
              <p className="score-tier">{tier}</p>
              <p className="score-message">{msg}</p>

              {!done ? (
                <div style={{ margin: '20px 0 10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{ padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '15px', fontFamily: 'Inter, sans-serif', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#0467b1'}
                    onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '15px', fontFamily: 'Inter, sans-serif', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#0467b1'}
                    onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                  />
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    style={{ padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '15px', fontFamily: 'Inter, sans-serif', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#0467b1'}
                    onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                  />
                  {error && <p style={{ color: '#c20000', fontSize: '13px', margin: 0 }}>{error}</p>}
                  <button
                    className="quiz-cta-btn"
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{ opacity: submitting ? 0.6 : 1 }}
                  >
                    {submitting ? 'Sending...' : 'Claim Your Free Strategy Call'}
                  </button>
                </div>
              ) : (
                <div style={{ marginTop: '16px' }}>
                  <button className="quiz-cta-btn" onClick={() => window.open('https://meetings-na2.hubspot.com/sweis', '_blank')}>
                    Booking page opened! Click to reopen →
                  </button>
                </div>
              )}

              <button className="quiz-dismiss" onClick={onClose}>
                I&apos;ll explore on my own for now
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
