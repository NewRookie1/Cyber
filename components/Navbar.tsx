'use client'
import Link from 'next/link'
import { useState } from 'react'

const LINKS = [['Courses', '/courses'], ['About', '/#about'], ['Features', '/#features'], ['Contact', '/#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-darker/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-12 h-16">
        <Link href="/" className="font-bold text-lg text-cyan-400">⚡ Cyber Hub</Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {LINKS.map(([l, h]) => <Link key={l} href={h} className="hover:text-white transition">{l}</Link>)}
          <Link href="/courses/intro-to-cybersecurity" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition">Get Started</Link>
        </div>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden text-2xl text-slate-200">{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-5 flex flex-col gap-4 text-slate-200 border-t border-white/10 pt-4">
          {LINKS.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <Link href="/courses/intro-to-cybersecurity" onClick={() => setOpen(false)} className="text-center px-5 py-3 bg-blue-600 rounded-lg font-semibold">Get Started</Link>
        </div>
      )}
    </nav>
  )
}
