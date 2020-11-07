const averages = require('./averages');
const comparisons = require('./comparisons');

const appMode = {
    averages,
    comparisons,
};

// pobieramy tryb działania aplikacji z argumentów - 'comparisons' albo 'averages'
const mode = process.argv[2] || 'comparisons';
// pobieramy pierwszą wartość liczbową która będzie argumentem dla uruchamianej przez nas części aplikacji
let start = parseInt(process.argv[3]);
// pobieramy drugą wartość liczbową która będzie argumentem dla uruchamianej przez nas części aplikacji
let end = parseInt(process.argv[4]);

if (isNaN(start)) { start = undefined; }
if (isNaN(end)) { end = undefined; }

appMode[mode](start, end);
