<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class={['prose', 'prose-zinc', 'dark:prose-invert', 'mx-auto', 'my-4']}>
	<h1>Privacy Policy</h1>

	<p>
		This website does not collect any personal data. For your privacy and security, no cookies,
		trackers, advertisement or analytics tools are used.
	</p>

	<p>
		However, Cloudflare Workers, the hosting service for this website, may collect some data as
		described in their <a href="https://cloudflare.com/policies/privacy/">Privacy Policy</a>. This
		data is only collected by Cloudflare on the server side and not by this website.
	</p>

	<p>This website does not load any client-side scripts from Cloudflare or other third parties.</p>

	<p>&rarr; <a href={resolve('/imprint')}>Imprint</a></p>
</div>
