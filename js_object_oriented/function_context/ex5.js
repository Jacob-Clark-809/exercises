function myBind(func, context, ...fixedArgs) {
  return function(...args) {
    return func.call(context, ...fixedArgs, ...args);
  };
}

function add(a, b) {
  return a + b;
}

let add10 = myBind(add, this, 10);
console.log(add10(50));
