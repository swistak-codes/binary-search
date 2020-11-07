# Binary search

Repository with code for [blog](https://swistak.codes) entry about binary search and other search methods in list structure.

Comments are in Polish, since blog article is also in Polish.

## Apps

All of the apps require NodeJS (latest LTS) to be installed on your machine.

### number-guess

Simple number guessing game showing binary search capabilities. Can be checked here: https://codesandbox.io/s/number-guess-cl937

Running instructions:

```bash
cd ./number-guess
npm install
npm run start:dev
```

### binary-search-stats

App for generating CSVs with statistics about binary search. Runs in two modes — collecting how many comparisons is needed to find each number in a sequence or collecting average number of comparisons for different sizes of sets.

Running instructions:

```bash
cd ./binary-search-stats
npm install
npm run comparisons 0 100
npm run averages 5 10000
```
