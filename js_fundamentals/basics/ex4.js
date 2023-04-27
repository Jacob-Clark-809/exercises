const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);

// outputs 'Bob Bob' because prototype.toUpperCase() is non-mutating. This
// is because strings are immutable so have no mutating methods.
