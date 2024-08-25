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
      // Create an empty object if validation fails
      // No attributes will be set
    }
  }
}

// Export the Rectangle class
module.exports = Rectangle;
