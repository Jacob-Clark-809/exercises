var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
The above code will log 'This is local'. The code on line 4 acts as variable
reassignment of the global myVar variable declared on line 1. The program
will first try to locate a local variable myVar and when it cannot find one
it will search in its outer scope. There it will find the variable declared
on line 1 and alter it's value. We then log that value on lin 8.
*/