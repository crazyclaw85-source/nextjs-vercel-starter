import { auth } from '@clerk/nextjs/server'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const session = await auth()
  const userId = session.userId

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome! Your user ID is:{' '}
          <code className="rounded bg-muted p-1">{userId}</code>
        </p>
        <div className="mt-8 rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">Features</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Next.js 15 App Router</li>
            <li>TypeScript Strict Mode</li>
            <li>Tailwind CSS + shadcn/ui</li>
            <li>Clerk Authentication</li>
            <li>Drizzle ORM + PostgreSQL</li>
            <li>tRPC API Routes</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
