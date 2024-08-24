#!/usr/bin/node
// Function that increments a number and then calls theFunction with the new value
function addMeMaybe (number, theFunction) {
  // Ensure that number is a number and theFunction is a function
  if (typeof number === 'number' && typeof theFunction === 'function') {
    theFunction(number + 1);
  }
}

// Export the function so it can be required in other scripts
module.exports = { addMeMaybe };
