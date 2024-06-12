<script lang="ts">
	export let text: string;
  export let delay: number = 0;

	const chars = text.split('');
</script>

<span class="typewriter">
	{#each chars as char, i (char)}
		<span style="animation-delay: {delay + i * 0.1}s">{char}</span>
	{/each}
</span>
