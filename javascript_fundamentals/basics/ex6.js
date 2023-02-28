const RLS = require("readline-sync");

console.log('Please enter a phrase:');
let phrase = RLS.prompt();
let chars = phrase.length;
console.log(`There are ${chars} characters in "${phrase}".`);