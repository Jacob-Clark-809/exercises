function wordSizes(sentence) {

  let wordLengths = sentence.split(' ').map(word => word.length);

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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}