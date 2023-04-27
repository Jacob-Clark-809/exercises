function palindromes(string) {
  let allSubstrings = substrings(string);
  console.log(allSubstrings.filter(isPalindrome));
}

function isPalindrome(string) {
  return string.length > 1 && string.split('').reverse().join('') === string;
}

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

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]