<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
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

	export let href: string;
</script>

<a
	class="mouse-cursor-gradient-tracking dark flex items-center justify-center rounded-lg border border-teal-700 bg-teal-700 p-1 pr-2 font-medium text-white"
	bind:this={el}
	{href}
>
	<ChevronRight class="size-6" />
	<span><slot /></span>
</a>
