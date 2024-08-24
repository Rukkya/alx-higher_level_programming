#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12,

  // Add the incr function to myObject
  incr: function () {
    this.value += 1;
  }
};

console.log(myObject);

// Call incr function and print the updated object
myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
