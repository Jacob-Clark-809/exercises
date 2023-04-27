function crunch(doubledString) {
  let result = "";
  for (let index = 0; index < doubledString.length; index += 1) {
    if (doubledString[index] === doubledString[index + 1]) {
      continue;
    }

    result += doubledString[index];
  }

  console.log(result);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""