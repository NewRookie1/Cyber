import './globals.css'

export const metadata = {
  title: 'Cyber Learning Hub',
  description: 'Learn system hacks, cybersecurity, and penetration testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-dark to-darker">
        {children}
      </body>
    </html>
  )
}
