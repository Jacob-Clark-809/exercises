function shift(array) {
  if (array.length === 0) {
    return undefined;
  }

  let removed = array[0];
  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }

  array.length -= 1;
  return removed;
}

function unshift(array, ...args) {
  let copy = array.slice();
  for (let index = 0; index < args.length; index += 1) {
    array[index] = args[index];
  }

  for (let index = 0; index < copy.length; index += 1) {
    array[index + args.length] = copy[index];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]