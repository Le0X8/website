<script lang="ts">
	import '../styles/global.scss';
	import { ChevronsRight } from 'lucide-svelte';
</script>

<nav class="fixed h-12 w-full"></nav>

<main
	class="min-h-lvh w-full bg-white py-24 text-zinc-950 dark:bg-zinc-950 dark:text-white print:py-0"
>
	<ChevronsRight
		class="fixed left-[-20lvh] z-1 size-lvh rotate-30 text-zinc-100 dark:text-zinc-900 print:hidden"
	></ChevronsRight>
	<div class="relative z-10 w-full px-4 lg:px-24 print:px-0">
		<slot />
	</div>
</main>

<footer
	class="absolute z-20 w-full border-t p-2 text-center text-zinc-600 dark:border-t-0 dark:bg-teal-700 dark:text-white print:hidden"
>
	<p>&copy; 2021-{new Date().getFullYear()} Leonard Lesinski</p>
	<p class="text-sm">
		<a href="/imprint" class="underline">Imprint</a>
	</p>
</footer>
