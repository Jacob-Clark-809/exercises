let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

/*
The above code logs: 40, 45.

In JavaScript when we define a function a closure for that function is
also created. Within the closure are references to any variables that the
function may need to run that are within scope at the moment of definition.

In this case the totalPayable closure will contain a reference to the global
variable startingBalance. Therefore, when we call totalPayable later it will
know where to look to find this value. The important thing here is that the
closure contains a reference to the variable and not just the value itself.
Therfore, when we change to value of startingBalance on line 9 and line 12
this change is present when we then call the totalPayable function on the
next line.
*/