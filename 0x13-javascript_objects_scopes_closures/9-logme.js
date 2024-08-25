#!/usr/bin/node
// Initialize a counter to keep track of the number of calls
let count = 0;

// Define the logMe function
exports.logMe = function (item) {
  // Print the number of arguments already printed and the current argument value
  console.log(`${count}: ${item}`);
  // Increment the counter for the next call
  count++;
};
