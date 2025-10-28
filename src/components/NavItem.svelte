<script lang="ts">
	import * as NavigationMenu from '$ui/navigation-menu';

	let {
		children = [],
		title,
		root = false
	}: { children: [string, string][]; title: string; root: boolean } = $props();
</script>

<NavigationMenu.Item>
	<NavigationMenu.Trigger
		class={[
			root && 'bg-black/25',
			'data-[state=open]:bg-black/50',
			'data-[state=open]:focus:bg-black/50',
			'data-[state=open]:hover:bg-black/50',
			'hover:bg-black/50',
			'focus:bg-black/50',

			'text-lg'
		]}>{title}</NavigationMenu.Trigger
	>
	<NavigationMenu.Content
		class={[
			'group-data-[viewport=false]/navigation-menu:bg-black/50',
			'group-data-[viewport=false]/navigation-menu:border-0'
		]}
	>
		<ul class="grid w-42 gap-4 p-2">
			<li>
				{#each children as [childTitle, childHref]}
					<NavigationMenu.Link href={childHref}>{childTitle}</NavigationMenu.Link>
				{/each}
			</li>
		</ul>
	</NavigationMenu.Content>
</NavigationMenu.Item>
