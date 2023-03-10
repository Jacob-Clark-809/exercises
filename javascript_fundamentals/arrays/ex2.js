// method 1:

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// method 2:

let myArray2 = [1, 2, 3, 4];
const myOtherArray2 = [];
for (let index = 0; index < myArray2.length; index += 1) {
  myOtherArray2.push(myArray2[index]);
}
