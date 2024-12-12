<script>
	import Button from '$c/Button.svelte';
	import Typewriter from '$c/Typewriter.svelte';
</script>

<div class="flex h-full w-full justify-center">
	<div class="flex flex-col gap-6">
		<h1 class="mt-12 text-center text-6xl font-bold"><Typewriter text="Contact" delay={0.25} /></h1>

		<div class="flex gap-2 mx-auto">
      <Button
			href="mailto:hi@archbtw.mozmail.com"
			delay={0.5}
			className="text-center w-fit"
			main
		>
			Email me!
		</Button>
    
    <Button
			href="https://instagram.com/leolesinski"
			delay={0.5}
			className="text-center w-fit"
		>
			DM me
		</Button>
    </div>
	</div>
</div>
