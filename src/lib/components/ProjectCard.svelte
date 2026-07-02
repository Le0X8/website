<script lang="ts">
	let { children, name, description, url, author = undefined } = $props();
</script>

<a
	class={[
		'flex',
		'flex-col',
		'border',
		'border-border',
		'p-4',
		'no-underline',
		'group',
		'hover:bg-accent',
		'transition-all',
		'duration-300',
		'ease-in-out'
	]}
	href={url}
>
	<h3 class={['font-heading', 'mt-0', 'mb-0']}>
		{#if author}
			<span class={['text-muted-foreground', 'text-base', 'font-normal']}>{author}/</span>
		{/if}
		{name}
	</h3>
	<p class={['mt-0', 'mb-4', 'font-light', 'leading-6', 'grow']}>{description}</p>
	<div
		class={[
			'flex',
			'justify-end',
			'gap-2',
			'group-hover:text-primary',
			'transition-all',
			'duration-300',
			'ease-in-out',
			'*:overflow-visible',
			'*:size-5'
		]}
	>
		{@render children()}
	</div>
</a>
