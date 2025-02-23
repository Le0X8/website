<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLAnchorElement;

	onMount(() => {
		el.addEventListener('mousemove', (ev: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			const x = ev.clientX - rect.left;
			const y = ev.clientY - rect.top;

			el.style.setProperty('--x', x + 'px');
			el.style.setProperty('--y', y + 'px');
		});
	});

	export let logo: any;
	export let name: string;
	export let description: string;
	export let since: number;
	export let url: string;

	$: id = name
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll('&', 'and')
		.replaceAll('/', 'or')
		.replace(/[^a-z0-9\-]/g, '');
</script>

<a
	class="mouse-cursor-gradient-tracking flex min-h-20 flex-col gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 p-3 no-underline dark:bg-zinc-900 dark:bg-[url(/pattern.png)] dark:bg-blend-multiply target:bg-teal-100 dark:target:bg-teal-900 target:border-teal-500 dark:target:border-teal-700"
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	{id}
	bind:this={el}
>
	<h4 class="mt-0 mb-0 flex items-center gap-3">
		<svelte:component this={logo}></svelte:component>
		{name}
	</h4>
	<p class="mb-0 grow text-base text-zinc-700 dark:text-zinc-400">
		{description}
	</p>
	<p class="mt-0 mb-0 text-sm">since {since}</p>
</a>
