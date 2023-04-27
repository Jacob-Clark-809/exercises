function wordToDigit(string) {
  console.log(
    string.split(' ').map(wordMap).join(' ')
  );
}

function wordMap(word) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                 'eight', 'nine']

  numbers.forEach((wordNumber, number) => {
    word = word.replace(wordNumber, String(number));
  })

  return word;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."