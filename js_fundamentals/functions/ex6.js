let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/*
The above code will output 7. This is because the value of a is a number
primitive so when this is passed to the funciton myValue it is passed by
value and not by reference. Therefore, any changes to the local variable
b in the function could not affect a. Regardless, on line 4 we do variable
reassignment which never affects the value of what was originally stored.
*/