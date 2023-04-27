function staggeredCase(sentence) {
  let chars = sentence.split('').map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  });

  console.log(chars.join(''));
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"