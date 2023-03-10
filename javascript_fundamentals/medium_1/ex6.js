function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
This code logs 'debugging'. This is because we call the funciton debugIt on
line 10. This function defines a constant variable status with value
'debugging' and then defines a local function logger() which logs the value
of the status variable. It has access to this variable because status is
declared in the outer scope. The debugIt function then calls logger and so
'debugging' is logged.
*/