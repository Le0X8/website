<script lang="ts">
	import '../styles/global.scss';
	import { ChevronsRight } from 'lucide-svelte';
</script>

<nav class="fixed h-12 w-full"></nav>

<main class="min-h-lvh w-full bg-zinc-950 py-24 text-white">
	<ChevronsRight class="fixed left-[-20lvh] z-1 size-lvh rotate-30 text-zinc-900"></ChevronsRight>
	<div class="relative z-10 w-full px-24">
		<slot />
	</div>
</main>

<footer class="absolute z-20 w-full bg-teal-700 p-2 text-center text-white">
	&copy; 2021-{new Date().getFullYear()} Leonard Lesinski
</footer>
