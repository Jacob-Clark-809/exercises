/*
Input - Number n representing the number of lights and number of passes
Output - Array of numbers representing which lights are on after passes

Rules - All ligths are originally off
      - Round 1 switch all lights on
      - Round 2 toggle 2, 4, 6, ...
      - Round 3 toggle 3, 6, 9, ...
      - Round n toggle all lights such that lightNum % n === 0

Data types: - Array of booleans representing the lights. False is off, true
              is on
            - Input integer representing length of array of lights
            - Output array is only lights that are left on

Algorithm:
- Generate array of booleans, length n set to false
- Iterate through the array n times
- On each pass switch the boolean value of elements with index such that
(index + 1) % currentPass === 0
- Iterate through final array adding (index + 1) of any element with value
true.
- Return that array
*/

function lightsOn(switches) {
  let lights = [];
  for (let index = 0; index < switches; index += 1) {
    lights.push(false);
  }

  for (let currentPass = 1; currentPass <= switches; currentPass += 1) {
    lights = lights.map((light, index) => {
      if ((index + 1) % currentPass === 0) {
        return !light;
      } else {
        return light;
      }
    });
  }

  let leftOn = [];
  lights.forEach((light, index) => {
    if (light) {
      leftOn.push(index + 1);
    }
  });

  console.log(leftOn);
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]