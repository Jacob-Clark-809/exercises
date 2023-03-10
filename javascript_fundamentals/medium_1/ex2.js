let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// This code will not work as expected. When i = 0 the if statement block
//  on line 4 will be entered and 0 will be output. However, in this
// block i is not iterated so it will retain the same value on the next loop
// and the same will happen over and over indefinitely.