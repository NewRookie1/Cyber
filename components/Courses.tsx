'use client'

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Cybersecurity',
      level: 'Beginner',
      duration: '4 weeks',
      students: '5.2K',
      price: 'Free'
    },
    {
      id: 2,
      title: 'Network Penetration Testing',
      level: 'Intermediate',
      duration: '6 weeks',
      students: '3.1K',
      price: '$99'
    },
    {
      id: 3,
      title: 'Web Application Security',
      level: 'Intermediate',
      duration: '5 weeks',
      students: '2.8K',
      price: '$99'
    },
    {
      id: 4,
      title: 'Ethical Hacking Masterclass',
      level: 'Advanced',
      duration: '8 weeks',
      students: '1.5K',
      price: '$199'
    },
    {
      id: 5,
      title: 'Malware Analysis',
      level: 'Advanced',
      duration: '7 weeks',
      students: '1.2K',
      price: '$199'
    },
    {
      id: 6,
      title: 'Incident Response & Forensics',
      level: 'Advanced',
      duration: '6 weeks',
      students: '980',
      price: '$179'
    },
  ]

  return (
    <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-dark to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center gradient-text">
          Featured Courses
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="hover-lift bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 transition-colors"
            >
              <div className="h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-4xl">📚</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-slate-400">
                  <p>📊 Level: <span className="text-blue-400">{course.level}</span></p>
                  <p>⏱️ Duration: <span className="text-blue-400">{course.duration}</span></p>
                  <p>👥 Students: <span className="text-blue-400">{course.students}</span></p>
                </div>
                
                <div className="border-t border-slate-700 pt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold gradient-text">{course.price}</span>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold transition-colors">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
