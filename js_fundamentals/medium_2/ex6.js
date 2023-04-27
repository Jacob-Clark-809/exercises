const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3 - The  highest index in the array is 2.

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty>]
// When extending the length as above empty spots are inserted, these have
// no value but would return undefined if accessed.
console.log(languages.length); // 4 because of line 5

languages.length = 1;
console.log(languages); // ['JavaScript'] when reducing length elements are
// removed from the back of the array.
console.log(languages.length); // 1 as on line 11.

languages.length = 3;
console.log(languages); // ['Javascript', <2 empty>] old elements are not
// reinstated when increasing the length.
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['Javascript', <1 empty>, 'Python'] when adding
// and element beyond the length of the array it is placed in the proper
// index with empty cells in between.
console.log(languages[1]); // undefined. All empty cells return undefined
// when accessed. However, the do not actually hold any value at all.
console.log(languages.length); //3 as the highest index is 2.