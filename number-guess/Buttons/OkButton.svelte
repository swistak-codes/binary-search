<script>
  import Button from "./Button.svelte";
  import { isGuessed } from "../store.js";

  const handleYesClick = () => {
    $isGuessed = true;
  };
</script>

<Button onClick={handleYesClick} disabled={$isGuessed}>
  Tak, to ta liczba!
</Button>