<script lang="ts">
	import Button from '$c/Button.svelte';
	import SocialLink from '$c/SocialLink.svelte';
	import TechCard from '$c/TechCard.svelte';
	import TechCardGrid from '$c/TechCardGrid.svelte';
	import {
		SiGithub,
		SiInstagram,
		SiX,
		SiMastodon,
		SiReddit,
		SiTelegram,
		SiSvelte,
		SiRust,
		SiTypescript,
		SiJavascript,
		SiPhp,
		SiPython,
		SiCloudflare,
		SiNginx,
		SiApache,
		SiNodedotjs,
		SiTauri,
		SiFirefox,
		SiArchlinux,
		SiDebian,
		SiUbuntu,
		SiRaspberrypi,
		SiAndroid,
		SiVscodium,
		SiGit,
		SiSass,
		SiCss,
		SiHtml5,
		SiEslint,
		SiPrettier,
		SiTailwindcss
	} from '@icons-pack/svelte-simple-icons';
	import { Coffee, Grid2X2, MapPin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Leonard Lesinski</title>
</svelte:head>

<div
	class="flex h-full flex-col items-start gap-6 md:flex-row md:gap-0 lg:justify-center lg:gap-24 print:flex-col"
>
	<div
		class="flex w-full scale-none flex-col items-center text-xl md:w-fit md:-translate-y-[5rem] md:scale-75 md:items-start lg:translate-none lg:scale-none print:hidden"
	>
		<img
			src="https://cdn.donald.org/avatars/e70d85cb94ff55dd5500134068b28079.webp"
			alt="this is me"
			class="w-42 rounded-full md:w-74 print:h-74"
		/>

		<ul class="mt-24 mb-8 flex gap-4 md:mt-12 md:flex-col">
			<SocialLink logo={SiGithub} name="@Le0X8" url="https://github.com/Le0X8" />
			<SocialLink logo={SiInstagram} name="@leolesinski" url="https://instagram.com/leolesinski" />
			<SocialLink
				logo={SiMastodon}
				name="@Le0_X8@gruene.social"
				url="https://gruene.social/@Le0_X8"
			/>
			<SocialLink logo={SiX} name="@le0_x8" url="https://x.com/le0_x8" />
			<SocialLink logo={SiReddit} name="u/Le0_X8" url="https://reddit.com/u/Le0_X8" />
			<hr class="hidden border-zinc-500 md:block dark:border-zinc-700" />
			<SocialLink logo={SiTelegram} name="@le0_x8" url="https://t.me/le0_x8" />
		</ul>

		<div class="flex w-full justify-center">
			<Button href="mailto:leo@lesinski.cc">Contact me</Button>
		</div>
	</div>
	<div
		class="prose dark:prose-invert prose-zinc flex w-full max-w-256 grow flex-col text-center text-2xl md:w-fit md:text-left"
	>
		<h1 class="mb-0 text-4xl md:text-5xl">Leonard Lesinski</h1>
		<p class="mt-4 mb-0 text-zinc-600 dark:text-zinc-400">Full Stack Developer</p>
		<p
			class="mt-4 flex items-center justify-center gap-1 text-lg text-zinc-600 md:justify-start dark:text-zinc-400"
		>
			<MapPin class="h-5" /> North Rhine-Westphalia, Germany
		</p>

		<h3 class="mt-60 mb-1 md:mt-2">Hi, I&CloseCurlyQuote;m Leo! :)</h3>

		<p class="mt-0 mb-0 px-3 text-justify text-lg hyphens-auto md:px-0">
			I build fast, reliable web apps from frontend to backend &ndash; and I&CloseCurlyQuote;m not
			afraid to go low-level when needed. Whether you're looking for a fullstack developer or
			someone to dig into technical depths, I&CloseCurlyQuote;m here to help.
		</p>

		<a class="mt-8 mb-0 text-3xl font-bold no-underline" href="#technologies-and-skills">
			Technologies & Skills
		</a>
		<div id="technologies-and-skills">
			<TechCardGrid title="Frameworks">
				<TechCard
					logo={SiSvelte}
					name="SvelteKit"
					description="My go-to for fullstack web apps. I've built dynamic forums, member portals, and APIs with it."
					since={2024}
					url="https://svelte.dev/docs/kit/introduction"
					projects={[
						{
							name: 'D.O.N.A.L.D. website',
							url: 'https://donald.org'
						},
						{
							name: 'Abi 2025 website',
							url: 'https://abi25.party'
						},
						{
							name: 'this website',
							url: '/'
						}
					]}
				/>
				<TechCard
					logo={SiSvelte}
					name="Svelte"
					description="I love Svelte’s reactivity model – great for building responsive, fast UIs without boilerplate."
					since={2024}
					url="https://svelte.dev/"
				/>
				<TechCard
					logo={SiTauri}
					name="Tauri"
					description="Used it for building native-feeling desktop apps with a web UI and a Rust backend."
					since={2025}
					url="https://tauri.app/"
					projects={[
						{
							name: 'Acridotheres (Desktop GUI)',
							url: 'https://acridotheres.com'
						}
					]}
				/>
			</TechCardGrid>

			<TechCardGrid title="Programming Languages">
				<TechCard
					logo={SiRust}
					name="Rust"
					description="I use Rust to build fast and safe applications – from command-line tools to backend APIs. It's great for projects where reliability and performance matter."
					since={2024}
					url="https://www.rust-lang.org/"
					projects={[
						{
							name: 'Acridotheres Core',
							url: 'https://github.com/acridotheres/core'
						},
						{
							name: 'dh (I/O reading & writing library)',
							url: 'https://crates.io/crates/dh'
						},
						{
							name: 'vli (Variable Length Integer library)',
							url: 'https://crates.io/crates/vli'
						}
					]}
				/>
				<TechCard
					logo={SiTypescript}
					name="TypeScript"
					description="I use TypeScript across all frontend projects for better DX, safety, and scalability."
					since={2022}
					url="https://typescriptlang.org/"
					projects={[
						{
							name: 'Additional README Stats',
							url: 'https://github.com/Le0X8/additional-readme-stats'
						},
						{
							name: 'Burrows-Wheeler Transform',
							url: 'https://github.com/Le0X8/bwtjs'
						},
						{
							name: 'NeoKit',
							url: 'https://neokit.dev'
						}
					]}
				/>
				<TechCard
					logo={Coffee}
					name="Java"
					description="Learned Java during my early CS studies – mostly used it for OOP-heavy school projects."
					since={2022}
					url="https://www.java.com/en/"
				/>
				<TechCard
					logo={SiJavascript}
					name="JavaScript"
					description="The base of my web dev journey – still useful for quick scripting and browser APIs."
					since={2021}
					url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
					projects={[
						{
							name: 'HSSP.js',
							url: 'https://github.com/acridotheres/hssp-js'
						},
						{
							name: 'spotifydb (Spotify scraper)',
							url: 'https://github.com/Le0X8/spotifydb'
						},
						{
							name: 'ChatXtract (WhatsApp scraper)',
							url: 'https://github.com/Le0X8/ChatXtract'
						}
					]}
				/>
				<TechCard
					logo={SiPhp}
					name="PHP"
					description="Maintained and modernized legacy PHP projects. Also used it for simple backend scripts."
					since={2021}
					url="https://www.php.net/"
					projects={[
						{
							name: 'old D.O.N.A.L.D. website',
							url: 'https://web.archive.org/web/20220216094842/http://www.donald.org/'
						},
						{
							name: 'my old old website (broken CSS)',
							url: 'https://web.archive.org/web/20240522045728/https://leox.dev/'
						}
					]}
				/>
				<TechCard
					logo={SiPython}
					name="Python"
					description="My go-to for quick prototypes, small scripts and automation tasks. Also used in early projects."
					since={2020}
					url="https://www.python.org/"
				/>
			</TechCardGrid>

			<TechCardGrid title="Servers, Cloud & Hosting">
				<TechCard
					logo={SiCloudflare}
					name="Cloudflare Pages"
					description="I use it to deploy apps, serve content at the edge, and integrate services like Turnstile or D1."
					since={2024}
					url="https://www.cloudflare.com/developer-platform/products/pages/"
				/>
				<TechCard
					logo={SiNginx}
					name="NGINX"
					description="Configured NGINX as a reverse proxy and static asset server in several self-hosted setups."
					since={2022}
					url="https://nginx.org/"
				/>
				<TechCard
					logo={SiApache}
					name="Apache HTTP"
					description="Used it for years on shared hosting and configured `.htaccess`, virtual hosts, and mod_php."
					since={2021}
					url="https://httpd.apache.org/"
				/>
			</TechCardGrid>

			<TechCardGrid title="Platforms">
				<TechCard
					logo={SiNodedotjs}
					name="Node.js"
					description="Runs most of my frontend tooling and fullstack apps. Used with SvelteKit and various CLIs."
					since={2021}
					url="https://nodejs.org/"
				/>
			</TechCardGrid>

			<TechCardGrid title="Operating Systems">
				<TechCard
					logo={SiArchlinux}
					name="Arch Linux"
					description="My daily OS. I value its flexibility, rolling release model, and excellent community documentation."
					since={2024}
					url="https://archlinux.org/"
				/>
				<TechCard
					logo={SiDebian}
					name="Debian"
					description="Ran Debian on servers and headless systems. Rock-solid and minimal, ideal for production."
					since={2023}
					url="https://www.debian.org/"
				/>
				<TechCard
					logo={SiUbuntu}
					name="Ubuntu Desktop"
					description="Used it as a beginner-friendly Linux distro before switching to Debian. Great for quick setups."
					since={2023}
					url="https://ubuntu.com/desktop"
				/>
				<TechCard
					logo={SiRaspberrypi}
					name="Raspberry Pi OS"
					description="Used for personal IoT and home server projects on various Pi models."
					since={2021}
					url="https://www.raspberrypi.org/software/"
				/>
				<TechCard
					logo={Grid2X2}
					name="Windows"
					description="Still boot into Windows occasionally for games or testing – not part of my dev setup ;)"
					since={2016}
					url="https://www.microsoft.com/en-us/windows"
				/>
				<TechCard
					logo={SiAndroid}
					name="Android"
					description="Developed web apps with mobile-first in mind and debugged via Android devices regularly."
					since={2014}
					url="https://www.android.com/"
				/>
			</TechCardGrid>

			<TechCardGrid title="Styling & Design">
				<TechCard
					logo={SiSass}
					name="SCSS"
					description="Used in early projects before switching to utility-first CSS. Still helpful for custom themes."
					since={2022}
					url="https://sass-lang.com/"
				/>
				<TechCard
					logo={SiTailwindcss}
					name="Tailwind CSS"
					description="My preferred styling approach for web apps. It’s fast, flexible, and scales well in teams."
					since={2024}
					url="https://tailwindcss.com"
				/>
				<TechCard
					logo={SiCss}
					name="CSS"
					description="Styled every project manually before moving to SCSS/Tailwind. Still use vanilla CSS for edge cases."
					since={2021}
					url="https://developer.mozilla.org/en-US/docs/Web/CSS"
				/>
			</TechCardGrid>

			<TechCardGrid title="Tools">
				<TechCard
					logo={SiVscodium}
					name="VSCodium"
					description="My daily code editor – configured with Rust, TS, and Svelte extensions."
					since={2021}
					url="https://vscodium.com/"
				/>
				<TechCard
					logo={SiGit}
					name="Git"
					description="Use Git for everything – solo projects, team work, open source."
					since={2021}
					url="https://git-scm.com/"
				/>
				<TechCard
					logo={SiGithub}
					name="GitHub"
					description="I host most of my open source and personal code here – including this website."
					since={2021}
					url="https://github.com/"
				/>
				<TechCard
					logo={SiEslint}
					name="ESLint"
					description="Configured for all my TypeScript projects. Helps keep code consistent and error-free."
					since={2023}
					url="https://eslint.org/"
				/>
				<TechCard
					logo={SiPrettier}
					name="Prettier"
					description="I use it in combination with ESLint to enforce code style in every project for very clean code."
					since={2023}
					url="https://prettier.io/"
				/>
			</TechCardGrid>

			<TechCardGrid title="Other">
				<TechCard
					logo={SiHtml5}
					name="HTML"
					description="The very beginning of my web journey – still essential for clean and accessible markup."
					since={2021}
					url="https://developer.mozilla.org/en-US/docs/Web/HTML"
				/>
			</TechCardGrid>
		</div>
	</div>
</div>
