#!/usr/bin/node

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Extract the first argument and attempt to convert it to an integer
const size = Number(args[0]);

// Check if the size is a valid positive integer
if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  // Print the square
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
