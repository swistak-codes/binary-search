<script>
  import Button from "./Button.svelte";
  import { isGuessed } from "../store.js";

  const handleYesClick = () => {
    // oznaczamy, ze liczba została trafiona
    $isGuessed = true;
  };
</script>

<Button onClick={handleYesClick} disabled={$isGuessed}>
  Tak, to ta liczba!
</Button>