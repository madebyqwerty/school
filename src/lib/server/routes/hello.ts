import { router, publicProcedure } from '../trpc';

export const helloRouter = router({
	get: publicProcedure.query(() => {
		return 'Hello World!, from the TPRC server!' + Math.random();
	}),
});
