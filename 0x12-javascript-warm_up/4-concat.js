#!/usr/bin/node

// Get command-line arguments (excluding the first two default arguments)
const args = process.argv.slice(2);

// Extract arguments with default values
const arg1 = args[0] !== undefined ? args[0] : 'undefined';
const arg2 = args[1] !== undefined ? args[1] : 'undefined';

// Print the output in the specified format
console.log(`${arg1} is ${arg2}`);
