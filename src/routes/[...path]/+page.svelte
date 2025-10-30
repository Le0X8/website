<script lang="ts">
	import Page from '$c/Page.svelte';
	import type { Post } from '$lib/types.js';

	let { data } = $props();
</script>

<Page title={(data?.meta as Post)?.title}>
	{#if data?.content}
		<data.content />
	{/if}
</Page>
