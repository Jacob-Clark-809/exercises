var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*
This will log 'This is global' because variable declared in the outer scope
of a function are accessible within the function. Therefore, our program
can find myVar on line 4 output its value.
*/