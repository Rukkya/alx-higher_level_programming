#!/usr/bin/node
// Function that executes another function x times
function callMeMoby (x, theFunction) {
  // Ensure x is a positive integer and theFunction is a function
  if (typeof x === 'number' && x > 0 && typeof theFunction === 'function') {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
}

// Export the function so it can be required in other scripts
module.exports = { callMeMoby };
