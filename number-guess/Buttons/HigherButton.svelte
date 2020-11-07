<script>
  import Button from "./Button.svelte";
  import { currentLowerBound, currentGuess, isGuessed, count } from "../store.js";

  const handleHigherClick = () => {
    $currentLowerBound = $currentGuess;
    $count = $count + 1;
  };
</script>

<Button onClick={handleHigherClick} disabled={$isGuessed}>
  Jest większa
</Button>