<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { ChevronLeft } from '@lucide/svelte';
	import * as Card from '$ui/card';
</script>

<svelte:head>
	<title>Error {page.status} | Leonard Lesinski</title>
</svelte:head>

<div class={['flex', 'justify-center', 'items-center', 'w-full', 'h-[calc(100vh-4rem)]']}>
	<Card.Root class={['min-w-96', 'text-center']}>
		<Card.Header>
			<Card.Title class={['text-3xl', 'font-sans']}>Error</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class={['text-9xl', 'font-heading', 'leading-20']}>{page.status}</p>
			<p
				class={['text-4xl', 'font-mono', 'border-t', 'pt-4', 'mt-8', 'border-border', 'lowercase']}
			>
				{page.error?.message}
			</p>
		</Card.Content>
		<Card.Footer>
			<a
				href={resolve('/')}
				class={[
					'underline',
					'decoration-transparent',
					'hover:decoration-inherit',
					'flex',
					'items-center',
					'justify-center',
					'gap-1',
					'size-full'
				]}
			>
				<ChevronLeft class={['size-4']} /> Go back home
			</a>
		</Card.Footer>
	</Card.Root>
</div>
