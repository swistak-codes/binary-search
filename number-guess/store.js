import { writable, derived } from "svelte/store";

/**
 * Przechowuje liczbę wykonanych prób
 */
export const count = writable(1);

/**
 * Przechowuje początek rozpatrywanego zakresu
 */
export const currentLowerBound = writable(0);

/**
 * Przechowuje koniec rozpatrywanego zakresu
 */
export const currentUpperBound = writable(100);

/**
 * Przechowuje informację, czy liczba została odgadnięta
 */
export const isGuessed = writable(false);

/**
 * Przechowuje aktualny "traf"
 */
export const currentGuess = derived(
  [currentLowerBound, currentUpperBound],
  ([$currentLowerBound, $currentUpperBound]) =>
    // traf wyliczamy jako środek zakresu liczb, czyli średnią arytmetyczną jego początku i końca
    // z racji, ze dostawalibyśmy w ten sposób równiez ulamki, zaokrąglamy (w tym przypadku, zawsze w górę)
    Math.round(($currentUpperBound + $currentLowerBound) / 2)
);
