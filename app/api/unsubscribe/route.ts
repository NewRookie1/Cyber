import { prisma } from '@/lib/db'

export async function GET(req: Request) {
  const token = new URL(req.url).searchParams.get('token') ?? ''
  const { count } = await prisma.subscriber.deleteMany({ where: { token } })
  const msg = count ? "You've been unsubscribed." : 'Link invalid or already used.'
  return new Response(
    `<body style="background:#0f172a;color:#e2e8f0;font-family:sans-serif;display:grid;place-items:center;height:100vh"><h2>${msg}</h2></body>`,
    { headers: { 'Content-Type': 'text/html' } })
}
