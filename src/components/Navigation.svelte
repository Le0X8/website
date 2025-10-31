<script lang="ts">
	import NavItem from '$c/NavItem.svelte';
	import * as NavigationMenu from '$ui/navigation-menu';

	let { root = false } = $props();
</script>

<nav
	class={[
		'hidden md:flex',
		'top-2 right-2 left-2 z-50 h-12 items-center justify-start rounded-lg px-4 text-white backdrop-blur-md backdrop-brightness-50',
		root && 'absolute backdrop-blur-none backdrop-brightness-100',
		!root && 'fixed border-border dark:border'
	]}
>
	<a
		href="/"
		class="basis-1/4 text-2xl leading-6 underline decoration-transparent transition hover:decoration-current"
	>
		{root ? '' : 'Leonard Lesinski'}
	</a>

	<div class="flex basis-1/2 items-center justify-center">
		<NavigationMenu.Root viewport={false}>
			<NavigationMenu.List class={[root && 'text-white']}>
				<NavItem title="Projects" {root} children={[['Coming soon™', '#']]} />
				<NavItem title="Contributions" {root} children={[['Coming soon™', '#']]} />
				<NavItem
					title="Blog"
					{root}
					children={[
						['Linux', '/posts/linux'],
						['CS101', '/posts/cs101'],
						['All posts', '/posts']
					]}
				/>
				<NavItem title="Playground" {root} children={[['Coming soon™', '#']]} />
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>

	<div class="basis-1/4"></div>
</nav>
