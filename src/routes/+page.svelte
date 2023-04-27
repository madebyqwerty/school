<script lang="ts">
	import { trpc } from '$lib/trpc';

	const hello = trpc.hello.get.query();

	const invalidate = $hello.refetch;
</script>

{#if $hello.isLoading}
	<p>Loading...</p>
{/if}

<h1 class="text-4xl">{$hello.data}</h1>

<button on:click={() => invalidate()}>invalidate</button>
