#!/usr/bin/node
// Define the Rectangle class
class Rectangle {
  // Constructor that initializes width and height
  constructor (w, h) {
    // Validate w and h
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // If validation fails, create an empty object
      // No attributes will be set
    }
  }

  // Method to print the rectangle using the character 'X'
  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }
}

// Export the Rectangle class
module.exports = Rectangle;
