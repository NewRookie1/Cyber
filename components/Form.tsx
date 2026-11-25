'use client'
import { useState, FormEvent } from 'react'

type Field = { name: string; label: string; type?: string; textarea?: boolean }

export default function Form({ endpoint, fields, extra = {}, submitLabel, successMessage }: {
  endpoint: string; fields: Field[]; extra?: Record<string, unknown>; submitLabel: string; successMessage: string
}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('loading')
    const data = { ...Object.fromEntries(new FormData(form)), ...extra }
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    const json = await res.json().catch(() => ({}))
    if (res.ok) { setStatus('ok'); setMsg(successMessage); form.reset() }
    else { setStatus('error'); setMsg(json.error ?? 'Something went wrong.') }
  }

  const cls = 'w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-cyan-400'
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((f) => (
        <label key={f.name} className="block text-sm text-slate-300">
          {f.label}
          {f.textarea
            ? <textarea name={f.name} required rows={4} className={cls + ' mt-1'} />
            : <input name={f.name} type={f.type ?? 'text'} required className={cls + ' mt-1'} />}
        </label>
      ))}
      <button disabled={status === 'loading'}
        className="w-full rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-900 font-semibold py-3 transition">
        {status === 'loading' ? 'Sending…' : submitLabel}
      </button>
      {status !== 'idle' && status !== 'loading' && (
        <p className={status === 'ok' ? 'text-green-400 text-sm' : 'text-red-400 text-sm'}>{msg}</p>
      )}
    </form>
  )
}
