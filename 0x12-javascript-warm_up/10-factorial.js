#!/usr/bin/node

// Recursive function to compute factorial
function factorial (n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Extract and convert the argument to an integer
const num = parseInt(args[0], 10);

// Check if the number is NaN or negative
const result = isNaN(num) || num < 0 ? 1 : factorial(num);

// Print the result
console.log(result);
