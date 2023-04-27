function buyFruit(list) {
  let result = [];
  list.forEach(([ fruit, amount ]) => {
    for (let index = 0; index < amount; index += 1) {
      result.push(fruit);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]