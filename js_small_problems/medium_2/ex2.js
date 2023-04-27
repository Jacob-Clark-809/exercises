/*
Input- 3 numbers representing the length of each side
Output - Equilateral, isosceles, or scalene depending on triangle type

Rules:
- To be valid: all sides > 0; sum of length of two shortest must be > than
length of longest
- Equilateral if a = b = c
- Isosceles if not equilateral and a = b or b = c
- Scalene if not equilateral or isosceles

Datatypes: - Numbers for input and comparison
           - String for output

Algorithm:
- Check if valid
- Check if equilateral
- Else check isosceles
- Else scalene
*/

function triangle(a, b, c) {
  if (!validTriangle(a, b, c)) {
    console.log("invalid");
    return;
  } else if (a === b && b === c) {
    console.log("equilateral");
    return;
  } else if (a === b || b === c || a === c) {
    console.log("isosceles");
    return;
  } else {
    console.log("scalene");
    return;
  }
}

function validTriangle(...sides) {
  sides.sort((a, b) => a - b);
  let [ small, middle, large ] = sides;

  return small > 0 &&
         middle > 0 &&
         large > 0 &&
         small + middle > large;
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
triangle(100, 100, 100);  // "equilateral"
triangle(1000, 500, 600)  // "scalene"
triangle(5000, 3000, 3000)  // "isosceles"