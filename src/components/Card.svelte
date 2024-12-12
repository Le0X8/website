<script lang="ts">
	import Logo from '$c/Logo.svelte';
	import * as icons from 'simple-icons';

	export let href: string;
	export let delay: number = 0;
	export let className: string = '';
	export let title = '';
	export let logos: (keyof typeof icons)[] = [];
</script>

<a
	class="group mx-1 flex flex-col rounded-lg border border-white bg-transparent p-2 my-4 {delay > 0
		? 'fade-in'
		: ''} {className}"
	{href}
	style="animation-delay: {delay}s"
>
	<h2 class="text-2xl font-bold group-hover:underline">{title}</h2>
	<p class="py-1">
		<slot />
	</p>
	{#if logos.length > 0}
		<div class="py-1 invert flex gap-2">
			{#each logos as logo}
				<Logo name={logo} className="size-6" />
			{/each}
		</div>
	{/if}
</a>
