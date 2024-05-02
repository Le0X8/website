<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<svelte:component this={data.content} />