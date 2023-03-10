function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }
  if (end > array.length) {
    end = array.length;
  }

  let result = [];
  for (let index = begin; index < end; index += 1) {
    result.push(array[index]);
  }

  return result;
}

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) {
    start = array.length;
  }
  if (start + deleteCount > array.length) {
    deleteCount = array.length - start;
  }

  let removed = [];
  while (deleteCount > 0) {
    removed.push(array[start]);
    for (let index = start; index < array.length; index += 1) {
      array[index] = array[index + 1];
    }

    array.length -= 1;
    deleteCount -= 1;
  }

  let endPart = slice(array, start, array.length);
  for (let index = 0; index < args.length; index += 1) {
    array[start + index] = args[index];
  }
  for (let index = 0; index < endPart.length; index += 1) {
    array[start + index + args.length] = endPart[index];
  }

  return removed;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]