/*
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    });
  },
};

The above code does not work as expected because we try to access the
object franchise through the use of the this keyword whilst using the map
method.

The anonymous function passed into the map method as an argument will have
a execution context of the gloabl object, this is because it will be invoked
as a function within the map method. Hence, this.name will not return the
desired result.

We can fix this as show below, taking advantage of JavaScripts lexical
scoping rules:
*/

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let that = this;
    return [1, 2, 3].map(function(number) {
      return `${that.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());