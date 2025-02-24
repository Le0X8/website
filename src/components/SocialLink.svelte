<script lang="ts">
  export let logo: any;
  export let name: string;
	export let url: string;
</script>

<li>
	<a
		class="flex w-fit items-center gap-3 text-zinc-500 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-white"
		href={url}
		target="_blank"
		rel="noopener noreferrer"
	>
    <svelte:component this={logo}></svelte:component>
		<span class="hidden md:inline">{name}</span>
	</a>
</li>
