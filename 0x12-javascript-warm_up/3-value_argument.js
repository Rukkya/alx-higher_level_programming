#!/usr/bin/node

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Check if there are any arguments
if (args[0] === undefined) {
  console.log('No argument');
} else {
  console.log(args[0]);
}
