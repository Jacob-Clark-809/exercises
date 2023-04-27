Object.prototype.name = 'Object.prototype';

Object.prototype.ancestors = function() {
  let result = [];
  let ancestor = Object.getPrototypeOf(this);
  while (ancestor) {
    result.push(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  }

  console.log(result);
};

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']