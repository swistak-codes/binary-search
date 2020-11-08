// const averages = require('./averages');
const comparisons = require('./comparisons');
const generators = require('./data-generators');

const appMode = {
    // averages,
    comparisons,
};

// pobieramy tryb działania aplikacji z argumentów - 'comparisons' albo 'averages'
const mode = process.argv[2] || 'comparisons';
// pobieramy wybrany generator wartości
const generator = process.argv[3] || 'oneToN';
// pobieramy argument dla generatora
let arg = parseInt(process.argv[4]);

if (isNaN(arg)) { arg = undefined; }

// generujemy ciąg
const array = generators[generator](arg);

appMode[mode](array, generator);
