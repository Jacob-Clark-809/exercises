function staggeredCase(sentence) {
  let nextMethod = 'toUpperCase';
  console.log(
    sentence.split('')
            .map(char => {
              if (char.match(/[a-z]/i)) {
                let toReturn = char[nextMethod]();
                nextMethod = nextMethod === 'toUpperCase' ?
                             'toLowerCase' : 'toUpperCase';
                return toReturn;
              } else {
                return char;
              }
            })
            .join('')
    );
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"