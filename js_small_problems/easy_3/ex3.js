const RLS = require('readline-sync');

console.log('What is your age?');
let age = parseInt(RLS.prompt(), 10);
console.log('At what age would you like to retire?');
let retirementAge = parseInt(RLS.prompt(), 10);

let yearsLeft = retirementAge - age;
let currentYear = (new Date()).getFullYear();
let retirementYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);
