const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);


/*
This code will something like '{ function: firstName } { function: lastName }'
This is because on line 10 we do not call the methods of the person object.
Without the brackets () we are simply returned the function itself and not
the result of calling the function.

Correction: this actually returns the string representation of the function
e.g. firstName() {
  return 'Victor';
};
This is because it is converted to a string through string interpolation with
``.
*/