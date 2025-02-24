<script lang="ts">
	export let text: string;
	export let delay: number = 0;
	export let speed: number = 0.025;

	const chars = text.split('');
</script>

<span class="typewriter">
	{#each chars as char, i (char)}
		<span style="animation-delay: {delay + i * speed}s">{char}</span>
	{/each}
</span>
