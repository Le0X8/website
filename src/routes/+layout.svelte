<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import * as NavigationMenu from '$ui/navigation-menu';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';

	let root = $derived(page.url.pathname === '/');
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher />

{#if !root}
	<NavigationMenu.Root
		class={[
			'fixed',
			'top-2',
			'left-2',
			'border',
			'border-border',
			'w-[calc(100%-1rem)]',
			'max-w-none',
			'h-12',
			'rounded-lg',
			'p-1',
			'px-3',
			'bg-card',
			'text-card-foreground',
			'justify-between'
		]}
	>
		<div class={['w-fit', 'lg:basis-1/4', 'font-heading']}>
			<a
				href={resolve('/')}
				class={['flex', 'flex-col', 'justify-center', 'items-end', 'w-fit', 'group']}
			>
				<span
					class={[
						'text-lg',
						'leading-6',
						'font-bold',
						'underline',
						'decoration-transparent',
						'group-hover:decoration-inherit',
						'transition-all',
						'duration-300',
						'ease-in-out'
					]}>Leonard Lesinski</span
				>
				<span
					class={[
						'text-xs',
						'leading-3',
						'text-muted-foreground',
						'group-hover:text-primary',
						'transition-all',
						'duration-300',
						'ease-in-out'
					]}>lesinski.cc</span
				>
			</a>
		</div>
		<div class={['basis-1/2', 'hidden', 'lg:block']}>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link href="/">Home</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</div>
		<div class={['basis-1/4', 'hidden', 'sm:flex', 'justify-end']}>
			<SiGithub />
		</div>
	</NavigationMenu.Root>
{/if}

<main class={[!root && 'pt-16']}>
	{@render children()}
</main>
