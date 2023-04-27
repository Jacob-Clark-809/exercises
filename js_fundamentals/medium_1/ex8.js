function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

/*
The above code will not work as expected. This is because the variable sum
declared on line 7 is not provided an intitial value so will take a value of
undefined. Therefore, on line 10 when we attempt sum = sum + numbers[i]
javascript will coerce the value undefined into a number which will evaluate
as NaN. Anyfurther mathematical operations on NaN will still produce NaN and
this will always be the end result.

Regardless, the total function also does not have an explicit return and so
will return undefined which will be used on line 2 and produce another NaN
result.
*/