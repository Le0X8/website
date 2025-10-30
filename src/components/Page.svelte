<script lang="ts">
	let { children = undefined, title = 'Untitled' } = $props();
</script>

<svelte:head>
	<title>{title} | Leonard Lesinski</title>
</svelte:head>

<div>
	{@render children?.()}
</div>
