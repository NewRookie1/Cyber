'use client'

export default function CTA() {
  return (
    <section className="py-24 px-4 md:px-12 bg-dark">
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
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors">
              Start Free Course
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 hover:border-blue-300 rounded-lg font-bold text-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-slate-400 mt-6">No credit card required • Start learning in 2 minutes</p>
        </div>
      </div>
    </section>
  )
}
