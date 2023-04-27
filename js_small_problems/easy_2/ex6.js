let readlineSync = require('readline-sync');

const wordTypes = ['noun', 'verb', 'adjective', 'adverb'];
let wordChoices = [];
wordTypes.forEach(function(type) {
  console.log('Enter a ' + type + ':');
  wordChoices.push(readlineSync.prompt());
});

console.log(`Do you ${wordChoices[1]} your ${wordChoices[2]} ${wordChoices[0]} ${wordChoices[3]}? That's hilarious!`);