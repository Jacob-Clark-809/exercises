function letterCaseCount(string) {
  let lowercaseMatches = string.match(/[a-z]/g) || [];
  let uppercaseMatches = string.match(/[A-Z]/g) || [];
  let lowercase = lowercaseMatches.length;
  let uppercase = uppercaseMatches.length;
  let neither = string.length - lowercase - uppercase;

  console.log({
    lowercase,
    uppercase,
    neither,
  });
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }