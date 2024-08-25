#!/usr/bin/node
// Define the converter function
exports.converter = function (base) {
  // Return a function that converts a number to the specified base
  return function (number) {
    // Helper function for conversion using recursion
    function convert (n) {
      if (n === 0) return '';
      const digits = '0123456789ABCDEF';
      return convert(Math.floor(n / base)) + digits[n % base];
    }

    // Handle edge case when number is 0
    if (number === 0) return '0';
    return convert(number);
  };
};
