const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
This does not work as expected because the === operator will only return
true when comparing two objects if the two objects are the exact same object.
That is, they occupy the same space in memory and mutating one of the
operands will affect the value of the other.
*/

// Refactored code:

let keys = Object.keys(person);
let equal = true;
for (let index = 0; index < keys.length; index += 1) {
  if (!(person[keys[index]] === otherPerson[keys[index]])) {
    equal = false;
    break;
  }
}

console.log(equal);