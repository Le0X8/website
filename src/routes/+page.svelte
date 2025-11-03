<script lang="ts">
	import { Button } from '$c/ui/button';
	import * as ButtonGroup from '$ui/button-group';
	import { ArrowDown, Bike, Camera, Gamepad2, Mail, WavesLadder } from 'lucide-svelte';
	import {
		SiArchlinux,
		SiCloudflare,
		SiCplusplus,
		SiGithub,
		SiInstagram,
		SiMastodon,
		SiNginx,
		SiNodedotjs,
		SiRust,
		SiSvelte,
		SiTailwindcss,
		SiTauri,
		SiTelegram,
		SiTypescript,
		SiX
	} from '@icons-pack/svelte-simple-icons';
</script>

<svelte:head>
	<title>Leonard Lesinski</title>
</svelte:head>

<div
	class="color-white not-prose relative z-49 flex h-lvh w-full flex-col items-center justify-start bg-neutral-200 bg-[url(/background.webp)] bg-cover bg-center text-white md:justify-center dark:bg-neutral-800 dark:bg-[url(/background-dark.webp)]"
>
	<div
		class="flex w-full max-w-lvw grow flex-col items-center justify-center gap-16 overflow-hidden p-8 backdrop-blur-md backdrop-brightness-75 md:w-fit md:grow-0 md:flex-row md:rounded-2xl"
	>
		<img
			src="https://cdn.donald.org/avatars/0dd63e361d922bf946586be89c89b9d5.webp"
			alt=""
			class="h-48 rounded-full"
		/>
		<hgroup>
			<h1 class="text-5xl font-bold">Leonard Lesinski</h1>
			<p class="text-base text-white dark:text-white/50">
				he/him &bull; North Rhine-Westphalia, Germany
			</p>
			<p class="mt-2 text-xl text-white/85 dark:text-white/75">software developer</p>
			<ButtonGroup.Root class="dark mt-3">
				<Button class="text-lg" href="mailto:leo@lesinski.cc">Contact me <Mail /></Button>
				<Button class="text-lg" variant="outline" href="https://github.com/Le0X8">
					<SiGithub />
				</Button>
				<Button class="text-lg" variant="outline" href="https://instagram.com/leolesinski">
					<SiInstagram />
				</Button>
				<Button class="text-lg" variant="outline" href="https://x.com/le0_x8">
					<SiX />
				</Button>
				<Button class="text-lg" variant="outline" href="https://gruene.social/@Le0_X8">
					<SiMastodon />
				</Button>
				<Button class="text-lg" variant="outline" href="https://t.me/le0_x8">
					<SiTelegram />
				</Button>
			</ButtonGroup.Root>
		</hgroup>
	</div>

	<div class="absolute bottom-0 mb-36 hidden md:block">
		<a
			href="https://www.pexels.com/photo/green-pine-trees-covered-with-fogs-under-white-sky-during-daytime-167699/"
			class="underline dark:hidden"
		>
			Photo by Lum3en from Pexels
		</a>
		<a
			href="https://www.pexels.com/photo/canion-mountains-on-night-sky-2098428/"
			class="hidden underline dark:inline"
		>
			Photo by Eberhard Grossgasteiger from Pexels
		</a>
	</div>

	<a href="#content" class="absolute bottom-0 m-12">
		<ArrowDown class="size-12 animate-bounce" />
	</a>
</div>

<div id="content" class="absolute top-full"></div>

<div class="w-full px-4 text-lg lg:px-0">
	<h2 class="mt-4 text-center font-light uppercase">About me</h2>

	<p class="text-center text-3xl">Hi, I'm Leo 🤠</p>
	<p class="text-center">
		I'm a full-stack software developer from Germany <br />
		I study computer science at TU Dortmund University <br />
		I build fast and reliable software primarily with Rust and SvelteKit <br />
		I like clean code, strong architecture, and smart tools
	</p>

	<hr class="mb-0 border-border" />

	<h2 class="mt-4 text-center font-light uppercase">Tech stack</h2>

	<div
		class="mx-auto grid w-fit max-w-240 grid-cols-2 gap-6 gap-x-10 rounded-lg border border-border p-4 text-xl sm:grid-cols-3 md:grid-cols-4"
	>
		<span class="flex items-center gap-2"><SiRust size={20} /> Rust</span>
		<span class="flex items-center gap-2"><SiSvelte size={20} /> SvelteKit</span>
		<span class="flex items-center gap-2"><SiSvelte size={20} /> Svelte</span>
		<span class="flex items-center gap-2"><SiTypescript size={20} /> TypeScript</span>
		<span class="flex items-center gap-2"><SiTauri size={20} /> Tauri</span>
		<span class="flex items-center gap-2"><SiTailwindcss size={20} /> Tailwind CSS</span>
		<span class="flex items-center gap-2"><SiCplusplus size={20} /> C++</span>
		<span class="flex items-center gap-2"><SiCloudflare size={20} /> Cloudflare</span>
		<span class="flex items-center gap-2"><SiArchlinux size={20} /> Arch Linux</span>
		<span class="flex items-center gap-2"><SiNginx size={20} /> nginx</span>
		<span class="flex items-center gap-2"><SiNodedotjs size={20} /> Node.js</span>
		<span class="flex items-center gap-2"><SiGithub size={20} /> GitHub</span>
	</div>

	<hr class="mb-0 border-border" />

	<h2 class="mt-4 text-center font-light uppercase">Hobbies</h2>

	<div
		class="mx-auto grid max-w-240 grid-cols-2 gap-3 rounded-lg border border-border p-4 text-xl md:grid-cols-4"
	>
		<span class="flex items-center justify-center gap-2"><Bike /> Cycling</span>
		<span class="flex items-center justify-center gap-2"><WavesLadder /> Swimming</span>
		<span class="flex items-center justify-center gap-2"><Camera /> Photography</span>
		<span class="flex items-center justify-center gap-2"><Gamepad2 /> Gaming</span>
	</div>

	<hr class="mb-0 border-border" />

	<h2 class="mt-4 text-center font-light uppercase">Some stats</h2>

	<div
		class="mx-auto grid max-w-240 grid-cols-1 gap-3 rounded-lg border border-border p-4 text-xl sm:grid-cols-2 md:grid-cols-3"
	>
		<div>
			<h3 class="mt-0 mb-0 text-center">{new Date().getFullYear() - 2020} years</h3>
			<p class="mt-0 mb-0 text-center">of programming experience</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0 text-center">{new Date().getFullYear() - 2023} years</h3>
			<p class="mt-0 mb-0 text-center">of daily-driving Linux</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0 text-center">1000+ hrs</h3>
			<p class="mt-0 mb-0 text-center">
				<a href="https://wakatime.com/@Le0_X8">coding time since Oct 2023</a>
			</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0 text-center">2500+</h3>
			<p class="mt-0 mb-0 text-center">GitHub commits</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0 text-center">100+</h3>
			<p class="mt-0 mb-0 text-center">repositories on GitHub</p>
		</div>

		<div class="flex items-center justify-center">
			more on my&nbsp;<a href="https://github.com/Le0X8">GitHub</a>!
		</div>
	</div>
</div>
