/*
Rules:
- first two of sequence are 1 and 1
- ever subsequent number is sum of previous two

Data structures: - numbers for values in sequence
                 - convert to string to check number of digits

Algortithm:
- Calculate numbers in the fibonnacci sequence keeping track of current index
- When current number has specified digits then return index
*/

function findFibonacciIndexByLength(digits) {
  let previous = [1n, 1n];
  let current;
  let index = 2n;
  do {
    current = previous[0] + previous[1];
    previous = [previous[1], current];
    index += 1n;
  } while (String(current).length < digits);

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.