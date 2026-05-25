import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, email, phone, score, tier, answers } = await req.json()

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
      `<tr>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:600;color:#111;width:50%">Q${i+1}: ${a.question}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#444">${a.answer}</td>
      </tr>`
    ).join('')

    await transporter.sendMail({
      from: `"DJS Website Quiz" <${process.env.SMTP_USER}>`,
      to: 'marketing@djs90.com',
      subject: `🎯 New Quiz Lead — ${name} scored ${score}/100 (${tier})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e8f0;border-radius:8px;overflow:hidden">
          <div style="background:#0467b1;padding:28px 32px;text-align:center">
            <h1 style="color:#f7e400;font-size:26px;margin:0;letter-spacing:1px">New Quiz Lead — DJS Website</h1>
          </div>
          <div style="padding:28px 32px;background:#f7f9fb">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;background:white;border-radius:8px;overflow:hidden;border:1px solid #e0e8f0">
              <tr><td style="padding:12px;background:#0467b1;color:#f7e400;font-weight:900;font-size:13px;letter-spacing:1px;text-transform:uppercase">LEAD INFO</td><td style="padding:12px;background:#0467b1"></td></tr>
              <tr><td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee">Name</td><td style="padding:10px 12px;border-bottom:1px solid #eee">${name}</td></tr>
              <tr><td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee">Email</td><td style="padding:10px 12px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee">Phone</td><td style="padding:10px 12px;border-bottom:1px solid #eee">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #eee">Score</td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:800;font-size:18px;color:#0467b1">${score}/100</td></tr>
              <tr><td style="padding:10px 12px;font-weight:600">Result Tier</td><td style="padding:10px 12px;font-weight:700">${tier}</td></tr>
            </table>
            <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;border:1px solid #e0e8f0">
              <tr><td colspan="2" style="padding:12px;background:#111;color:#f7e400;font-weight:900;font-size:13px;letter-spacing:1px;text-transform:uppercase">QUIZ ANSWERS</td></tr>
              ${answersHtml}
            </table>
            <div style="margin-top:24px;text-align:center;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
              <a href="https://djsmarketingservices.com/blog.html" style="display:inline-block;background:#111;color:white;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:700;font-size:14px">Read the Blog →</a>
              <a href="https://djsmarketingservices.com/playbook.html" style="display:inline-block;background:#f7e400;color:#c20000;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:700;font-size:14px">Get BOOST365 Playbook →</a>
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
