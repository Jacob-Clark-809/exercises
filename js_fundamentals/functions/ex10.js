logValue();

function logValue() {
  console.log('Hello, world!');
}

/*
This program will log 'Hello, word!'.

As with variables functions are also hoisted to the top of their scope.
However, in the case of function declarations the body of the function is
also hoisted to the top. Therefore, when we call logValue() on line 1 the
program not only knows that it exists but can also access it's body and
execute the console.log() command on line 4.
*/