# Next.js 15 + Vercel Starter Template

A production-ready starter template for SaaS applications.

## Stack

- Next.js 15 App Router
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui
- Clerk Authentication
- Drizzle ORM + PostgreSQL
- tRPC
- GitHub Actions CI/CD
- Vercel deployment

## Quick Start

```bash
# Create from template
gh repo create my-app --template=owner/nextjs-vercel-starter

# Install dependencies
cd my-app
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

## Environment Variables

```bash
# Database
DATABASE_URL=postgresql://...

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm run format` - Prettier
- `npm run db:generate` - Generate Drizzle migrations
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Drizzle Studio

## Features

- [x] Next.js 15 App Router
- [x] TypeScript strict mode
- [x] Tailwind CSS + shadcn/ui
- [x] Clerk authentication
- [x] Drizzle ORM + PostgreSQL
- [x] tRPC API routes
- [x] GitHub Actions CI/CD
- [x] Vercel deployment config
- [x] ESLint + Prettier
- [x] Health check endpoint

## License

MIT
