function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

/*
The above code uses the arguments object which contains all the arguemnts
passed into a function.
We also make use of a ternary operator.
*/