// Remove All Special Characters from a String
// 🧩 Problem:
// Write a function to clean up a string by removing all special characters except spaces and letters.

function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z\s]/g, "");
}

console.log(removeSpecialCharacters("Hello, World! 123")); // "Hello World "
console.log(removeSpecialCharacters("JavaScript @2025 #Coding!")); // "JavaScript Coding"
console.log(removeSpecialCharacters("Hello!! Yogesh@@@ $$$How are*** you??")); // "Hello Yogesh How are you"