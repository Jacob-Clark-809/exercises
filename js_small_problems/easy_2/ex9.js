function cleanUp(string) {
  console.log(string.replaceAll(/[^a-zA-Z]+/g, ' '));
}

cleanUp("---what's my +*& line?");    // " what s my line "