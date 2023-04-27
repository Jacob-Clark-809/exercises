const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3 because only indexed properties count towards length
console.log(Object.keys(array).length); // 4 because all properties are returned by Object.keys

array[-2] = 'Watermelon';
console.log(array.length); // 3 as before
console.log(Object.keys(array).length); // 5 as before