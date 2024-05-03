<script lang="ts">
	import { Languages, ExternalLink } from 'lucide-svelte';
	import { page } from '$app/stores';
  $: prefix = $page.url.pathname.startsWith('/de') ? '/de' : '';
  $: de = $page.url.pathname.startsWith('/de');
  $: en = !de;
</script>

<nav>
	<header>Leonard Lesinski</header>

  <a id="lang" href="{de ? $page.url.pathname.replace('/de', '') : '/de' + $page.url.pathname}">
		<Languages />
		{de ? 'EN' : 'DE'}
	</a>

	<ul>
		<li><a href="{prefix}/about">{en ? 'About' : 'Über mich'}</a></li>
		<li><a href="{prefix}/projects">{en ? 'Projects' : 'Projekte'}</a></li>
    <li><a href="https://github.com/Le0X8" target="_blank"><ExternalLink absoluteStrokeWidth={true}/> GitHub</a></li>
	</ul>
</nav>
