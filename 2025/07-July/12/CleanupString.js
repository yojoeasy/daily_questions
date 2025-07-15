// Clean Up a User Input String
// 🧩 Problem:
// You get user-entered data that may have extra spaces and punctuation. Write a function to clean it up by:
// Removing extra spaces
// Removing punctuation (like ., ,, !, etc.)
// Converting everything to lowercase

function clean(str) {
  return str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]'"?<>]/g, '') // remove punctuation
    .replace(/\s+/g, ' ')  // replace multiple spaces with one
    .trim();               // remove leading/trailing spaces
}
console.log(clean("   Hello,  Yogesh!  How are you??  ")); // Output: "hello yogesh how are you"
console.log(clean("  Hello,  WORLD! Welcome...  "));