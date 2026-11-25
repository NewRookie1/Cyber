import Link from 'next/link'
import { prisma } from '@/lib/db'
import CourseCard from '@/components/CourseCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default async function AllCourses({ searchParams }: { searchParams: { level?: string } }) {
  const level = LEVELS.includes(searchParams.level ?? '') && searchParams.level !== 'All' ? searchParams.level : undefined
  const courses = await prisma.course.findMany({ where: { level }, orderBy: { id: 'asc' } })
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-12 pt-28 pb-24 min-h-screen">
        <h1 className="text-5xl font-bold gradient-text mb-8">All Courses</h1>
        <div className="flex flex-wrap gap-3 mb-10">
          {LEVELS.map((l) => {
            const active = (level ?? 'All') === l
            return <Link key={l} href={l === 'All' ? '/courses' : `/courses?level=${l}`}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${active ? 'bg-blue-600 border-blue-600' : 'border-white/20 hover:border-cyan-400'}`}>{l}</Link>
          })}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{courses.map((c) => <CourseCard key={c.id} c={c} />)}</div>
      </main>
      <Footer />
    </>
  )
}
