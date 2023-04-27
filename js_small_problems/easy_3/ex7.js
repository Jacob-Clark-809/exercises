function runningTotal(arr) {
  if (arr.length === 0) {
    console.log(arr);
    return;
  }
  let result = [arr[0]];
  for (let index = 1; index < arr.length; index += 1) {
    let sum = result[index - 1] + arr[index];
    result.push(sum);
  }

  console.log(result);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []