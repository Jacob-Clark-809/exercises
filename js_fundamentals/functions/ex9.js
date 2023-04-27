console.log(a);

var a = 1;

/*
This will log undefined.

Because of variable hoisting rules the declaration of variable a is moved
to the top of its scope. However, it is only given the default value of
undefined until the point in the program where it is explicitly initialized
to some value. This doesn't happen until line 3 so when we log variable a
on line 1 we get a value of undefined.
*/