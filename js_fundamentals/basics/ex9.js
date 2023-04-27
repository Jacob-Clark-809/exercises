const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let negative = false;
  if (number !== Math.abs(number)) {
    number = Math.abs(number);
    negative = true;
  }

  let eachDigit = [];
  while (number > 9) {
    let digit = DIGITS[number % 10];
    eachDigit.push(digit);

    number = Math.floor(number / 10);
  }
  eachDigit.push(DIGITS[number]);

  if (negative) {
    eachDigit.push('-');
  } else if (eachDigit.length > 1 || eachDigit[0] !== '0') {
    eachDigit.push('+');
  }

  return eachDigit.reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(-123));         // "0"
console.log(integerToString(0));      // "5000"
