import Link from 'next/link'
import { prisma } from '@/lib/db'
import CourseCard from './CourseCard'

export default async function Courses() {
  const courses = await prisma.course.findMany({ orderBy: { id: 'asc' } })
  return (
    <section id="courses" className="py-24 px-4 md:px-12 bg-gradient-to-b from-dark to-slate-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center gradient-text">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{courses.map((c) => <CourseCard key={c.id} c={c} />)}</div>
        <div className="text-center mt-12">
          <Link href="/courses" className="inline-block px-8 py-3 border-2 border-blue-400/60 hover:border-blue-300 rounded-lg font-semibold transition">View all courses</Link>
        </div>
      </div>
    </section>
  )
}
