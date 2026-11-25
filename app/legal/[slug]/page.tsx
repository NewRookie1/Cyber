import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PAGES: Record<string, { title: string; body: string[] }> = {
  privacy: { title: 'Privacy Policy', body: [
    'We collect only what you give us: your name and email when you enroll, subscribe or contact us.',
    'We use it to send confirmations, course updates and replies. We never sell your data.',
    'You can unsubscribe from emails at any time with the link in every newsletter, or contact us to delete your data.'] },
  terms: { title: 'Terms of Service', body: [
    'Course content is for educational purposes only. You may not redistribute paid course material.',
    'You agree to use all techniques taught only on systems you own or have written permission to test.',
    'We may update courses and these terms; continued use means you accept the changes.'] },
  conduct: { title: 'Code of Conduct', body: [
    'Hack ethically: only test systems you are authorised to test.',
    'Treat every learner and instructor with respect. Harassment is not tolerated.',
    'Report vulnerabilities responsibly and never use what you learn to cause harm.'] },
}

export default function Legal({ params }: { params: { slug: string } }) {
  const p = PAGES[params.slug]
  if (!p) notFound()
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-24 min-h-screen">
        <h1 className="text-4xl font-bold gradient-text mb-8">{p.title}</h1>
        <div className="space-y-4 text-slate-300 leading-relaxed">{p.body.map((t) => <p key={t}>{t}</p>)}</div>
        <p className="text-xs text-slate-500 mt-10">Template text - have a lawyer review it before launch.</p>
      </main>
      <Footer />
    </>
  )
}
