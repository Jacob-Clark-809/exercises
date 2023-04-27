function substrings(string) {
  let result = [];
  for (let index = 0; index < string.length; index += 1) {
    result.push(...leadingSubstrings(string.slice(index)));
  }

  return result;
}

function leadingSubstrings(string) {
  return string.split('').map((char, index) => string.slice(0, index + 1));
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ];
