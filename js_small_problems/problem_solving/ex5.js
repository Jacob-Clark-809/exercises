/*
Input: - string text to encrypt and string key to use for encryption
Output: - encrypted text

Rules:
- Each letter of the key determines the rotation amount
- If the key is shorter than the text then we repeat the key as many times
as necessary
- Only encrypt alphabetic characters and do not us a key character up on a
non-alphabetic character
- Preserve all punctuation in the final string

Data types: - two string inputs
            - array of all letters where index corresponds with rotation
            - array of all characters in text to encyrpt
            - array of all rotation amounts of the same length of character
            array and with each characters corresponding rotation
            - output from rejoining mapped characer array

Algorithm:
- Repeat keyword until it is as long as text to encrypt
- Split long keyword to array of chars
- Map keyword array from letter to their rotation value
- To do that simply calculate lowercase ascii value and subtract
'a'.charCodeAt(0)
- Split text into character array
- Iterate through character array and shift elements from rotation array
into a new roation value array if current char is letter, otherwise push 0 to
rotation value array
- Map character array to encrypted character array using encryptChar and
the corresponding rotation value from rotation value array
- Join encrypted character array and then return that value
*/

function vigenereEncrypt(text, keyword) {
  keyword = keyword.repeat(Math.ceil(text.length / keyword.length));
  let keywordValues = keyword.toLowerCase()
                             .split('')
                             .map(char => {
                               return char.charCodeAt(0) - 'a'.charCodeAt(0);
                             });

  let textChars = text.split('');
  let rotationArray = [];
  textChars.forEach(char => {
    if (char.match(/[a-z]/i)) {
      rotationArray.push(keywordValues.shift());
    } else {
      rotationArray.push(0);
    }
  });

  let encryptedChars = textChars.map((char, index) => {
    return encryptChar(char, rotationArray[index]);
  });


  console.log(encryptedChars.join(''));
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

vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'); // Bmnxmtpeqw dhz'x gh ar pbldal!
vigenereEncrypt("Pineapples don't go on pizzas!", 'A'); // Pineapples don't go on pizzas!
vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa'); // Pineapples don't go on pizzas!
vigenereEncrypt("Pineapples don't go on pizzas!", 'cab'); // Riogaqrlfu dpp't hq oo riabat!
vigenereEncrypt("Dog", "Rabbit"); // Uoh
