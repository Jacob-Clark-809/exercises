function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }

  let previous = [1, 1];
  let current;
  let index = 2;
  do {
    current = previous[0] + previous[1];
    previous = [previous[1], current];
    index += 1;
  } while (index < nth);

  return current;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050