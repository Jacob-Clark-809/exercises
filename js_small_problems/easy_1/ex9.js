function multisum(max) {
  let total = 0;
  for (let index = 1; index <= max; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      total += index;
    }
  }

  console.log(total);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
