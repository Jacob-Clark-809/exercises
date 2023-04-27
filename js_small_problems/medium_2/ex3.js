function triangle(a, b, c) {
  if (!validTriangle(a, b, c)) {
    console.log("invlalid");
  } else if (a === 90 || b === 90 || c === 90) {
    console.log("right");
  } else if (a < 90 && b < 90 && c < 90) {
    console.log("acute");
  } else {
    console.log("obtuse");
  }
}

function validTriangle(a, b, c) {
  return a + b + c === 180 &&
         a > 0 &&
         b > 0 &&
         c > 0;
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"