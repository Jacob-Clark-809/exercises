function isPalindromicNumber(num) {
  isPalindrome(String(num));
}

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

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true