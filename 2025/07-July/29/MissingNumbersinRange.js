// Find Missing Numbers in a Range
// 🧩 Problem:
// You’re given a sorted array of integers within a range. Find the missing numbers.

const numbers = [1, 2, 4, 6, 7, 9];
const start = 1;
const end = 10;
function findMissingNumbers(numbers, start, end) {
  const missingNumbers = [];
  const numberSet = new Set(numbers); // Convert array to set for O(1) lookups
  console.log("numberSet :", numberSet); // Debugging line to check the number set

  for (let i = start; i <= end; i++) {
    if (!numberSet.has(i)) { // Check if number is missing
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}   
console.log(findMissingNumbers(numbers, start, end)); // Output: [3, 5, 8, 10]
console.log(findMissingNumbers([5, 6, 8, 10], 1, 10)); // Output: [1, 2, 3, 4, 7, 9]





function findMissingNumbers1(numbers, start, end) {
  const missingNumbers = [];
  const numberSet = numbers; // Convert array to set for O(1) lookups
  console.log("numberSet1 :", numberSet); // Debugging line to check the number set

  for (let i = start; i <= end; i++) {
    if (!numberSet.includes(i)) { // Check if number is missing
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}   
console.log(findMissingNumbers1(numbers, start, end)); // Output: [3, 5, 8, 10]
console.log(findMissingNumbers1([5, 6, 8, 10], 1, 10)); // Output: [1, 2, 3, 4, 7, 9]