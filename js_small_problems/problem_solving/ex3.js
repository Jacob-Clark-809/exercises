function isBlockWord(word) {
  let spellingBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
                        ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'],
                        ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
                        ['Z', 'M']];

  for (let index = 0; index < word.length; index += 1) {
    let newSpellingBlocks = spellingBlocks.filter(block => {
      return !block.includes(word[index].toUpperCase());
    });

    if (newSpellingBlocks.length === spellingBlocks.length) {
      return false;
    }
    spellingBlocks = newSpellingBlocks;
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('bAtCh'));       // true
