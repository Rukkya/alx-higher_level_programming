#!/usr/bin/node
// Function to reverse a list without using the built-in reverse method
exports.esrever = function (list) {
  // Create a new list to store the reversed elements
  const reversedList = [];
  // Iterate over the original list in reverse order
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  // Return the reversed list
  return reversedList;
};
