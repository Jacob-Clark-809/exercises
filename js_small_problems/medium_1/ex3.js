function maxRotation(number) {
  for (let rotation = String(number).length; rotation > 1; rotation -= 1) {
    number = rotateRightmostDigits(number, rotation);
  }

  console.log(number);
}

function rotateRightmostDigits(number, rotation) {
  let digits = String(number).split('');
  let noRotate = digits.slice(0, digits.length - rotation);
  let toRotate = digits.slice(digits.length - rotation);
  toRotate = rotateArray(toRotate);

  return Number(noRotate.concat(toRotate).join(''));
}

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0 || array.length === 1) {
    return array.slice(0);
  }

  return array.slice(1).concat(array[0]);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845