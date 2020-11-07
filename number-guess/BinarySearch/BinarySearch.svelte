<script>
	import Button from "../Buttons/Button.svelte";
	import LessButton from "../Buttons/LessButton.svelte";
	import HigherButton from "../Buttons/HigherButton.svelte";
	import OkButton from "../Buttons/OkButton.svelte";
	import ResetButton from "../Buttons/ResetButton.svelte";
	import Chart from "./Chart";
	import { currentGuess, isGuessed, count } from "../store.js";
</script>

<p>Czy myślisz teraz o liczbie {$currentGuess}?</p>
<LessButton />
<OkButton />
<HigherButton />
<Chart />
{#if $isGuessed}
	<p>Zgadłem za {$count} razem!</p>
	<ResetButton />
{/if}
