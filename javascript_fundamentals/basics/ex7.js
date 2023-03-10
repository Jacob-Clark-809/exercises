function stringToInteger(number) {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let factor = 1;
  let total = 0;
  for (let index = number.length - 1; index >= 0; index -= 1) {
    let currentDigit = digits.indexOf(number[index]);
    let value = currentDigit * factor;
    total += value;
    factor *= 10;
  }

  return total;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570