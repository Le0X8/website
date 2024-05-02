<script lang="ts">
  import Header from './header.svelte';
	import Footer from './footer.svelte';

	import '../app.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
