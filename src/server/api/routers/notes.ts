import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const notesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({ title: z.string().min(1), description: z.string().min(1) }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          description: input.description,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.post.delete({
        where: {
          createdBy: { id: ctx.session.user.id },
          id: input.id,
        },
      });
    }),
});
