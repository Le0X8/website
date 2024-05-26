<script lang="ts">
  export let text: string = '';
  export let delay: number = 0;
  delay = delay * 100;

  let chars: string[] = [];
  const splitText = text.split('');
  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i] === '\u2774') {
      let str = '';
      i++;
      while (splitText[i] !== '\u2775') {
        str += splitText[i];
        i++;
      };
      chars.push(str);
    } else chars.push(splitText[i]);
  };
</script>

{#each chars as char, i}
  <span style="opacity: 0; animation: 0.1s fade normal 1; animation-delay: {delay + i * 100}ms; animation-fill-mode: forwards;">{char}</span>
{/each}