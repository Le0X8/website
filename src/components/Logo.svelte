<script lang="ts">
	import * as icons from 'simple-icons';

	export let name: keyof typeof icons;
	export let className: string = '';
	export let style: string = '';

	const icon = icons[name] as { svg: string };
</script>

{@html icon.svg.replace(/<svg/, `<svg class="${className}" style="${style}"`)}
