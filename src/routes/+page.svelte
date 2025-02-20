<script lang="ts">
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

		SiPrettier














	} from '@icons-pack/svelte-simple-icons';
	import { Coffee, Grid2X2, MapPin } from 'lucide-svelte';
</script>

<div class="flex h-full justify-center gap-24">
	<div class="flex flex-col text-xl">
		<img
			src="https://cdn.donald.org/avatars/CcQEMxiSamRwH6eIdFi5cA.webp"
			alt="this is me"
			class="w-74 rounded-full"
		/>

		<ul class="mt-12 flex flex-col gap-4">
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="https://github.com/Le0X8"
				>
					<SiGithub />
					@Le0X8
				</a>
			</li>
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="https://instagram.com/leolesinski"
				>
					<SiInstagram />
					@leolesinski
				</a>
			</li>
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="https://gruene.social/@Le0_X8"
				>
					<SiMastodon />
					@Le0_X8@gruene.social
				</a>
			</li>
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="https://x.com/le0_x8"
				>
					<SiX />
					@le0_x8
				</a>
			</li>
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="https://reddit.com/u/Le0_X8"
				>
					<SiReddit />
					u/Le0_X8
				</a>
			</li>
			<hr class="border-zinc-700" />
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="mailto:leo@lesinski.cc"
				>
					<SiProtonmail />
					leo@lesinski.cc
				</a>
			</li>
			<li>
				<a
					class="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-white"
					href="https://t.me/le0_x8"
				>
					<SiTelegram />
					@le0_x8
				</a>
			</li>
		</ul>
	</div>
	<div class="prose prose-invert flex max-w-256 grow flex-col text-2xl">
		<h1 class="mb-0">Leonard Lesinski</h1>
		<p class="mt-4 mb-0 text-zinc-400">Full Stack Developer</p>
		<p class="mt-4 flex items-center gap-1 text-lg text-zinc-400">
			<MapPin class="h-5" /> North Rhine-Westphalia, Germany
		</p>

		<h2 class="mt-6 mb-0">Technologies & Skills</h2>

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
