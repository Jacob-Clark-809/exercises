function wordCap(sentence) {
  let words = sentence.split(/\s+/);
  let capitalizedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  console.log(
    capitalizedWords.join(' ')
    );
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'