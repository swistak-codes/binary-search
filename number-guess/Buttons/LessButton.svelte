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
  $: isDisabled = $isGuessed || $currentLowerBound + 1 === $currentGuess;

  const handleLessClick = () => {
    // przesuwamy koniec zakresu na aktualny traf
    $currentUpperBound = $currentGuess;
    // zwiększamy licznik o 1
    $count = $count + 1;
  };
</script>

<Button onClick={handleLessClick} disabled={isDisabled}>
  Jest mniejsza
</Button>