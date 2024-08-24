#!/usr/bin/node
// Get the number of arguments passed to the script (excluding the first two default arguments)
const args = process.argv.slice(2); // `process.argv` contains the command-line arguments

if (args.length === 0) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
