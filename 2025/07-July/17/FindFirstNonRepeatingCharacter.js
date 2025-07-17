// Find First Non-Repeating Character in a String
// 🧩 Problem:
// Write a function to find the first character in a string that doesn’t repeat.

function findFirstNonRepeatingCharacter(str) {
  const charCount = {}; 
    for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1; // Count occurrences of each character    
    }
    for (const char of str) {
    if (charCount[char] === 1) { // Check for first non-repeating character
      return char;
    }
    }
  return null; // Return null if no non-repeating character is found
}   

console.log(findFirstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(findFirstNonRepeatingCharacter("racecar")); // Output: "e"
console.log(findFirstNonRepeatingCharacter("aabbcc")); // Output: null (no non-repeating character)




function firstNonRepeatingChar(str) {
  const freq = new Map();

  // First pass: count characters
  for (const char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Second pass: find first non-repeating
  for (const char of str) {
    if (freq.get(char) === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// ✅ Example usage
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
