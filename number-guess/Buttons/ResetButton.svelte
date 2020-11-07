<script>
  import Button from "./Button.svelte";
  import {
    isGuessed,
    count,
    currentLowerBound,
    currentUpperBound
  } from "../store.js";

  const handleResetClick = () => {
    // przywracamy wartości początkowe
    $isGuessed = false;
    $count = 0;
    $currentLowerBound = 0;
    $currentUpperBound = 100;
  };
</script>

<Button onClick={handleResetClick}>
  Próbujemy jeszcze raz?
</Button>