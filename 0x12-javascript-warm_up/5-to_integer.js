#!/usr/bin/node

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Extract the first argument
const arg1 = args[0];

// Convert the argument to an integer
const num = Number(arg1);

// Check if the conversion was successful
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}
