<script lang="ts">
  import he from 'he';

  const mail = he.encode('q3tt3d7mj@mozmail.com', {
    useNamedReferences: false,
    allowUnsafeSymbols: true,
    encodeEverything: true,
  });
</script>

{@html `<a href="mailto:${mail}">Email me!</a>`}