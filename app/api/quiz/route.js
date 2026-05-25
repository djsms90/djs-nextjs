import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { score, tier, answers } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const answersHtml = answers.map((a, i) =>
      `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Q${i+1}: ${a.question}</td><td style="padding:8px;border-bottom:1px solid #eee">${a.answer}</td></tr>`
    ).join('')

    await transporter.sendMail({
      from: `"DJS Website Quiz" <${process.env.SMTP_USER}>`,
      to: 'marketing@djs90.com',
      subject: `New Quiz Submission — Score: ${score}/25 (${tier})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#0467b1;padding:24px;text-align:center">
            <h1 style="color:#f7e400;font-size:28px;margin:0">New Marketing Quiz Lead</h1>
          </div>
          <div style="padding:24px;background:#f7f9fb">
            <h2 style="color:#111;margin-bottom:8px">Score: ${score}/25 — ${tier}</h2>
            <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden">
              ${answersHtml}
            </table>
            <div style="margin-top:24px;text-align:center">
              <a href="https://meetings-na2.hubspot.com/sweis" style="background:#0467b1;color:white;padding:12px 28px;border-radius:4px;text-decoration:none;font-weight:700">Book Strategy Call</a>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Quiz email error:', err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
