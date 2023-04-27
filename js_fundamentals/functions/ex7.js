let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/*
The above code will output 7. This is because on line 4 it is the local
variable a that we are reassigning not the gloabl variable a declared on
line 1. Because of variable shadowing we are unable to access the global a
from within the function.
*/