function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(caller) {
  return function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

const doubler2 = makeDoubler('Victor');
doubler2(5);                             // returns 10
// logs:
// This function was called by Victor.