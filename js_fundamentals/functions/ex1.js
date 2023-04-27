var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
The above will log 'This is global'. This is because the myVar variable
declared and initialized on line 4 is a local variable that shadows or
overrides the global myVar from line 1. Any changes or assignments to the
local variable do not affect the global. On line 8 only the global variable
is in scope and so it is 'This is global' that we output.
*/