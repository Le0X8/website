<script lang="ts">
	let { children = undefined, title = 'Untitled' } = $props();
</script>

<svelte:head>
	<title>{title} | Leonard Lesinski</title>
</svelte:head>

<div class="mx-auto mt-24 max-w-216 px-8">
	{@render children?.()}
</div>
