<script lang="ts">
	import Page from '$c/Page.svelte';
	import type { Post } from '$lib/types.js';

	let { data } = $props();

	function categoryToStr(category: string) {
		switch (category) {
			case 'cs101':
				return 'CS101';
			case 'linux':
				return 'Linux';
			default:
				return category;
		}
	}

	let title = $derived(
		data?.type === 'list'
			? (data?.meta as { category: string })?.category
				? `All ${categoryToStr((data?.meta as { category: string }).category)} posts`
				: 'All blog posts'
			: (data?.meta as Post)?.title || 'Untitled'
	);
</script>

<Page {title}>
	<h1>{title}</h1>
	{#if data.type === 'list'}
		{#each (data?.meta as { posts: Post[] }).posts as post}
			<a href={post.path}>{post.title}</a>
		{/each}
	{/if}
	{#if data?.content}
		<article>
			<data.content />
		</article>
	{/if}
</Page>
