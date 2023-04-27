const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// This code produces an error because it interprets a on line 9 as a
// vairable. Since this variable has not been declared we get a Reference
// error.