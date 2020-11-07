<script>
  import Button from "./Button.svelte";
  import { currentUpperBound, currentGuess, count, isGuessed } from "../store.js";

  const handleLessClick = () => {
    // przesuwamy koniec zakresu na aktualny traf
    $currentUpperBound = $currentGuess;
    // zwiększamy licznik o 1
    $count = $count + 1;
  };
</script>

<Button onClick={handleLessClick} disabled={$isGuessed}>
  Jest mniejsza
</Button>