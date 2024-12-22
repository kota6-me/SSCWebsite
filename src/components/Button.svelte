<button on:click={handleClick} class="font-jbm">
  {num}
</button>
<button on:click={handleReset} class="font-urb">
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