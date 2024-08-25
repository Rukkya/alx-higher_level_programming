#!/usr/bin/node
// Import the Rectangle class
const Rectangle = require('./4-rectangle');

// Define the Square class that extends Rectangle
class Square extends Rectangle {
  // Constructor that initializes the size
  constructor (size) {
    // Call the constructor of Rectangle with width and height as size
    super(size, size);
  }
}

// Export the Square class
module.exports = Square;
