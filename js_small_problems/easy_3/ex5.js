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

function isRealPalindrome(string) {
  let cleanString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');

  isPalindrome(cleanString);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false