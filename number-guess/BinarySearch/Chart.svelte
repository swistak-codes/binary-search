<script>
  import Chart from "chart.js";
  import { onMount } from "svelte";
  import {
    currentUpperBound,
    currentLowerBound,
    currentGuess
  } from "../store.js";

  const dataGenerator = (from, to) => {
    const result = [];
    for (let i = 0; i <= 100; i++) {
      if (i > from && i < to) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
    return result;
  };

  const generateDataSets = () => [
    {
      label: "Mniejsze",
      data: dataGenerator($currentLowerBound, $currentGuess),
      borderColor: "lightgreen",
      backgroundColor: "lightgreen",
      pointStyle: "line",
      borderWidth: 1
    },
    {
      label: "Aktualny strzał",
      data: [...Array($currentGuess), 1, ...Array(100 - $currentGuess)],
      borderColor: "red",
      backgroundColor: "red",
      borderWidth: 1,
      tension: 0
    },
    {
      label: "Większe",
      data: dataGenerator($currentGuess, $currentUpperBound),
      borderColor: "lightblue",
      backgroundColor: "lightblue",
      pointStyle: "line",
      borderWidth: 1
    }
  ];

  let canvas;
  let chart;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [...Array(101).keys()],
        datasets: generateDataSets()
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: "bottom"
        },
        layout: {
          padding: {
            top: 8
          }
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              ticks: {
                max: 100,
                min: 0,
                stepSize: 5,
                maxTicksLimit: 20
              }
            }
          ]
        }
      }
    });
  });

  currentGuess.subscribe(() => {
    if (chart) {
      chart.data.datasets = generateDataSets();
      chart.update();
    }
  });
</script>

<style>
  div {
    width: 100%;
  }

  canvas {
    margin: auto;
  }
</style>

<div>
  <canvas bind:this={canvas} width="500" height="70"></canvas>
</div>
