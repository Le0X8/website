<script lang="ts">
	import ProjectCard from '$c/ProjectCard.svelte';
	import ButtonGroup from '$c/ui/button-group/button-group.svelte';
	import { Button } from '$ui/button';
	import {
		SiCloudflarepages,
		SiDiscorddotjs,
		SiGithub,
		SiHtml5,
		SiInstagram,
		SiJavascript,
		SiMarkdown,
		SiMastodon,
		SiNodedotjs,
		SiRust,
		SiSqlite,
		SiStripe,
		SiSvelte,
		SiTailwindcss,
		SiTelegram,
		SiTypescript,
		SiVite,
		SiX
	} from '@icons-pack/svelte-simple-icons';
	import { BookMarked, ChevronRight, Clock, Mail, MapPin } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	let time = $state(new Date());

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	function isDst(date: Date): boolean {
		const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
		const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
		const standardOffset = Math.max(jan, jul);
		return date.getTimezoneOffset() < standardOffset;
	}

	let timezone = $derived(isDst(time) ? 'CEST' : 'CET');

	let mail = $state('');

	$effect(() => {
		// btoa(btoa(btoa('<EMAIL>'))).split('').map((chr, i) => i.toString(36)+chr).sort((a, b) => Math.random() - 0.5).join('+');
		const email =
			'1W+3k+4V+0W+52+7t+6R+2t+dm+fh+cb+ex+aR+9n+8S+bS+q9+gU+iV+hl+t0+rj+jK+ll+oa+ke+pE+sR+md+ns+up+v1+1eE+wV+y5+xG+zK+1dF+1cU+1f9+12V+1j=+10a+11F+1gP+136+16F+1hQ+1i=+15n+14V+17X+19G+1aM+1b5+18W';
		mail = atob(
			atob(
				atob(
					email
						.split('+')
						.sort((a, b) => parseInt(a.slice(0, -1), 36) - parseInt(b.slice(0, -1), 36))
						.map((e) => e.slice(-1))
						.join('')
				)
			)
		);
	});
</script>

<div
	class={[
		`bg-[url(/background-dark.webp)]`,
		'w-full',
		'h-screen',
		'bg-center',
		'bg-cover',
		'flex',
		'justify-center',
		'p-4',
		'md:p-8'
	]}
>
	<div
		class={[
			'flex',
			'items-start',
			'justify-center',
			'flex-col',
			'md:flex-row',
			'bg-card',
			'text-card-foreground',
			'border-border',
			'border',
			'p-8',
			'gap-8',
			'h-fit',
			'max-w-full'
		]}
	>
		<div>
			<img
				src="https://cdn.donald.org/avatars/5ed4b562f1d2a00f4a28959283f6b72c.webp"
				alt="Me"
				class={['size-48']}
			/>
		</div>
		<div
			class={[
				'grow',
				'md:border-l-2',
				'border-border',
				'md:pl-8',
				'prose',
				'dark:prose-invert',
				'prose-zinc',
				'xl:min-w-240'
			]}
		>
			<h1 class={['font-heading', 'text-5xl', 'font-semibold', 'mb-0']}>Leonard Lesinski</h1>
			<p class={['text-muted-foreground', 'font-semibold', 'mt-0', 'mb-0']}>he/him</p>

			<p class={['mt-4', 'mb-4', 'text-xl']}>Fullstack Software Developer</p>

			<p class={['flex', 'items-center', 'gap-2', 'mb-2', 'mt-0']}>
				<MapPin class={['size-5']} /> North Rhine-Westphalia, Germany
			</p>
			<p class={['flex', 'items-center', 'gap-2', 'mb-2', 'mt-0']}>
				<BookMarked class={['size-5']} /> Computer Science at TU Dortmund
			</p>
			<p class={['flex', 'items-center', 'gap-2', 'mb-2', 'mt-0']}>
				<Clock class={['size-5']} />
				<span>
					{time.toLocaleDateString('en-US', {
						timeZone: 'Europe/Berlin',
						hour: '2-digit',
						minute: '2-digit',
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
						hour12: false
					})}
					<span class={['text-muted-foreground', 'text-xs']}>{timezone}</span>
				</span>
			</p>
			<p class={['flex', 'items-center', 'gap-2', 'mb-2', 'mt-0']}>
				<Mail class={['size-5']} />
				<noscript class={['text-destructive']}>
					<a href="https://enable-javascript.com/" target="_blank">enable JavaScript</a>
				</noscript>
				<a
					href={mail ? 'mailto:' + mail : null}
					class={[!mail && ['text-muted-foreground', 'no-underline', 'font-normal']]}
				>
					{mail || 'loading...'}
				</a>
			</p>

			<div
				class={[
					'mt-4',
					'**:no-underline',
					'flex',
					'flex-col',
					'md:flex-row',
					'items-center',
					'gap-1'
				]}
			>
				<Button
					href={mail ? 'mailto:' + mail : null}
					disabled={!mail}
					class={['w-full', 'md:w-fit']}
				>
					<ChevronRight />
					Contact me
				</Button>
				<Button href="https://github.com/Le0X8" variant="secondary" class={['w-full', 'md:w-fit']}>
					<SiGithub />
					GitHub
				</Button>
				<ButtonGroup>
					<Button href="https://instagram.com/leolesinski" variant="ghost">
						<SiInstagram />
					</Button>
					<Button href="https://x.com/Le0_X8" variant="ghost">
						<SiX />
					</Button>
					<Button href="https://gruene.social/@Le0_X8" variant="ghost">
						<SiMastodon />
					</Button>
					<Button href="https://t.me/Le0_X8" variant="ghost">
						<SiTelegram />
					</Button>
				</ButtonGroup>
			</div>

			<h2 class={['mt-6', 'mb-4', 'font-heading']}>Projects</h2>

			<div class={['grid', 'grid-cols-1', 'md:grid-cols-2', 'w-full', 'gap-4', 'mt-4']}>
				<ProjectCard
					name="donald.org website"
					description="rewrite with custom CMS"
					url="https://donald.org/"
				>
					<SiSvelte title="Svelte" />
					<SiVite title="Vite" />
					<SiTypescript title="TypeScript" />
					<SiTailwindcss title="Tailwind CSS" />
					<SiCloudflarepages title="Cloudflare Pages" />
					<SiSqlite title="SQLite (Cloudflare D1)" />
				</ProjectCard>

				<ProjectCard
					name="Mathetower bot"
					description="Discord bot with lots of features for a server with friends"
					url="https://github.com/Le0X8/mathetower-bot"
				>
					<SiTypescript title="TypeScript" />
					<SiDiscorddotjs title="Discord.js" />
					<SiRust title="Rust" />
					<SiNodedotjs title="Node.js" />
				</ProjectCard>

				<ProjectCard
					name="dh library"
					description="binary data parsing library for Rust I/O streams"
					url="https://crates.io/crates/dh"
				>
					<SiRust title="Rust" />
				</ProjectCard>

				<ProjectCard
					name="abi25.party website"
					description="online ticket shop for a graduation party"
					url="https://abi25.pages.dev/"
				>
					<SiSvelte title="Svelte" />
					<SiVite title="Vite" />
					<SiTypescript title="TypeScript" />
					<SiStripe title="Stripe Payments API" />
					<SiTailwindcss title="Tailwind CSS" />
					<SiCloudflarepages title="Cloudflare Pages" />
				</ProjectCard>
			</div>
			<a
				href="https://github.com/Le0X8?tab=repositories"
				class={['text-right', 'w-full', 'block', 'no-underline', 'text-sm', 'py-2', 'px-1']}
			>
				...more on my GitHub!
			</a>

			<h2 class={['mt-0', 'mb-4', 'font-heading']}>Open Source Contributions</h2>
			<div
				class={[
					'grid',
					'grid-cols-1',
					'md:grid-cols-2',
					'xl:grid-cols-3',
					'w-full',
					'gap-4',
					'mt-4'
				]}
			>
				<ProjectCard
					author="@marcrobledo"
					name="acnl-editor"
					description="Animal Crossing: New Leaf savegame editor"
					url="https://github.com/marcrobledo/acnl-editor/pull/106"
				>
					<SiHtml5 title="HTML5" />
					<SiJavascript title="JavaScript" />
				</ProjectCard>
				<ProjectCard
					author="@mbrobbel"
					name="rustfmt-check"
					description="GitHub Action to format Rust code"
					url="https://github.com/mbrobbel/rustfmt-check/pull/1052/changes"
				>
					<SiTypescript title="TypeScript" />
					<SiMarkdown title="Markdown" />
				</ProjectCard>
				<ProjectCard
					author="@adamgauthier"
					name="TaylorBot"
					description="multi-purpose Discord bot"
					url="https://github.com/adamgauthier/TaylorBot/pull/5"
				>
					C#
				</ProjectCard>
				<ProjectCard
					author="@Fechin"
					name="reference"
					description="cheat sheets for developers"
					url="https://github.com/Fechin/reference/pull/711"
				>
					<SiMarkdown title="Markdown" />
				</ProjectCard>
				<ProjectCard
					author="@huntabyte"
					name="shadcn-svelte"
					description="component library for Svelte"
					url="https://github.com/huntabyte/shadcn-svelte/pull/2228"
				>
					<SiSvelte title="Svelte" />
					<SiMarkdown title="Markdown" />
				</ProjectCard>
				<ProjectCard
					author="@slint-ui"
					name="slint"
					description="GUI framework for Rust and C++"
					url="https://github.com/slint-ui/slint/pull/7210"
				>
					<SiMarkdown title="Markdown" />
				</ProjectCard>
			</div>
			<a
				href="https://github.com/search?q=author%3ALe0X8&type=pullrequests"
				class={['text-right', 'w-full', 'block', 'no-underline', 'text-sm', 'py-2', 'px-1']}
			>
				view all on GitHub
			</a>

			<p class={['text-right', 'mb-8', 'border-y', 'border-border', 'pt-4', 'pb-3', 'px-4']}>
				<span class={['text-sm', 'flex', 'flex-col', 'gap-1', 'mb-2']}>
					<span class={['text-xs']}
						>built with &lt;3 using SvelteKit and hosted on Cloudflare Workers</span
					>
					<span>&copy; 2021-{time.getFullYear()} Leonard Lesinski</span>
				</span>
				<a href={resolve('/imprint')} class={['no-underline']}>Imprint</a>
				&bull;
				<a href={resolve('/privacy')} class={['no-underline']}>Privacy Policy</a>
			</p>
			<a
				href="https://www.pexels.com/photo/canion-mountains-on-night-sky-2098428/"
				class={['text-right', 'w-full', 'block', 'no-underline', 'text-xs', 'font-light']}
			>
				Background image by Eberhard Grossgasteiger from Pexels
			</a>
		</div>
	</div>
</div>
