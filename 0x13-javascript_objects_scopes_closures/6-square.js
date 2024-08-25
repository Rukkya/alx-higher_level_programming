#!/usr/bin/node
// Import the Square class from 5-square.js
const Square = require('./5-square');

// Define a new Square class that extends the imported Square class
class Square2 extends Square {
  // Method to print the square using the character c
  charPrint (c) {
    // Use 'X' if c is undefined
    const char = c || 'X';

    // Print the square using the specified character
    for (let i = 0; i < this.height; i++) {
      console.log(char.repeat(this.width));
    }
  }
}

// Export the new Square2 class
module.exports = Square2;
