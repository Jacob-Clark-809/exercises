var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

/*
This code after hoisting is the equivalent of:

function logValue() {
  console.log('Hello, world!');
}

logValue = 'foo';

console.log(typeof logValue);

We can see that after hoisting it is as if the function variable logValue is
reassigned one line 1 of the original code to the value 'foo'. Therefore,
when we log the type of logValue we get 'string'.
*/