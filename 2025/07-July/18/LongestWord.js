// Find the Longest Word in a Sentence
// 🧩 Problem:
// Write a function to find the longest word in a given sentence.

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
console.log(findLongestWord("This is a JavaScript challenge")); // "JavaScript"