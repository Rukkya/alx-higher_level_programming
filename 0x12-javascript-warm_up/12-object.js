#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

// Replace the value of the property `value` in `myObject` from 12 to 89
myObject.value = 89;

console.log(myObject);
