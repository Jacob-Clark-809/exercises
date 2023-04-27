function sum(num) {
  console.log(
    String(num)
      .split('')
      .map(Number)
      .reduce((sum, current) => sum + current));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45