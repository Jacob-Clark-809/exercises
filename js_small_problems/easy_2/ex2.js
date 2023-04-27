let logInBox = function outputStringSurroundedByBox(string) {
  let topOrBottom = '+-';
  let middle = '| ';
  for (let index = 0; index < string.length; index += 1) {
    topOrBottom += '-';
    middle += ' ';
  }
  topOrBottom += '-+';
  middle += ' |';

  console.log(topOrBottom);
  console.log(middle);
  console.log('| ' + string + ' |');
  console.log(middle);
  console.log(topOrBottom);
};

logInBox('To boldly go where no one has gone before.');
logInBox((''));
