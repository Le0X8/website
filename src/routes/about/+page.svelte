<script>
	import Typewriter from '$c/Typewriter.svelte';
</script>

<div class="flex h-full w-full justify-center">
	<div class="flex flex-col gap-6">
		<h1 class="mt-12 text-6xl font-bold text-center"><Typewriter text="About me" delay={0.5} /></h1>

		<p class="text-lg">
			<Typewriter
				text="I'm Leo, a Full-Stack developer from North Rhine-Westphalia (Germany)."
				delay={1.5}
				speed={0.05}
			/>
		</p>
		<p class="text-lg">
			<Typewriter
				text="I do this since 2020 (I was 11 back then). I started my programming journey by writing simple batch scripts for the Windows command prompt."
				delay={7.5}
        speed={0.05}
			/>
		</p>
    <p class="text-lg">
			<Typewriter
				text="After some time, I discovered the world of web development and started learning HTML, CSS, and JavaScript. I also learned how to use Node.js later on and it's still my favourite JavaScript platform today."
				delay={15}
        speed={0.05}
			/>
		</p>
    <p class="text-lg">
			<Typewriter
				text="In 2023, I started learning Svelte and TypeScript, which I use for most of my projects these days."
				delay={25}
        speed={0.05}
			/>
		</p>
    <p class="text-lg">
			<Typewriter
				text="This year, I started learning Rust and I already adopted it for my biggest project: Acridotheres."
				delay={30}
        speed={0.05}
			/>
		</p>
	</div>
</div>
