#!/usr/bin/node
// Define the converter function
exports.converter = function (base) {
  // Return a function that converts a number to the specified base
  return function (number) {
    // Recursive helper function for base conversion
    function convert (n) {
      // Define digits as a string
      const digits = '0123456789ABCDEF';
      // Base case: when n is 0
      if (n === 0) return '';
      // Recursive case: process each digit
      return convert(Math.floor(n / base)) + digits[n % base];
    }

    // Special case for number 0
    return number === 0 ? '0' : convert(number);
  };
};
