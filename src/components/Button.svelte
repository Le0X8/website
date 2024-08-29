<script lang="ts">
	export let href: string;
	export let main: boolean = false;
	export let delay: number = 0;
	export let className: string = '';
</script>

<a
	class="mx-1 rounded-lg border border-white p-2 py-1 {main
		? 'bg-white font-bold text-teal-950'
		: 'bg-transparent'} {delay > 0 ? 'fade-in' : ''} {className}"
	{href}
	style="animation-delay: {delay}s"><slot /></a
>
