import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc'
import { z } from 'zod'
import { users, posts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export const appRouter = createTRPCRouter({
  health: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() }
  }),

  user: createTRPCRouter({
    list: publicProcedure.query(async ({ ctx }) => {
      return await ctx.db.select().from(users)
    }),

    byId: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ ctx, input }) => {
        const result = await ctx.db
          .select()
          .from(users)
          .where(eq(users.id, input.id))
          .limit(1)
        return result[0] ?? null
      }),

    byClerkId: publicProcedure
      .input(z.object({ clerkId: z.string() }))
      .query(async ({ ctx, input }) => {
        const result = await ctx.db
          .select()
          .from(users)
          .where(eq(users.clerkId, input.clerkId))
          .limit(1)
        return result[0] ?? null
      }),

    create: publicProcedure
      .input(
        z.object({
          clerkId: z.string(),
          email: z.string().email(),
          name: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const result = await ctx.db
          .insert(users)
          .values(input)
          .returning()
        return result[0]
      }),
  }),

  post: createTRPCRouter({
    list: publicProcedure.query(async ({ ctx }) => {
      return await ctx.db.select().from(posts)
    }),

    create: publicProcedure
      .input(
        z.object({
          title: z.string().min(1),
          content: z.string().optional(),
          authorId: z.string(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const result = await ctx.db.insert(posts).values(input).returning()
        return result[0]
      }),
  }),
})

export type AppRouter = typeof appRouter