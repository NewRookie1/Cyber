'use client'

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
              <li><a href="#" className="hover:text-blue-400">All Courses</a></li>
              <li><a href="#" className="hover:text-blue-400">Free Courses</a></li>
              <li><a href="#" className="hover:text-blue-400">Certifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Code of Conduct</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 Cyber Learning Hub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-blue-400">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
