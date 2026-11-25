import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma, price } from '@/lib/db'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'

export const dynamic = 'force-dynamic'

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await prisma.course.findUnique({ where: { slug: params.slug } })
  if (!course) notFound()
  const syllabus: string[] = JSON.parse(course.syllabus)

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 md:px-12 pt-28 pb-24">
        <Link href="/#courses" className="text-sm text-cyan-400 hover:underline">← All courses</Link>
        <img src={course.image} alt={course.title} className="w-full aspect-video object-cover rounded-2xl mt-4 mb-8" />
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-cyan-400 text-sm mb-1">{course.level} · {course.duration} · {course.students.toLocaleString()} students</p>
            <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-slate-300 mb-8">{course.summary}</p>
            <h2 className="text-xl font-semibold text-white mb-3">Syllabus</h2>
            <ol className="space-y-2">
              {syllabus.map((m, i) => (
                <li key={m} className="flex gap-3 rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-200">
                  <span className="text-cyan-400 font-mono">{String(i + 1).padStart(2, '0')}</span>{m}
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 h-fit">
            <p className="text-3xl font-bold text-white mb-4">{price(course.priceCents)}</p>
            <Form endpoint="/api/enroll" extra={{ courseId: course.id }} submitLabel="Enroll now"
              successMessage="You're enrolled! 🎉"
              fields={[{ name: 'name', label: 'Name' }, { name: 'email', label: 'Email', type: 'email' }]} />
          </aside>
        </div>
      </main>
    </>
  )
}
