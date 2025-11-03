<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$c/Navigation.svelte';
	import Footer from '$c/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/state';

	let root = $derived(page.url.pathname === '/');

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<Navigation {root} />

<main class={['prose min-h-lvh max-w-none prose-neutral dark:prose-invert']}>
	{@render children?.()}
</main>

<Footer />
