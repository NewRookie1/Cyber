import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-darker py-12 px-4 md:px-12 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Cyber Hub</h4>
            <p className="text-slate-400 text-sm">Learning cybersecurity and ethical hacking.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Courses</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="/courses" className="hover:text-blue-400">All Courses</Link></li>
              <li><Link href="/courses/intro-to-cybersecurity" className="hover:text-blue-400">Free Courses</Link></li>
              <li><Link href="/courses?level=Advanced" className="hover:text-blue-400">Advanced Courses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="/#about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/#newsletter" className="hover:text-blue-400">Newsletter</Link></li>
              <li><Link href="/#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="/legal/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="/legal/conduct" className="hover:text-blue-400">Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Cyber Learning Hub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://twitter.com/intent/tweet?url=https://cyber-rho-two.vercel.app&text=Learn%20ethical%20hacking%20at%20Cyber%20Learning%20Hub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">Share on X</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://cyber-rho-two.vercel.app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">LinkedIn</a>
            <a href="https://github.com/NewRookie1/Cyber" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
