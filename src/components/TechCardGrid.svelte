<script lang="ts">
  export let title: string;
</script>

<h3 class="mt-2 text-lg text-zinc-500 uppercase">{title}</h3>

<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-3 auto-rows-fr">
  <slot />
</div>