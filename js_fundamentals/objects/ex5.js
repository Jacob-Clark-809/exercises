const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1': 'd', e: 5]

/*
Line 3 outputs 'a' as that is the value stored at index 0.
Line 4 outputs undefined as there is no property with key '-1' defined on
myArray.

Line 6 assigns the value 'd' to a new property with key '-1'.
Line 7 assigns the value 5 to a new property with key 'e'.
Line 8 assings the value 'f' to index 3.

Line 10 outputs the value of property '-1' which is 'd'.
Line 11 outputs the value of property 'e' which is 5.
Line 12 outputs the whole array with indexed items appearing first with no
key and then key value pairs appearing in the order they were added to the
array.
*/
