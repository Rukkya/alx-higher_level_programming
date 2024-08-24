#!/usr/bin/node

// Function to add two integers
function add (a, b) {
  return a + b;
}

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Extract and convert arguments to integers
const num1 = parseInt(args[0], 10);
const num2 = parseInt(args[1], 10);

// Print the result of the addition
console.log(add(num1, num2));
