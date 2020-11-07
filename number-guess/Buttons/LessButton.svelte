<script>
  import Button from "./Button.svelte";
  import { currentUpperBound, currentGuess, count, isGuessed } from "../store.js";

  const handleLessClick = () => {
    $currentUpperBound = $currentGuess;
    $count = $count + 1;
  };
</script>

<Button onClick={handleLessClick} disabled={$isGuessed}>
  Jest mniejsza
</Button>