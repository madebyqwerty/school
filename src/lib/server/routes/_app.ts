import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { helloRouter } from './hello';

export const appRouter = router({
	greeting: publicProcedure
		.input(
			z.object({
				name: z.string().optional(),
			})
		)
		.query(({ input }) => {
			return `Hello, ${input.name ?? 'world'}!`;
		}),
	hello: helloRouter,
});

export type AppRouter = typeof appRouter;
