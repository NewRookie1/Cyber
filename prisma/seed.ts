import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const courses = [
  { slug: 'intro-to-cybersecurity', title: 'Introduction to Cybersecurity', level: 'Beginner', duration: '4 weeks', students: 5200, priceCents: 0,
    summary: 'Threats, defenses and the mindset every security professional needs.',
    syllabus: ['The threat landscape', 'CIA triad & risk', 'Passwords & authentication', 'Networking basics', 'Safe browsing & email', 'Your first lab'] },
  { slug: 'network-penetration-testing', title: 'Network Penetration Testing', level: 'Intermediate', duration: '6 weeks', students: 3100, priceCents: 9900,
    summary: 'Scan, enumerate and assess networks inside legal lab environments.',
    syllabus: ['Recon & OSINT', 'Nmap deep dive', 'Service enumeration', 'Vulnerability assessment', 'Reporting', 'Capstone lab'] },
  { slug: 'web-application-security', title: 'Web Application Security', level: 'Intermediate', duration: '5 weeks', students: 2800, priceCents: 9900,
    summary: 'Understand and defend against the OWASP Top 10.',
    syllabus: ['HTTP internals', 'Injection', 'XSS & CSRF', 'Auth & session flaws', 'API security'] },
  { slug: 'ethical-hacking-masterclass', title: 'Ethical Hacking Masterclass', level: 'Advanced', duration: '8 weeks', students: 1500, priceCents: 19900,
    summary: 'End-to-end engagements: from scoping to exploitation to report.',
    syllabus: ['Rules of engagement', 'Exploitation', 'Privilege escalation', 'Active Directory', 'Post-exploitation', 'Red team report'] },
  { slug: 'malware-analysis', title: 'Malware Analysis', level: 'Advanced', duration: '7 weeks', students: 1200, priceCents: 19900,
    summary: 'Static and dynamic analysis of malicious samples in a sandbox.',
    syllabus: ['Safe lab setup', 'Static analysis', 'Dynamic analysis', 'Reverse engineering basics', 'Writing detections'] },
  { slug: 'incident-response-forensics', title: 'Incident Response & Forensics', level: 'Advanced', duration: '6 weeks', students: 980, priceCents: 17900,
    summary: 'Detect, contain and investigate real-world security incidents.',
    syllabus: ['IR lifecycle', 'Disk & memory forensics', 'Log analysis', 'Containment', 'Post-incident review'] },
]

async function main() {
  for (const [i, c] of courses.entries()) {
    const data = { ...c, syllabus: JSON.stringify(c.syllabus), image: `/images/course-${i + 1}.svg` }
    await prisma.course.upsert({ where: { slug: c.slug }, update: data, create: data })
  }
  console.log(`Seeded ${courses.length} courses`)
}
main().finally(() => prisma.$disconnect())
