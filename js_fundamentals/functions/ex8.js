let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/*
This will output [1, 2, 10].

This is because here we are passing in an object to the function which will
be done by reference and not by value. Therefore, within the function the
local variable b and the global variable a reference the same object in
memory, i.e. the array declared on line 1.

We then mutate that array on line 4 with the square bracket notation and
reassing the value of one of its elements. Because this is a mutating
operation the object referenced by a is also changed. We see this change
reflected in the output from line 8.
*/