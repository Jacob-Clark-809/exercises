function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...args) {
  let totalTime = args.length * 2;

  let count = 0;
  let interval = setInterval(() => {
    count += 1;
    console.log(count);
    if (count >= totalTime) clearInterval(interval);
  }, 1000);

  args.forEach((callback) => {
    let timeToCall = Math.floor(Math.random() * totalTime) * 1000;
    setTimeout(() => callback(), timeToCall);
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
