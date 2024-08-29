<script lang="ts">
	import Typewriter from '$c/Typewriter.svelte';
	import Button from '$c/Button.svelte';
	import ProfilePic from '$c/ProfilePic.svelte';
	import Logo from '$c/Logo.svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-12">
	<div class="flex size-fit gap-16">
		<ProfilePic className="size-64" />

		<div class="flex translate-y-8 flex-col">
			<h1 class="main"><Typewriter text="Hello!" delay={0.5} /></h1>

			<p class="my-6 text-center text-2xl">
				<Typewriter text="I'm Leo, a Full-Stack developer." delay={1.5} />
			</p>
			<div class="flex items-center justify-center gap-2 text-2xl">
				<Button href="/about" main delay={5}>About me</Button>
				<Button href="/projects" delay={5.5}>My projects</Button>
			</div>
		</div>
	</div>
	<div class="flex gap-6 fill-white">
		<a
			href="https://rust-lang.org"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siRust" className="size-8 fade-in opacity-0" style="animation-delay: 6s;" />
		</a>

		<a
			href="https://svelte.dev"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siSvelte" className="size-8 fade-in opacity-0" style="animation-delay: 6.2s;" />
		</a>

		<a
			href="https://sass-lang.com"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siSass" className="size-8 fade-in opacity-0" style="animation-delay: 6.4s;" />
		</a>

		<a
			href="https://tailwindcss.com"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siTailwindcss" className="size-8 fade-in opacity-0" style="animation-delay: 6.6s;" />
		</a>

		<a
			href="https://typescriptlang.org"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siTypescript" className="size-8 fade-in opacity-0" style="animation-delay: 6.8s;" />
		</a>

		<a
			href="https://nodejs.org"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siNodedotjs" className="size-8 fade-in opacity-0" style="animation-delay: 7s;" />
		</a>

		<a
			href="https://sqlite.org"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siSqlite" className="size-8 fade-in opacity-0" style="animation-delay: 7.2s;" />
		</a>

		<a
			href="https://git-scm.com"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siGit" className="size-8 fade-in opacity-0" style="animation-delay: 7.4s" />
		</a>

		<a
			href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siJavascript" className="size-8 fade-in opacity-0" style="animation-delay: 7.6s;" />
		</a>

		<a
			href="https://php.net"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siPhp" className="size-8 fade-in opacity-0" style="animation-delay: 7.8s;" />
		</a>

		<a
			href="https://cloudflare.com/developer-platform"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siCloudflare" className="size-8 fade-in opacity-0" style="animation-delay: 8s;" />
		</a>

		<a
			href="https://archlinux.org"
			target="_blank"
			rel="noopener"
			class="opacity-85 transition hover:opacity-100"
		>
			<Logo name="siArchlinux" className="size-8 fade-in opacity-0" style="animation-delay: 8.2s;" />
		</a>
	</div>
</div>
