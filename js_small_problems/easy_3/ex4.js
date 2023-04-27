function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) return false;
  }

  return true;
}

function isPalindrome(string) {
  let forwards = string.split('');
  let backwards = string.split('').reverse();

  console.log(arrayEqual(forwards, backwards));
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true