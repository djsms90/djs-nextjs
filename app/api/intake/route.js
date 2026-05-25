import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const BEARER_TOKEN = process.env.INTAKE_WEBHOOK_TOKEN || '2402d626c618781ac19eae1093141696d7eb1aef462b1a9264cfe263f414c9bb'

export async function POST(req) {
  try {
    // Auth check — same token as Hetzner
    const auth = req.headers.get('authorization') || ''
    if (auth !== `Bearer ${BEARER_TOKEN}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await req.json()
    const submission = data.submission || data
    const receivedAt = new Date().toISOString()

    // Build email rows from all fields
    const fieldRows = Object.entries(submission)
      .filter(([key]) => !key.startsWith('_'))
      .map(([key, val]) =>
        `<tr>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:600;color:#111;width:40%;white-space:nowrap">${key}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#444">${val || 'Not provided'}</td>
        </tr>`
      ).join('')

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const businessName = submission['Business Name'] || submission.business_name || 'New Lead'
    const email = submission['Email'] || submission.email || ''
    const phone = submission['Phone'] || submission.phone || 'Not provided'

    await transporter.sendMail({
      from: `"DJS Intake Form" <${process.env.SMTP_USER}>`,
      to: 'danny@djs90.com',
      subject: `📋 New Intake Submission — ${businessName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;border:1px solid #e0e8f0;border-radius:8px;overflow:hidden">
          <div style="background:#0467b1;padding:28px 32px">
            <h1 style="color:#f7e400;font-size:24px;margin:0;letter-spacing:1px">New Intake Form Submission</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px">Received: ${receivedAt}</p>
          </div>
          <div style="padding:28px 32px;background:#f7f9fb">
            <div style="background:white;border-radius:8px;border:1px solid #e0e8f0;margin-bottom:20px;overflow:hidden">
              <div style="background:#111;padding:12px 16px">
                <span style="color:#f7e400;font-weight:900;font-size:12px;letter-spacing:2px;text-transform:uppercase">Submission Details</span>
              </div>
              <table style="width:100%;border-collapse:collapse">
                ${fieldRows}
              </table>
            </div>
            <div style="text-align:center;margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
              ${email ? `<a href="mailto:${email}" style="display:inline-block;background:#0467b1;color:white;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:700;font-size:14px">Reply to ${businessName}</a>` : ''}
              <a href="https://meetings-na2.hubspot.com/sweis" style="display:inline-block;background:#f7e400;color:#c20000;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:700;font-size:14px">Book Strategy Call</a>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Intake webhook error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'djs-intake-webhook' })
}
