import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const courses = await prisma.course.findMany({ orderBy: { id: 'asc' } })
  return NextResponse.json(courses.map((c) => ({ ...c, syllabus: JSON.parse(c.syllabus) })))
}
