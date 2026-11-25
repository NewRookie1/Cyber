import nodemailer from 'nodemailer'

async function main() {
  const t = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
  await t.verify()
  console.log('✅ SMTP login OK')
  await t.sendMail({ from: process.env.MAIL_FROM, to: process.env.ADMIN_EMAIL, subject: 'Test from Cyber Hub', text: 'It works!' })
  console.log('✅ Test email sent to', process.env.ADMIN_EMAIL)
}
main().catch((e) => console.error('❌', e.message))
