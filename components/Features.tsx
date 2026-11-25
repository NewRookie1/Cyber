'use client'

export default function Features() {
  const features = [
    {
      icon: '🔐',
      title: 'Security Fundamentals',
      description: 'Learn core concepts of cybersecurity and information protection'
    },
    {
      icon: '🧪',
      title: 'Hands-on Labs',
      description: 'Practice real-world hacking scenarios in safe, isolated environments'
    },
    {
      icon: '🏆',
      title: 'Certifications',
      description: 'Earn industry-recognized certificates to boost your career'
    },
    {
      icon: '📊',
      title: 'Live Tracking',
      description: 'Monitor your progress with detailed analytics and performance metrics'
    },
    {
      icon: '👥',
      title: 'Community',
      description: 'Connect with thousands of security professionals worldwide'
    },
    {
      icon: '🚀',
      title: 'Career Support',
      description: 'Get job placement assistance and career guidance from experts'
    },
  ]

  return (
    <section id="features" className="scroll-mt-16 py-24 px-4 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center gradient-text">
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="hover-lift bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-blue-400 cursor-pointer"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
