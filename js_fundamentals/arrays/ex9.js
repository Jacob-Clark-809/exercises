function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

/*
The above comparisons both return false because when using the ===
operator on arrays (and also objects) the program will check to see if the
two operands are the exact same object, i.e. they occupy the same space
in memory. In this case the oddities function returns a new array and
so the comparison returns false even though the two operands contain the
same values.
*/