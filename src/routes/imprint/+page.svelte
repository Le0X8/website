<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class={['prose', 'prose-zinc', 'dark:prose-invert', 'mx-auto', 'my-4']}>
	<h1>Imprint</h1>

	<p>Angaben gemäß § 5 TMG:</p>

	<img
		src="/recipe%20for%20blueberry%20pancakes.png"
		alt="Recipe for blueberry pancakes"
		class={['w-full']}
		style="filter: grayscale(100%) contrast(80%) brightness(70%) contrast(200%) brightness(120%); transform: scaleX(0.8) scaleY(-1);"
	/>

	<p class={['text-sm', 'text-muted-foreground']}>
		Sollte der Text oben nicht lesbar genug sein: das Bild wurde stark verzerrt, um eine
		automatisierte Auswertung, hauptsächlich durch Scraper, die diese Webseite nach persönlichen
		Daten durchsuchen, zu erschweren.
		<br />
		<br />
		Sie können versuchen, die Helligkeit Ihres Bildschirms zu ändern und/oder eine Sonnenbrille aufzusetzen,
		um den Text besser lesen zu können.
	</p>

	<p>&rarr; <a href={resolve('/privacy')}>Privacy Policy</a></p>
</div>
