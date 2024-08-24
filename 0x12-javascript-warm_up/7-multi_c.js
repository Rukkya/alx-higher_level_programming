#!/usr/bin/node

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Extract the first argument and attempt to convert it to an integer
const x = Number(args[0]);

// Use a single console.log for the error message and a loop to print the message
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
