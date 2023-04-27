const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
The above code will log NaN to the console. This is because when we set the
fullName property we try to access this. Since fullName is not implemented
as a method the value of this is set to the global object and so
this.firstName and this.lastName both evaluate to undefined. Then
undefined + undefined evaluates to NaN because of JavaScript type conversion.

Key Point: Anywhere outside a function the this keyword is bound to the
global object. If it is inside a function, then its binding depends on how
it is invoked.
*/