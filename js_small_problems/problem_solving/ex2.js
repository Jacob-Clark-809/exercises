// Produce the result row by row with a seperate row function.
// Row function takes current row number and total row length.
// Number of asteriks = (currentRow * 2) - 1
// Spaces each side = (total width - # of asteriks) / 2

function diamond(width) {
  let result = '';
  for (let row = 1; row <= Math.floor(width / 2); row += 1) {
    result += generateRow(row, width) + '\n';
  }
  for (let row = Math.ceil(width / 2); row >= 1; row -= 1) {
    result += generateRow(row, width) + '\n';
  }

  console.log(result);
}

function generateRow(rowNum, width) {
  let asteriksTotal = (rowNum * 2) - 1;
  let asteriks = '';
  for (let index = 0; index < asteriksTotal; index += 1) {
    asteriks += '*';
  }

  let borderTotal= (width - asteriksTotal) / 2;
  let border = '';
  for (let index = 0; index < borderTotal; index += 1) {
    border += ' ';
  }

  return border + asteriks + border;
}

diamond(1);
diamond(3);
diamond(9);
