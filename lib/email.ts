import nodemailer from 'nodemailer'

const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

// ✏️ CHANGE THIS: your name, shown at the bottom of the enrollment email
const SENDER_NAME = 'YOUR NAME'
export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

const transport = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: Number(process.env.SMTP_PORT ?? 465) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null

/** Never throws: a mail failure must not break enrollment/contact. Returns true if sent. */
export async function sendMail(to: string, subject: string, html: string, replyTo?: string): Promise<boolean> {
  const from = process.env.MAIL_FROM ?? 'Cyber Learning Hub <no-reply@localhost>'
  if (!transport) {
    console.log(`\n[email:dev-mode] To: ${to}\nSubject: ${subject}\n${html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 300)}…\n`)
    return false
  }
  try {
    await transport.sendMail({ from, to, subject, html, replyTo })
    return true
  } catch (err) {
    console.error('[email] send failed:', err)
    return false
  }
}

const layout = (title: string, body: string, footer = '') => `
<div style="background:#0f172a;padding:32px 12px;font-family:Segoe UI,Arial,sans-serif">
  <div style="max-width:560px;margin:auto;background:#1e293b;border:1px solid #334155;border-radius:16px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#2563eb,#7c3aed);padding:28px;text-align:center;color:#fff;font-size:22px;font-weight:700">⚡ Cyber Learning Hub</div>
    <div style="padding:32px;color:#cbd5e1;font-size:15px;line-height:1.6">
      <h1 style="color:#fff;font-size:22px;margin:0 0 16px">${title}</h1>${body}
    </div>
    <div style="padding:16px 32px;background:#0f172a;color:#64748b;font-size:12px;text-align:center">${footer || 'Cyber Learning Hub · Learn. Defend. Hack ethically.'}</div>
  </div>
</div>`

const button = (href: string, label: string) =>
  `<p style="text-align:center;margin:28px 0"><a href="${href}" style="background:#3b82f6;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;display:inline-block">${label}</a></p>`

export const enrollmentEmail = (name: string, course: { title: string; slug: string; duration: string; level: string }) =>
  layout(`Hi ${esc(name)}, welcome! 🎉`,
    `<p>Thank you for enrolling in <b style="color:#fff">${esc(course.title)}</b> (${esc(course.level)} · ${esc(course.duration)}).</p>
     <p>I'm happy to have you on board. Your first module will open soon and I'll email you as soon as it does.</p>
     <p>If you have any questions, just reply to this email.</p>
     ${button(`${site}/courses/${course.slug}`, 'View course')}
     <p>Happy learning,<br><b style="color:#fff">${esc(SENDER_NAME)}</b><br>Cyber Learning Hub</p>`)

export const enrollmentAdminEmail = (name: string, email: string, course: string) =>
  layout('New enrollment', `<p><b style="color:#fff">${esc(name)}</b> (${esc(email)}) enrolled in <b style="color:#fff">${esc(course)}</b>.</p>`)

export const contactReplyEmail = (name: string) =>
  layout(`Thanks for reaching out, ${esc(name)}`, `<p>We received your message and will reply within 1–2 business days.</p>${button(site, 'Back to the Hub')}`)

export const contactAdminEmail = (name: string, email: string, body: string) =>
  layout('New contact message',
    `<p><b style="color:#fff">${esc(name)}</b> &lt;${esc(email)}&gt;</p>
     <blockquote style="border-left:3px solid #3b82f6;margin:0;padding:8px 16px;color:#e2e8f0;white-space:pre-wrap">${esc(body)}</blockquote>`)

export const welcomeEmail = (token: string) =>
  layout('Welcome aboard 🛡️',
    `<p>You're subscribed to security tips, new course launches and lab walkthroughs. No spam, ever.</p>${button(`${site}/#courses`, 'Browse courses')}`,
    `<a href="${site}/api/unsubscribe?token=${token}" style="color:#64748b">Unsubscribe</a>`)
