function shortLongShort(string1, string2) {
  let small = string1.length < string2.length ? string1 : string2;
  let big = string1.length >= string2.length ? string1 : string2;

  return small + big + small;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"