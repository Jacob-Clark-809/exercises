/*
Input: - number to rotate and number of digits to rotate
Output: number with digits rotated

Rules: - rotate rightmost digits specified by one and to the left

Data types: - convert number into string and the array of digits

Algorithm: - Split number into array of string digits
- Seperate last n digits into separate array
- Pass that array to rotateArray and store return value
- Concat first n - length digit with new rotated array
- Join array into a string then convert to a number and return
*/

function rotateRightmostDigits(number, rotation) {
  let digits = String(number).split('');
  let noRotate = digits.slice(0, digits.length - rotation);
  let toRotate = digits.slice(digits.length - rotation);
  toRotate = rotateArray(toRotate);

  let result = Number(noRotate.concat(toRotate).join(''));
  console.log(result);
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

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917