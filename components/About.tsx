'use client'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 px-4 md:px-12 bg-gradient-to-b from-slate-900 to-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
          About Our Platform
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Cyber Learning Hub is your gateway to understanding the digital security landscape. 
              Whether you're a beginner curious about cybersecurity or an experienced professional 
              looking to sharpen your skills, we provide comprehensive training on system hacks and 
              ethical hacking practices.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our curriculum is designed by industry experts with real-world experience in 
              penetration testing, vulnerability assessment, and security research. Learn ethical 
              hacking techniques in a structured, legal, and responsible environment.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Expert-led instruction
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Hands-on labs and exercises
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Industry certifications
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-slate-700">
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded">
                <div className="text-2xl font-bold gradient-text mb-2">15K+</div>
                <p className="text-slate-400">Active Students</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded">
                <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                <p className="text-slate-400">Courses Available</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded">
                <div className="text-2xl font-bold gradient-text mb-2">98%</div>
                <p className="text-slate-400">Student Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
