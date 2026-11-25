# Cyber Learning Hub

A modern landing page for learning cybersecurity, ethical hacking, and system security practices. Built with Next.js and Tailwind CSS, optimized for Vercel deployment.

## Features

✅ **Hero Section** - Eye-catching landing with gradient effects  
✅ **About Section** - Platform overview and key statistics  
✅ **Features** - Six key differentiators with icons  
✅ **Courses** - Showcase of 6 featured courses with pricing  
✅ **Call-to-Action** - Sign-up prompts  
✅ **Footer** - Navigation and social links  

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Courses.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/               # Static assets
├── package.json
└── tailwind.config.js
```

## Customization

- **Colors**: Modify `tailwind.config.js` to change the theme
- **Content**: Edit component files in `components/` folder
- **Metadata**: Update metadata in `app/layout.tsx`

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Next.js and deploy

## License

MIT
"# Cyber" 
"# Cyber" 

## Backend (added)

- **Database**: Prisma + SQLite (`prisma/schema.prisma`) with `Course`, `Enrollment`, `Message` models
- **API**: `GET /api/courses`, `POST /api/enroll`, `POST /api/contact`
- **Pages**: `/courses/[slug]` detail + enroll form, contact form on home page
- **Images**: generated SVG covers in `public/images/`

```bash
cp .env.example .env
npm install
npm run setup     # creates DB + seeds courses
npm run dev
npm run db:studio # browse enrollments/messages
```

**Deploying to Vercel:** SQLite files don't persist there. Create a free Postgres DB (Neon/Supabase), set `provider = "postgresql"` in `prisma/schema.prisma`, set `DATABASE_URL` in Vercel, then run `npx prisma db push && npx prisma db seed` once.

## Email

Emails sent (HTML, branded): enrollment confirmation (+ admin alert), contact auto-reply (+ admin alert), newsletter welcome with one-click unsubscribe.
Set `SMTP_*`, `MAIL_FROM`, `ADMIN_EMAIL`, `NEXT_PUBLIC_SITE_URL` in `.env` (also in Vercel env vars). With no `SMTP_HOST`, emails are printed to the server console so you can test without a mail account.
For Gmail use an **App Password** (Google Account → Security → 2-Step Verification → App passwords), not your normal password.

## Images

Course covers are vector illustrations in `public/images/course-N.svg`. To use real photos, drop files in `public/images/` (e.g. `course-1.jpg`) and change the `image` path for each course in `prisma/seed.ts`, then run `npm run db:seed`. Remote Unsplash URLs also work. Use only images you have the licence to use.
