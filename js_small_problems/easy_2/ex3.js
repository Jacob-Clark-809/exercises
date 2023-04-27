function stringy(length) {
  let result = '';
  for (let index = 0; index < length; index += 1) {
    if (index % 2 == 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
