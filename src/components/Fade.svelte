<script lang="ts">
  export let delay: number = 0;
  delay = delay * 100;
</script>

<span style="opacity: 0; animation: 0.5s fade normal 1; animation-delay: {delay}ms; animation-fill-mode: forwards;">
  <slot />
</span>
