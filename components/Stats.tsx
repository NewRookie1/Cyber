import { prisma } from '@/lib/db'
import Counter from './Counter'
import Reveal from './Reveal'

const LEVEL_COLOR: Record<string, string> = { Beginner: '#22c55e', Intermediate: '#3b82f6', Advanced: '#a855f7' }

export default async function Stats() {
  const [courses, enrollments] = await Promise.all([
    prisma.course.findMany({ orderBy: { students: 'desc' } }),
    prisma.enrollment.count(),
  ])
  const total = courses.reduce((a, c) => a + c.students, 0)
  const max = Math.max(...courses.map((c) => c.students), 1)

  // donut: students per level
  const byLevel = Object.entries(courses.reduce<Record<string, number>>((m, c) => ((m[c.level] = (m[c.level] ?? 0) + c.students), m), {}))
  const R = 70, C = 2 * Math.PI * R
  let offset = 0

  return (
    <section className="py-24 px-4 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-center">
            {[[total, '+', 'Students'], [courses.length, '', 'Courses'], [enrollments, '', 'New enrollments'], [98, '%', 'Satisfaction']].map(([n, s, l]) => (
              <div key={l as string} className="rounded-2xl bg-slate-800/50 border border-white/10 p-6">
                <div className="text-4xl font-bold gradient-text"><Counter to={n as number} suffix={s as string} /></div>
                <div className="text-sm text-slate-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2 rounded-2xl bg-slate-800/50 border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white mb-5">Course popularity</h3>
            <div className="space-y-4">
              {courses.map((c) => (
                <div key={c.id}>
                  <div className="flex justify-between text-sm mb-1"><span className="text-slate-300">{c.title}</span><span className="text-slate-500">{c.students.toLocaleString()}</span></div>
                  <div className="h-2.5 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(c.students / max) * 100}%`, background: LEVEL_COLOR[c.level] }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="rounded-2xl bg-slate-800/50 border border-white/10 p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-5 self-start">Students by level</h3>
            <svg viewBox="0 0 200 200" className="w-44 -rotate-90">
              {byLevel.map(([lvl, n]) => {
                const len = (n / total) * C
                const el = <circle key={lvl} cx="100" cy="100" r={R} fill="none" stroke={LEVEL_COLOR[lvl]} strokeWidth="26" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-offset} />
                offset += len
                return el
              })}
            </svg>
            <ul className="mt-5 space-y-1 text-sm self-start">
              {byLevel.map(([lvl, n]) => (
                <li key={lvl} className="flex items-center gap-2 text-slate-300"><i className="w-3 h-3 rounded-sm" style={{ background: LEVEL_COLOR[lvl] }} />{lvl} <span className="text-slate-500">{Math.round((n / total) * 100)}%</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
