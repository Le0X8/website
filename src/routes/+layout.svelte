<script lang="ts">
	import '../styles/global.scss';
	import { Menu, ArrowLeft, ChevronDown, ChevronUp, ExternalLink } from 'lucide-svelte';

	const navEntries: { name: string; href: string; external?: boolean }[] = [
		{ name: 'About', href: '/about' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'GitHub', href: 'https://github.com/Le0X8', external: true }
	];
</script>

<div class="h-12 bg-teal-950"></div>

<nav
	class="fixed top-0 flex h-12 w-lvw border-b-2 border-teal-700 bg-transparent text-white backdrop-blur-md"
>
	<a href="/">
		<header class="px-2 py-1 text-3xl font-thin">Leonard Lesinski</header>
	</a>
	<div class="flex-grow"></div>
	<input type="checkbox" id="menu-toggle" class="peer hidden" />
	<ul
		class="fixed top-12 hidden h-[calc(100vh-3rem)] w-full flex-col sm:flex-row gap-2 p-2 text-xl backdrop-blur-md peer-checked:flex sm:static sm:flex sm:h-auto sm:w-fit sm:backdrop-blur-0"
	>
		{#each navEntries as { name, href, external }}
			<li
				class="flex items-center justify-center gap-1 border-r-teal-700 py-2 pr-2 underline decoration-transparent transition last:border-r-0 last:pr-0 hover:decoration-teal-600 sm:h-full sm:border-r-2"
			>
				<a {href} class="flex items-center justify-center gap-1">
					{name}
					{#if external}
						<ExternalLink class="inline-block size-4" />
					{/if}
				</a>
			</li>
		{/each}
	</ul>
	<label
		for="menu-toggle"
		class="flex cursor-pointer items-center justify-center p-2 text-white transition hover:text-teal-600 peer-checked:text-teal-600 peer-checked:hover:text-white sm:hidden"
	>
		<Menu class="size-6" />
	</label>
</nav>

<main class="min-h-[calc(100vh-3rem)] bg-teal-950 text-white">
	<slot />
</main>

<footer class="w-full bg-teal-700 p-2 text-center text-white">
	&copy; 2021-{new Date().getFullYear()} Leonard Lesinski
</footer>
