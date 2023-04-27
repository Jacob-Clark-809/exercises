function isUppercase(string) {
  string = string.replace(/[^a-z]/gi, '');
  console.log(string.toUpperCase() === string);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true