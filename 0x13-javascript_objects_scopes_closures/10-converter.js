#!/usr/bin/node
// Define the converter function
exports.converter = function (base) {
  // Return a function that converts a number to the specified base
  return function (number) {
    // Recursive function for base conversion
    function convert (n) {
      // Define the digits directly inside the function call
      if (n < base) return '0123456789ABCDEF'[n];
      return convert(Math.floor(n / base)) + '0123456789ABCDEF'[n % base];
    }
    // Handle the special case for number 0
    return number === 0 ? '0' : convert(number);
  };
};
