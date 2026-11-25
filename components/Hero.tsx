'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LINES = ['$ nmap -sV target.lab', '> 22/tcp open ssh  OpenSSH 8.9', '> 80/tcp open http nginx 1.24', '$ echo "learn. practice. defend."']

export default function Hero() {
  const [text, setText] = useState('')
  useEffect(() => {
    const full = LINES.join('\n')
    let i = 0
    const id = setInterval(() => { i = (i + 1) % (full.length + 40); setText(full.slice(0, Math.min(i, full.length))) }, 55)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-12 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-24 left-10 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <span className="inline-block text-xs font-mono px-3 py-1 rounded-full border border-cyan-400/40 text-cyan-300 mb-6">● Ethical hacking · Legal labs</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">Master System Hacks</h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Learn cybersecurity, penetration testing and ethical hacking from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/courses/intro-to-cybersecurity" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-lg text-center transition shadow-lg shadow-blue-600/30">Start Free Course</Link>
            <Link href="/#courses" className="px-8 py-4 border-2 border-blue-400/60 hover:border-blue-300 rounded-lg font-bold text-lg text-center transition">Browse Courses</Link>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur shadow-2xl shadow-blue-900/30">
          <div className="flex gap-2 px-4 py-3 border-b border-white/10">
            <i className="w-3 h-3 rounded-full bg-red-500" /><i className="w-3 h-3 rounded-full bg-yellow-400" /><i className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">kali@lab: ~</span>
          </div>
          <pre className="p-5 font-mono text-sm text-green-400 min-h-[190px] whitespace-pre-wrap cursor">{text}</pre>
        </div>
      </div>
    </section>
  )
}
