
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}


// Above logs: 'The total value is 15'.


function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
/*
// Above logs: 'The total value is 'NaN'. On line 18 the counter variable
refers to the function declared above. This is coerced into a number by the
* operator which returns NaN. Also the variable rate on this line has the
value of undefined because the variable declaration is hoisted to the top
but not the assigned value. Hence it has value undefined.
*/

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));


/*
This outputs: 'The total value is 15'.

This is because the function definition from line 33 to line 35 does not
override the variable declaration and initialization on line 30. The reason
for this is hoisting rules which place the funciton declaration above the
variable declaration and so the function gets overrided.
*/

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/*
The above will result in an error. When we declare a variable with let
javascript does not allow us to declare another with the same name.
Here we implicitly attempt to define a variable counter when we declare
the function on line 53 and so this line will throw an error.

It is important to note that the syntax error here will be picked up
before hoisting occurs, so it is the function definition that throws the
error and not the let call which would appear after after hoisting.
*/