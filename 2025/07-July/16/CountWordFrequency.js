// Count Word Frequency in a Sentence
// 🧩 Problem:
// You have a sentence. Write a function that counts how many times each word appears.

function countWordFrequency(sentence) {
    const words = sentence.toLowerCase().match(/\b\w+\b/g);
    const frequency = {}; 
    for (let word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
    }
    return frequency;
}   
console.log(countWordFrequency("Hello world! Hello everyone. World is big.")); // { hello: 2, world: 2, everyone: 1, is: 1, big: 1 }


function countWordFrequency1(str) {
    const words = str.toLowerCase().split(" ");
    const frequency = {};
    for (let word of words) {
        if(frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }
    return frequency;
}
console.log(countWordFrequency1("this is a test this is only a test")); // { this: 2, is: 2, a: 2, test: 2, only: 1 }