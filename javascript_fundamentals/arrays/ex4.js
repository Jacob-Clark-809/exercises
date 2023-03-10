function concat(array1, ...args) {
  let newArray = array1.slice();

  for (let argsIndex = 0; argsIndex < args.length; argsIndex += 1) {
    let currentArgument = args[argsIndex];
    if (!Array.isArray(currentArgument)) {
      newArray.push(currentArgument);
    } else {
      for (let index = 0; index < currentArgument.length; index += 1) {
        newArray.push(currentArgument[index]);
      }
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
