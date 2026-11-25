import Link from 'next/link'
import Newsletter from './Newsletter'

export default function CTA() {
  return (
    <section id="newsletter" className="scroll-mt-16 py-24 px-4 md:px-12 bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of students learning cybersecurity and ethical hacking today. 
            Start with our free introductory course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses/intro-to-cybersecurity" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors text-center">Start Free Course</Link>
            <Link href="/#contact" className="px-8 py-4 border-2 border-blue-400 hover:border-blue-300 rounded-lg font-bold text-lg transition-colors text-center">Contact Us</Link>
          </div>
          <p className="text-slate-400 mt-6">No credit card required • Start learning in 2 minutes</p>
          <p className="text-sm text-slate-400 mt-10">Or get security tips &amp; course launches by email:</p>
          <Newsletter />
        </div>
      </div>
    </section>
  )
}
