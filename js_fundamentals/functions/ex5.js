function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/*
The above code will ouput 'This is global'. When line 2 is run the program
will look for a variable with name myVar first in the local scope and then
in the outer global scope. When it cannot find such a variable it instead
initializes a new variable myVar. Because this variable has not been
declared with a let, var, or const keyword it is automatically given global
scope and can be accessed anywhere within the program. Therefore, we can
access that variable on line 6 and log it's value.

To be more precise on line 2 JavaScript binds myVar to be a "property" of
the global object.
*/