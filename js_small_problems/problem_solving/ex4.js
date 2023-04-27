/*
Input: - text to encrypt, and number key to rotate by
Output: Encrypted text

Rules: - Rotate each letter by the number of positions in the alphabet
         described by key
       - e.g. 'A', 3 => 'D'
       - Capital letters stay as capitals and same for lower case
       - Any other character is unchanged

Data types: - String to encode, number as key
            - Split string into character array
            - Map characters to new array
            - Join mapped array and return as string

Algorithm:
- Split string into characters array
- Map by passing each element to encryptChar method
- Rejoin new array and return string

encryptChar:
- If not letter return as is
- Otherwise make note of maximum ASCII value the encoded character can take,
in the case of lower chars that is 'z'.charCodeAt[0], for upper that is
'Z'.charCodeAt[0]
- Increase ASCII value of char by key amount
- If new ASCII > max ASCII then decrease by 26. Repeat in necessary.
- Conver ASCII back to char and return
*/

function caesarEncrypt(text, key) {
  console.log(
    text.split('').map(char => encryptChar(char, key)).join('')
  );
}

function encryptChar(char, key) {
  if (!char.match(/[a-z]/i)) {
    return char;
  }

  let maxCode = char.match(/[A-Z]/) ? 'Z'.charCodeAt(0) : 'z'.charCodeAt(0);
  let newCode = char.charCodeAt(0) + key;
  while (newCode > maxCode) {
    newCode -= 26;
  }

  return String.fromCharCode(newCode);
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"