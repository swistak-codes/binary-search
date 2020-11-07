<script>
  import Button from "./Button.svelte";
  import { currentLowerBound, currentGuess, isGuessed, count } from "../store.js";

  const handleHigherClick = () => {
    // przesuwamy początek zakresu na aktualny traf
    $currentLowerBound = $currentGuess;
    // zwiększamy licznik o 1
    $count = $count + 1;
  };
</script>

<Button onClick={handleHigherClick} disabled={$isGuessed}>
  Jest większa
</Button>