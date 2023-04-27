function sum(max) {
  let total = 0;
  for (let index = 1; index <= max; index += 1) {
    total += index;
  }

  return total;
}

function product(max) {
  let total = 1;
  for (let index = 1; index <= max; index += 1) {
    total *= index;
  }

  return total;
}

const readlineSync = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let max = Number(readlineSync.prompt());

let calcType;
while(true) {
  console.log('Enter "s" to compute the sum, or "p" to compute the product:');
  calcType = readlineSync.prompt();
  if (calcType[0] === 's' || calcType[0] === 'p') {
    break;
  }

  console.log('That is not a valid choice.');
}

if (calcType[0] === 's') {
  console.log(`The sum of the integers between 1 and ${max} is ${sum(max)}.`);
} else {
  console.log(`The product of the integers between 1 and ${max} is ${product(max)}.`);
}

