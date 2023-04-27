function triangle(size) {
  for (let index = 1; index <= size; index += 1) {
    console.log(oneRow(index, size));
  }
}

function oneRow(rowNumber, size) {
  let row = '';
  for (let index = 0; index < size - rowNumber; index += 1) {
    row += ' ';
  }

  for (let index = 0; index < rowNumber; index += 1) {
    row += '*';
  }

  return row;
}

triangle(5);
triangle(9);