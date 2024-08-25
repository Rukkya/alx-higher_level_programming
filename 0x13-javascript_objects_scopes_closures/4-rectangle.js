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

  // Method to rotate the rectangle by exchanging width and height
  rotate () {
    if (this.width && this.height) {
      [this.width, this.height] = [this.height, this.width];
    }
  }

  // Method to double the width and height of the rectangle
  double () {
    if (this.width && this.height) {
      this.width *= 2;
      this.height *= 2;
    }
  }
}

// Export the Rectangle class
module.exports = Rectangle;
