<script lang="ts">
	import SocialLink from '$c/SocialLink.svelte';
	import TechCard from '$c/TechCard.svelte';
	import TechCardGrid from '$c/TechCardGrid.svelte';
	import {
		SiGithub,
		SiInstagram,
		SiX,
		SiProtonmail,
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

		<ul class="mt-24 flex gap-4 md:mt-12 md:flex-col">
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
			<SocialLink logo={SiProtonmail} name="leo@lesinski.cc" url="mailto:leo@lesinski.cc" />
			<SocialLink logo={SiTelegram} name="@le0_x8" url="https://t.me/le0_x8" />
		</ul>
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

		<a
			class="mt-62 mb-0 text-3xl font-bold no-underline md:mt-6"
			href="#technologies-and-skills"
			id="technologies-and-skills"
		>
			Technologies & Skills
		</a>

		<TechCardGrid title="Frameworks">
			<TechCard
				logo={SiSvelte}
				name="SvelteKit"
				description="Full stack application framework built on top of Svelte"
				since={2024}
				url="https://svelte.dev/docs/kit/introduction"
			/>
			<TechCard
				logo={SiSvelte}
				name="Svelte"
				description="JavaScript framework for building web user interfaces"
				since={2024}
				url="https://svelte.dev/"
			/>
			<TechCard
				logo={SiTauri}
				name="Tauri"
				description="Rust framework for building desktop applications"
				since={2025}
				url="https://tauri.app/"
			/>
		</TechCardGrid>

		<TechCardGrid title="Programming Languages">
			<TechCard
				logo={SiRust}
				name="Rust"
				description="Low-level programming language that runs fast and is memory safe"
				since={2024}
				url="https://www.rust-lang.org/"
			/>
			<TechCard
				logo={SiTypescript}
				name="TypeScript"
				description="Typed superset of JavaScript that compiles to plain JavaScript"
				since={2022}
				url="https://typescriptlang.org/"
			/>
			<TechCard
				logo={Coffee}
				name="Java"
				description="High-level, object-oriented programming language"
				since={2022}
				url="https://www.java.com/en/"
			/>
			<TechCard
				logo={SiJavascript}
				name="JavaScript"
				description="The programming language of the web that runs in the browser"
				since={2021}
				url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
			/>
			<TechCard
				logo={SiPhp}
				name="PHP"
				description="Server-side scripting language for web development"
				since={2021}
				url="https://www.php.net/"
			/>
			<TechCard
				logo={SiPython}
				name="Python"
				description="High-level programming language for general-purpose programming"
				since={2020}
				url="https://www.python.org/"
			/>
		</TechCardGrid>

		<TechCardGrid title="Servers, Cloud & Hosting">
			<TechCard
				logo={SiCloudflare}
				name="Cloudflare Pages"
				description="Edge computing platform for deploying and hosting websites"
				since={2024}
				url="https://www.cloudflare.com/developer-platform/products/pages/"
			/>
			<TechCard
				logo={SiNginx}
				name="NGINX"
				description="Web server that can also be used as a reverse proxy, load balancer etc."
				since={2022}
				url="https://nginx.org/"
			/>
			<TechCard
				logo={SiApache}
				name="Apache HTTP"
				description="FOSS web server software with support for programming languages like PHP"
				since={2021}
				url="https://httpd.apache.org/"
			/>
		</TechCardGrid>

		<TechCardGrid title="Platforms">
			<TechCard
				logo={SiNodedotjs}
				name="Node.js"
				description="JavaScript runtime built on Chrome's V8 JavaScript engine"
				since={2021}
				url="https://nodejs.org/"
			/>
			<TechCard
				logo={SiFirefox}
				name="Firefox"
				description="Web browser developed by Mozilla"
				since={2020}
				url="https://www.mozilla.org/en-US/firefox/new/"
			/>
		</TechCardGrid>

		<TechCardGrid title="Operating Systems">
			<TechCard
				logo={SiArchlinux}
				name="Arch Linux"
				description="Lightweight and flexible Linux distribution that tries to keep it simple"
				since={2024}
				url="https://archlinux.org/"
			/>
			<TechCard
				logo={SiDebian}
				name="Debian"
				description="Stable and secure Linux distribution that comes with a lot of packages"
				since={2023}
				url="https://www.debian.org/"
			/>
			<TechCard
				logo={SiUbuntu}
				name="Ubuntu Desktop"
				description="Popular Linux distribution that is easy to use"
				since={2023}
				url="https://ubuntu.com/desktop"
			/>
			<TechCard
				logo={SiRaspberrypi}
				name="Raspberry Pi OS"
				description="Operating system for the Raspberry Pi single-board computer"
				since={2021}
				url="https://www.raspberrypi.org/software/"
			/>
			<TechCard
				logo={Grid2X2}
				name="Windows"
				description="Operating system developed by Microsoft"
				since={2016}
				url="https://www.microsoft.com/en-us/windows"
			/>
			<TechCard
				logo={SiAndroid}
				name="Android"
				description="Mobile operating system developed by Google"
				since={2014}
				url="https://www.android.com/"
			/>
		</TechCardGrid>

		<TechCardGrid title="Styling & Design">
			<TechCard
				logo={SiSass}
				name="SCSS"
				description="CSS preprocessor that adds power and elegance to the basic language"
				since={2022}
				url="https://sass-lang.com/"
			/>
			<TechCard
				logo={SiTailwindcss}
				name="Tailwind CSS"
				description="Utility-first CSS framework for quickly building custom designs"
				since={2024}
				url="https://tailwindcss.com"
			/>
			<TechCard
				logo={SiCss}
				name="CSS"
				description="Cascading Style Sheets that are used to style web pages"
				since={2021}
				url="https://developer.mozilla.org/en-US/docs/Web/CSS"
			/>
		</TechCardGrid>

		<TechCardGrid title="Tools">
			<TechCard
				logo={SiVscodium}
				name="VSCodium"
				description="Free and open-source code editor that is a binary distribution of VSCode"
				since={2021}
				url="https://vscodium.com/"
			/>
			<TechCard
				logo={SiGit}
				name="Git"
				description="Distributed version control system for tracking changes in source code"
				since={2021}
				url="https://git-scm.com/"
			/>
			<TechCard
				logo={SiGithub}
				name="GitHub"
				description="Web-based Git repository hosting service"
				since={2021}
				url="https://github.com/"
			/>
			<TechCard
				logo={SiEslint}
				name="ESLint"
				description="Pluggable linting utility for JavaScript & TypeScript"
				since={2023}
				url="https://eslint.org/"
			/>
			<TechCard
				logo={SiPrettier}
				name="Prettier"
				description="Opinionated code formatter that enforces a consistent code style"
				since={2023}
				url="https://prettier.io/"
			/>
		</TechCardGrid>

		<TechCardGrid title="Other">
			<TechCard
				logo={SiHtml5}
				name="HTML"
				description="Markup language for structuring and presenting content on the web"
				since={2021}
				url="https://developer.mozilla.org/en-US/docs/Web/HTML"
			/>
		</TechCardGrid>
	</div>
</div>
