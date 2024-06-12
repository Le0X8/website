<script lang="ts">
	import Typewriter from '$c/Typewriter.svelte';
	import Button from '$c/Button.svelte';
	import ProfilePic from '$c/ProfilePic.svelte';
</script>

<div class="flex h-full w-full items-center justify-center">
	<div class="flex gap-16 size-fit">
		<ProfilePic className="size-64" />
    
		<div class="flex flex-col">
			<h1 class="main"><Typewriter text="Hello!" delay={0.5} /></h1>

			<div class="flex items-center justify-center gap-2 text-2xl">
				<Button href="/about" main delay={1.5}>About me</Button>
				<Button href="/projects" delay={2}>My projects</Button>
			</div>
		</div>
	</div>
</div>
