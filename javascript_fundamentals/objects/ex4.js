const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2); // '456'

/*
On line 1 to line 5 we declare an object literal. To begin with it has
properties 'prop1', 'prop2', and 'prop 3'. Note properties are always
stored as strings despite the notation suggesting otherwise.

On line 8 we change the existing 'prop2' property to have value '456'.
On line 9 when we call myObject[prop2] the prop2 in brackets gets evaluated
and replaced with the value of the variable prop2 declared on line 7 - '456'.
Hence, we have added a new property '456' to the object with value '678'.

On line 11 we are accessing myObject[prop2] which as before evaluates to
myObject['456'] and so returns '678'.

On line 12 we use dot notation instead which does not support expressions
after the dot. Instead prop2 is converted to the string 'prop2' and so we
access that property instead which has value '456'.
*/
