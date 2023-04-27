function twice(toDouble) {
  if (doubleNumber(toDouble)) {
    console.log(toDouble);
  } else {
    console.log(toDouble * 2);
  }
}

function doubleNumber(num) {
  let stringNum = String(num);
  if (stringNum.length % 2 === 1) {
    return false;
  }

  let firstHalf = stringNum.slice(0, stringNum.length / 2);
  let secondHalf = stringNum.slice(stringNum.length / 2);

  return firstHalf === secondHalf;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676