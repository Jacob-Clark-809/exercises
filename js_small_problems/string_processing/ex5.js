function swapCase(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index].match(/[a-z]/)) {
      result += string[index].toUpperCase();
    } else if (string[index].match(/[A-Z]/)) {
      result += string[index].toLowerCase();
    } else {
      result += string[index];
    }
  }

  console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"