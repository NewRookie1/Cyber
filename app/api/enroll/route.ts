import { NextResponse } from 'next/server'
import { prisma, isEmail } from '@/lib/db'
import { sendMail, enrollmentEmail, enrollmentAdminEmail } from '@/lib/email'

export async function POST(req: Request) {
  const { name, email, courseId } = await req.json().catch(() => ({}))
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100)
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  if (!isEmail(email)) return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  if (!Number.isInteger(courseId)) return NextResponse.json({ error: 'Invalid course.' }, { status: 400 })

  const course = await prisma.course.findUnique({ where: { id: courseId } })
  if (!course) return NextResponse.json({ error: 'Course not found.' }, { status: 404 })

  try {
    await prisma.$transaction([
      prisma.enrollment.create({ data: { name: name.trim(), email: email.toLowerCase(), courseId } }),
      prisma.course.update({ where: { id: courseId }, data: { students: { increment: 1 } } }),
    ])
  } catch (e: any) {
    if (e?.code === 'P2002')
      return NextResponse.json({ error: 'You are already enrolled in this course.' }, { status: 409 })
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
  const to = email.toLowerCase()
  const admin = process.env.ADMIN_EMAIL
  await Promise.all([
    sendMail(to, `You're enrolled: ${course.title}`, enrollmentEmail(name.trim(), course)),
    admin ? sendMail(admin, `New enrollment: ${course.title}`, enrollmentAdminEmail(name.trim(), to, course.title), to) : null,
  ])
  return NextResponse.json({ ok: true }, { status: 201 })
}
