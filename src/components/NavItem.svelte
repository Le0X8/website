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
			root && [
				'bg-black/25 dark:bg-transparent',
				'data-[state=open]:bg-black/50 dark:data-[state=open]:bg-white/10',
				'data-[state=open]:focus:bg-black/50 dark:data-[state=open]:focus:bg-white/10',
				'data-[state=open]:hover:bg-black/50 dark:data-[state=open]:hover:bg-white/10',
				'hover:bg-black/50 dark:hover:bg-white/10',
				'focus:bg-black/50 dark:focus:bg-white/10'
			],
			!root && [
				'bg-transparent',
				'data-[state=open]:bg-white/10',
				'data-[state=open]:focus:bg-white/10',
				'data-[state=open]:hover:bg-white/10',
				'hover:bg-white/10',
				'focus:bg-white/10'
			],

			'hover:text-white',
			'focus:text-white',
			'data-[state=open]:text-white',
			'data-[state=open]:focus:text-white',
			'data-[state=open]:hover:text-white',
			'text-lg'
		]}
	>
		{title}
	</NavigationMenu.Trigger>
	<NavigationMenu.Content
		class={[
			'group-data-[viewport=false]/navigation-menu:bg-black/50 dark:group-data-[viewport=false]/navigation-menu:bg-white/10',
			'group-data-[viewport=false]/navigation-menu:border-0',
			!root && 'translate-y-1'
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
