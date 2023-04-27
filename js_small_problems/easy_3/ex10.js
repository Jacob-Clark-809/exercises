function wordSizes(sentence) {
  let wordLengths = sentence.split(' ').map(word =>
    word.replace(/[^a-zA-Z]+/g, '').length
  );

  let count = {};
  for (let index = 0; index < wordLengths.length; index += 1) {
    let currentLength = wordLengths[index];
    if (currentLength === 0) continue;

    if (count[currentLength] !== undefined) {
      count[currentLength] += 1;
    } else {
      count[currentLength] = 1;
    }
  }

  console.log(count);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}