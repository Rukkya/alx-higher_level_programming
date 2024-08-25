#!/usr/bin/node
// Function to count the occurrences of searchElement in list
exports.nbOccurences = function (list, searchElement) {
  // Use the filter method to count occurrences
  return list.filter(element => element === searchElement).length;
};
