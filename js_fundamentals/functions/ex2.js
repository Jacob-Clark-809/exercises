var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*
The above code will log 'This is local'. This is because when we try to
access myVar on line 5 the program will first search for a variable within
it's local scope. It finds the variable declared on line 4. This local
variable shadows the global variable with value 'This is global' and prevents
access to it. It is important to note that they are not the same variable
although they do share the same name. They have different scopes and values.
*/