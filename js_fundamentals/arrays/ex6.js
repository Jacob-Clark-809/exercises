function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseArray(inputForReversal.split('')).join('');
  }
}

function reverseArray(array) {
  let reversed = [];
  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversed.push(array[index]);
  }

  return reversed;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]