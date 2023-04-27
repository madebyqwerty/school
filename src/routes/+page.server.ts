import { trpc } from '$lib/trpc';

export async function load(event) {
	console.log('Running server load');

	await trpc.hello.get.ssr(event);
}
