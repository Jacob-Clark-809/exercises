let readlineSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length =  readlineSync.prompt();
console.log('Enter the width of the room in meters:');
let width = readlineSync.prompt();

let areaMeters = length * width;
let areaFeet = areaMeters * 10.7639;
console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters \
(${areaFeet.toFixed(2)} square feet).`);