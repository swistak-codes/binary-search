import { writable, derived } from "svelte/store";

export const count = writable(1);
export const currentLowerBound = writable(0);
export const currentUpperBound = writable(100);
export const isGuessed = writable(false);
export const currentGuess = derived(
  [currentLowerBound, currentUpperBound],
  ([$currentLowerBound, $currentUpperBound]) =>
    Math.round(($currentUpperBound + $currentLowerBound) / 2)
);
