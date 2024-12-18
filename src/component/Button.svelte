<button on:click={handleClick}>
  {num}
</button>
<button on:click={handleReset}>
  reset
</button>

<script>
  let num = 0;
  function handleClick() {
    num += 1;
  }
  function handleReset() {
    num = 0;
  }
</script>