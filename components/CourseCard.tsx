import Link from 'next/link'
import { price } from '@/lib/db'

type C = { slug: string; title: string; level: string; duration: string; students: number; priceCents: number; summary: string; image: string }

export default function CourseCard({ c }: { c: C }) {
  return (
    <Link href={`/courses/${c.slug}`}
      className="group rounded-2xl overflow-hidden bg-slate-800/60 border border-white/10 hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition flex flex-col">
      <div className="overflow-hidden">
        <img src={c.image} alt={c.title} loading="lazy" className="w-full aspect-video object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between text-xs text-slate-400 mb-2"><span className="text-cyan-400">{c.level}</span><span>{c.duration}</span></div>
        <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
        <p className="text-sm text-slate-400 mb-4 flex-1">{c.summary}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400">{c.students.toLocaleString()} students</span>
          <span className="font-bold text-white">{price(c.priceCents)}</span>
        </div>
        <span className="mt-4 text-center rounded-lg bg-blue-600 group-hover:bg-blue-500 py-2.5 font-semibold text-sm transition">View &amp; enroll →</span>
      </div>
    </Link>
  )
}
