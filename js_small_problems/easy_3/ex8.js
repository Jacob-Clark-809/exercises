function swap(sentence) {
  let words = sentence.split(' ');
  let swappedWords = [];

  words.forEach(function(word) {
    if (word.length === 1) {
      swappedWords.push(word);
    } else if (word.length === 2) {
      swappedWords.push(word[1] + word[0]);
    } else {
      let swapped = word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
      swappedWords.push(swapped);
    }
  });

  console.log(swappedWords.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"