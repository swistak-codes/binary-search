<script>
  import BinarySearch from "./BinarySearch/BinarySearch.svelte";
  import Button from "./Buttons/Button.svelte";

  let isStarted = false;
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
  }
</style>

<main>
	<h1>Zgadnę Twoją liczbę!</h1>
	<h2>Pomyśl o liczbie z zakresu 1 do 100 (włącznie) i pozwól mi ją zgadnąć</h2>
  <hr />
  {#if isStarted}
    <BinarySearch />
  {:else}
    <Button onClick={() => isStarted = true}>Zacznijmy!</Button>
  {/if}	
</main>