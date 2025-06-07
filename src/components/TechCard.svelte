<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLDivElement;

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
	export let projects: { name: string; url: string }[] = [];

	$: id = name
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll('&', 'and')
		.replaceAll('/', 'or')
		.replace(/[^a-z0-9\-]/g, '');
</script>

<div
	class="mouse-cursor-gradient-tracking flex min-h-20 flex-col gap-2 rounded-lg border border-zinc-300 bg-zinc-100 p-3 target:border-teal-500 target:bg-teal-100 dark:border-zinc-700 dark:bg-zinc-900 dark:bg-[url(/pattern.png)] dark:bg-blend-multiply dark:target:border-teal-700 dark:target:bg-teal-900"
	{id}
	bind:this={el}
>
	<a class="mt-0 mb-0 flex items-center gap-3" href={url} target="_blank" rel="noopener noreferrer">
		<svelte:component this={logo}></svelte:component>
		{name}
	</a>
	<p class="mt-0 mb-0 grow text-base text-zinc-700 dark:text-zinc-400">
		{description}
	</p>
	{#if projects.length > 0}
		<div>
			<p class="mt-0 mb-0 text-base">Used in</p>
			<ul class="mt-0 mb-0 list-none pl-0 text-base">
				{#each projects as project}
					<li class="mt-0 mb-0">
						<a href={project.url} target="_blank" rel="noopener noreferrer" class="no-underline">
							&rarr; {project.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	<div class="grow"></div>
	<p class="mt-0 mb-0 text-sm">since {since}</p>
</div>
