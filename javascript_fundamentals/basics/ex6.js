const RLS = require("readline-sync");

console.log('Please enter a phrase:');
let phrase = RLS.prompt();

let onlyAlphabetic = phrase.replace(/[^a-z]/gi, '');

let chars = onlyAlphabetic.length;
console.log(`There are ${chars} alphabetic characters in "${phrase}".`);