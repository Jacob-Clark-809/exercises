function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

/*
The above code does not work because arrays do not support negative indexes
in order to access the elements backwards.

Instead we could could .reverse on the array and try to access the second
element which would be at index 1.
*/