/*
Input - string
Output - Object with keys lowercase, uppercase and neither containing the
perecentage of characters as described to two decimal points

Data types: - string input
            - number count of uppercase, lowercase, neither
            - object return value

Algorithm:
- Match on all lowercase and count result
- Match on all uppercase and count result
- Match on neither and count result
- Divide all by string length and multiply by 100 to calculate percentage
- * 100 again, then round to nearest integer, then divide by 100 to get
2 d.p
- Return object with appropriate figures
*/

function letterPercentages(string) {
  let lowercaseCount = (string.match(/[a-z]/g) || []).length;
  let uppercaseCount = (string.match(/[A-Z]/g) || []).length;
  let neitherCount = (string.match(/[^a-z]/gi) || []).length;

  let lowercase = (lowercaseCount / string.length) * 100;
  let uppercase = (uppercaseCount / string.length) * 100;
  let neither = (neitherCount /  string.length) * 100;

  return {
    lowercase: twoDecimalPlaces(lowercase),
    uppercase: twoDecimalPlaces(uppercase),
    neither: twoDecimalPlaces(neither),
  }
}

function twoDecimalPlaces(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('a'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

console.log(letterPercentages('+'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
