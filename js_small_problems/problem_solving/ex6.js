/*
Input: - number n being the number of rows and columns
Output: - Log the star to the console

Rules:
- Middle row has n '*'
- Moving out from the middle each row has 3 stars
- x rows out from midde corresponds to x-1 spaces between stars
- One * always centered
- Continue outward until row starts with *
- Going outward width from * to * goes like: 3, 5, 7, 9, 11, ...
- Spaces in front = (n - width of stars) / 2

Data type: - strings for each row
           - Array of string rows for star
           - String of joined rows with '\n'

Algorithm:
- Start with center string (n *'s')
- Loop generate outward rows
- Each loop increase seperator spaces by 1
- Loop until spaces in front === 0
- concat the reverse of all but first elemnt of array onto front of array
- Join array with \n and output
*/

function star(n) {
  let middleRow = '*'.repeat(n);
  let rowArray = [middleRow];

  let spacesBetween = 0;
  let spacesInFront = (n - 3) / 2;
  while (spacesInFront >= 0) {
    let currentRow = ' '.repeat(spacesInFront);
    for (let index = 0; index < 3; index += 1) {
      currentRow += '*' + ' '.repeat(spacesBetween);
    }

    rowArray.push(currentRow);
    spacesBetween += 1;
    spacesInFront -= 1;
  }

  let starArray = rowArray.slice(1).reverse().concat(rowArray);

  console.log(starArray.join('\n'));
}

star(41);
