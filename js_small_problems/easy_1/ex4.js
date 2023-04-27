let readlineSync = require('readline-sync');

console.log('What is the bill?');
let bill = Number(readlineSync.prompt());

console.log('What is the tip percentage?');
let tipPercentage = Number(readlineSync.prompt());

let tipAmount = bill * (tipPercentage / 100);
let total = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);