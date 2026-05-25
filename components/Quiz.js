'use client'
import { useState } from 'react'

const questions = [
  {
    q: 'How consistent is your brand across all platforms — website, LinkedIn, Instagram, Google?',
    opts: [
      { label: 'Fully consistent — same look, voice, and message everywhere', val: 5 },
      { label: 'Somewhat consistent — a few gaps but mostly aligned', val: 3 },
      { label: 'Inconsistent — every platform looks and sounds different', val: 1 },
      { label: "I haven't thought about this", val: 0 },
    ],
  },
  {
    q: 'When someone searches for what you do in your city, where do you show up?',
    opts: [
      { label: 'Top 3 on Google — I show up consistently', val: 5 },
      { label: 'Page 1, but not top 3', val: 3 },
      { label: 'Page 2 or further back', val: 1 },
      { label: "I don't know where I rank", val: 0 },
    ],
  },
  {
    q: 'How are you currently generating new leads?',
    opts: [
      { label: 'Multiple channels — paid ads, organic, referrals, and content all working together', val: 5 },
      { label: 'Mostly referrals — I depend on word of mouth', val: 3 },
      { label: 'Occasionally running ads but no consistent system', val: 1 },
      { label: "I'm not generating leads consistently", val: 0 },
    ],
  },
  {
    q: 'Do you have an automated follow-up system for leads?',
    opts: [
      { label: 'Yes — automated email sequences, retargeting, and nurture campaigns', val: 5 },
      { label: 'Basic email follow-up but nothing automated', val: 3 },
      { label: 'I follow up manually when I remember', val: 1 },
      { label: 'No follow-up system at all', val: 0 },
    ],
  },
  {
    q: 'How are you currently measuring marketing performance?',
    opts: [
      { label: 'Full analytics dashboard — I track leads, conversions, cost per acquisition', val: 5 },
      { label: 'Basic metrics — website traffic and social followers', val: 3 },
      { label: 'I check occasionally but have no system', val: 1 },
      { label: "I don't track marketing performance", val: 0 },
    ],
  },
]

function getTier(score) {
  if (score >= 20) return { tier: '🏆 Marketing Leader', msg: "You're firing on all cylinders. Let's talk about scaling what's working." }
  if (score >= 13) return { tier: '📈 Growth Ready', msg: 'Strong foundation. A few strategic upgrades could unlock serious momentum.' }
  if (score >= 6)  return { tier: '🔧 Tune-Up Needed', msg: 'Gaps in your system are costing you leads. Let\'s fix them.' }
  return { tier: '🚀 Starting Point', msg: "You're leaving money on the table. The good news: the upside is massive." }
}

export default function Quiz({ onClose }) {
  const [step, setStep] = useState(0)       // 0-4 = questions, 5 = results
  const [selected, setSelected] = useState(Array(5).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const current = selected[step]
  const score = selected.reduce((sum, v) => sum + (v?.val ?? 0), 0)
  const { tier, msg } = getTier(score)
  const progress = step >= 5 ? 100 : (step / 5) * 100

  const handleSelect = (opt) => {
    const next = [...selected]
    next[step] = opt
    setSelected(next)
  }

  const handleNext = async () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Submit
      setStep(5)
      try {
        await fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            score,
            tier,
            answers: questions.map((q, i) => ({
              question: q.q,
              answer: selected[i]?.label ?? 'Not answered',
            })),
          }),
        })
        setSubmitted(true)
      } catch (e) {
        setSubmitted(true) // still show results even if email fails
      }
    }
  }

  return (
    <div className="quiz-overlay visible" id="quizOverlay">
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

          {step < 5 ? (
            <div className="quiz-step active">
              <p className="quiz-q-num">Question {step + 1} of 5</p>
              <p className="quiz-q-text">{questions[step].q}</p>
              <div className="quiz-options">
                {questions[step].opts.map((opt, i) => (
                  <div
                    key={i}
                    className={`quiz-option${selected[step]?.label === opt.label ? ' selected' : ''}`}
                    onClick={() => handleSelect(opt)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
              <div className="quiz-nav">
                {step === 0
                  ? <button className="quiz-btn-skip" onClick={onClose}>Skip for now</button>
                  : <button className="quiz-btn-skip" onClick={() => setStep(step - 1)}>← Back</button>
                }
                <button
                  className="quiz-btn"
                  disabled={!selected[step]}
                  onClick={handleNext}
                >
                  {step === 4 ? 'See My Score →' : 'Next →'}
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-result active">
              <div className="score-circle">
                <span className="score-num">{score}</span>
                <span className="score-label">/ 25</span>
              </div>
              <p className="score-tier">{tier}</p>
              <p className="score-message">{msg}</p>
              <a
                href="https://meetings-na2.hubspot.com/sweis"
                target="_blank"
                rel="noopener noreferrer"
                className="quiz-cta-btn"
              >
                Book a Free Strategy Call →
              </a>
              <button className="quiz-dismiss" onClick={onClose}>
                No thanks, I&apos;ll figure it out myself
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
