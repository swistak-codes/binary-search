<script>
  import Button from "./Button.svelte";
  import {
    currentLowerBound,
    currentUpperBound,
    currentGuess,
    isGuessed,
    count
  } from "../store.js";

  // blokujemy przycisk jeśli juz odgadnięto, albo nie da się bardziej zawęzić
  $: isDisabled = $isGuessed || $currentUpperBound === $currentGuess;

  const handleHigherClick = () => {
    // przesuwamy początek zakresu na aktualny traf
    $currentLowerBound = $currentGuess;
    // zwiększamy licznik o 1
    $count = $count + 1;
  };
</script>

<Button onClick={handleHigherClick} disabled={isDisabled}>
  Jest większa
</Button>