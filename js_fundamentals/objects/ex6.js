const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

/*
This function will not return 5 as expected because the for loop from line 8
to line 10 includes all array indexes and properties but the .length call
on line 12 only returns the number of indexes which is 2.

Therfore, the function will return 20 / 2 which is 10.
*/