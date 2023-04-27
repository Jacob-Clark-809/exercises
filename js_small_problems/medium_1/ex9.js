let knownValues = [1, 1];

function fibonacci(nth) {
  if (knownValues[nth - 1]) {
    return knownValues[nth - 1];
  }

  let nthValue = fibonacci(nth - 1) + fibonacci(nth - 2);
  knownValues[nth - 1] = nthValue;
  return nthValue;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050