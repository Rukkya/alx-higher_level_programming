#!/usr/bin/node

// Convert command-line arguments to integers
const args = process.argv.slice(2).map(arg => parseInt(arg, 10));

// Function to find the second biggest integer
function findSecondBiggest (numbers) {
  // Remove duplicates by converting the array to a Set, then back to an array
  const uniqueNumbers = [...new Set(numbers)];
  // Sort the unique numbers in descending order
  uniqueNumbers.sort((a, b) => b - a);
  // Return the second largest number or 0 if there are less than 2 unique numbers
  return uniqueNumbers.length < 2 ? 0 : uniqueNumbers[1];
}

// Get the second biggest integer or 0 if applicable
const result = args.length < 2 ? 0 : findSecondBiggest(args);

// Print the result
console.log(result);
