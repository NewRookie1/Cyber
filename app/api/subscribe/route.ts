import { NextResponse } from 'next/server'
import { prisma, isEmail } from '@/lib/db'
import { sendMail, welcomeEmail } from '@/lib/email'

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}))
  if (!isEmail(email)) return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  const sub = await prisma.subscriber.upsert({ where: { email: email.toLowerCase() }, update: {}, create: { email: email.toLowerCase() } })
  await sendMail(sub.email, 'Welcome to Cyber Learning Hub', welcomeEmail(sub.token))
  return NextResponse.json({ ok: true }, { status: 201 })
}
