<script lang="ts">
	import NavItem from '$c/NavItem.svelte';
	import * as NavigationMenu from '$ui/navigation-menu';

	let { root = false } = $props();
</script>

<nav
	class={[
		'top-2 right-2 left-2 z-50 flex h-12 items-center justify-start rounded-lg px-4 backdrop-blur-md backdrop-brightness-50',
		root && 'absolute backdrop-blur-none backdrop-brightness-100',
		!root && 'fixed'
	]}
>
	<a
		href="/"
		class="basis-1/4 text-2xl underline decoration-transparent transition hover:decoration-current"
	>
		{root ? '' : 'Leonard Lesinski'}
	</a>

	<div class="flex basis-1/2 items-center justify-center">
		<NavigationMenu.Root viewport={false}>
			<NavigationMenu.List class={[root && 'text-white']}>
				<NavItem title="Projects" {root} children={[]} />
				<NavItem title="Contributions" {root} children={[]} />
				<NavItem title="Blog" {root} children={[]} />
				<NavItem title="Playground" {root} children={[]} />
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>

	<div class="basis-1/4"></div>
</nav>
