<script lang="ts">
	export let title: string;

	$: id = title
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll('&', 'and')
		.replaceAll('/', 'or')
		.replace(/[^a-z0-9\-]/g, '');
</script>

<div {id}>
	<a
		class="my-2 flex items-center gap-2 text-lg text-zinc-400 dark:text-zinc-500 uppercase no-underline"
		href={`#${id}`}
	>
		{title}
	</a>

	<div class="mb-3 grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
		<slot />
	</div>
</div>
