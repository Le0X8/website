<script lang="ts">
	import { Button } from '$c/ui/button';
	import * as ButtonGroup from '$ui/button-group';
	import { ArrowDown, Mail } from 'lucide-svelte';
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

<div
	class="color-white not-prose dark relative z-49 flex h-lvh w-full flex-col items-center justify-center bg-blue-700 bg-[url(/background.webp)] bg-cover bg-center text-white"
>
	<div
		class="flex items-center justify-center gap-16 rounded-2xl p-8 backdrop-blur-md backdrop-brightness-50"
	>
		<img
			src="https://cdn.donald.org/avatars/0dd63e361d922bf946586be89c89b9d5.webp"
			alt=""
			class="h-48 rounded-full"
		/>
		<hgroup>
			<h1 class="text-5xl font-bold">Leonard Lesinski</h1>
			<p class="text-xl text-white/75">full stack software developer</p>
			<ButtonGroup.Root class="mt-8">
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

	<div class="absolute bottom-0 mb-36">
		<a
			href="https://www.pexels.com/photo/low-angle-view-of-office-building-against-clear-sky-258160/"
			class="underline">Photo by Pixabay from Pexels</a
		>
	</div>

	<a href="#content" class="absolute bottom-0 m-12">
		<ArrowDown class="size-12 animate-bounce" />
	</a>
</div>

<div id="content" class="absolute top-full"></div>

<div class="text-lg">
	<h2 class="mt-4 text-center font-light uppercase">About me</h2>

	<p class="text-center text-3xl">Hi, I'm Leo 🤠</p>
	<p class="text-center">
		I'm a full-stack software developer from Germany <br />
		I study computer science at TU Dortmund University <br />
		I build fast and reliable software primarily with Rust and SvelteKit <br />
		I like clean code, strong architecture, and smart tools
	</p>

	<hr class="mb-0" />

	<h2 class="mt-4 text-center font-light uppercase">Tech stack</h2>

	<div class="mx-auto grid max-w-240 grid-cols-4 gap-3 rounded-lg border border-border p-4 text-xl">
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

	<hr class="mb-0" />

	<h2 class="mt-4 text-center font-light uppercase">Some stats</h2>

	<div class="mx-auto grid max-w-240 grid-cols-3 gap-3 rounded-lg border border-border p-4 text-xl">
		<div>
			<h3 class="mt-0 mb-0">{new Date().getFullYear() - 2020} years</h3>
			<p class="mt-0 mb-0">of programming experience</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0">{new Date().getFullYear() - 2023} years</h3>
			<p class="mt-0 mb-0">of daily-driving Linux</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0">1000+ hrs</h3>
			<p class="mt-0 mb-0"><a href="https://wakatime.com/@Le0_X8">coding time since Oct 2023</a></p>
		</div>

		<div>
			<h3 class="mt-0 mb-0">2500+</h3>
			<p class="mt-0 mb-0">GitHub commits</p>
		</div>

		<div>
			<h3 class="mt-0 mb-0">100+</h3>
			<p class="mt-0 mb-0">repositories on GitHub</p>
		</div>

		<div class="flex items-center">
			more on my&nbsp;<a href="https://github.com/Le0X8">GitHub</a>!
		</div>
	</div>
</div>
