function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

/*
The array assigned to array on line 2 will not be garbage collected after
the invocation on line 11. This is because the variable pushIt still
references the function returned by makeArrays and this function has array
in its closure.
*/