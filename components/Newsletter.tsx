'use client'
import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [state, setState] = useState<{ s: 'idle' | 'loading' | 'ok' | 'error'; m: string }>({ s: 'idle', m: '' })
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setState({ s: 'loading', m: '' })
    const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: new FormData(form).get('email') }) })
    const j = await res.json().catch(() => ({}))
    if (res.ok) { setState({ s: 'ok', m: 'Subscribed! Check your inbox 📬' }); form.reset() } else setState({ s: 'error', m: j.error ?? 'Something went wrong.' })
  }
  return (
    <div className="mt-10">
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input name="email" type="email" required placeholder="you@example.com" className="flex-1 rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-cyan-400" />
        <button disabled={state.s === 'loading'} className="rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-900 font-semibold px-6 py-3 transition">{state.s === 'loading' ? '…' : 'Subscribe'}</button>
      </form>
      {state.m && <p className={`mt-3 text-sm ${state.s === 'ok' ? 'text-green-400' : 'text-red-400'}`}>{state.m}</p>}
    </div>
  )
}
