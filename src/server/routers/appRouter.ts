import * as trpc from '@trpc/server';
import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { prisma } from '~/server/prisma';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultAppSelect = Prisma.validator<Prisma.AppSelect>()({
  id: true,
  name: true,
  priority: true,
  type: true,
  notes: true,
});

export const appRouter = trpc
  .router()
  .query('getAll', {
    async resolve() {
      return prisma.app.findMany();
    },
  })
  .mutation('add', {
    input: z.object({
      name: z.string().min(1).max(32),
      priority: z.number(),
      type: z.string(),
      notes: z.string().optional(),
    }),
    async resolve({ input }) {
      const app = await prisma.app.create({
        data: input,
        select: defaultAppSelect,
      });
      return app;
    },
  });
