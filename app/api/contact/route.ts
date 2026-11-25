import { NextResponse } from 'next/server'
import { prisma, isEmail } from '@/lib/db'
import { sendMail, contactReplyEmail, contactAdminEmail } from '@/lib/email'

export async function POST(req: Request) {
  const { name, email, body } = await req.json().catch(() => ({}))
  if (typeof name !== 'string' || name.trim().length < 2)
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  if (!isEmail(email)) return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  if (typeof body !== 'string' || body.trim().length < 10 || body.length > 2000)
    return NextResponse.json({ error: 'Message must be 10-2000 characters.' }, { status: 400 })

  await prisma.message.create({ data: { name: name.trim(), email: email.toLowerCase(), body: body.trim() } })
  const admin = process.env.ADMIN_EMAIL
  await Promise.all([
    sendMail(email.toLowerCase(), 'We got your message', contactReplyEmail(name.trim())),
    admin ? sendMail(admin, `Contact: ${name.trim()}`, contactAdminEmail(name.trim(), email, body.trim()), email.toLowerCase()) : null,
  ])
  return NextResponse.json({ ok: true }, { status: 201 })
}
