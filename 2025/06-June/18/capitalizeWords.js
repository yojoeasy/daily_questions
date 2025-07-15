// Write a function capitalizeWords(str) that capitalizes the first letter of every word in a string.

function capitalizeWords(str){
     return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
} 
console.log(capitalizeWords("i love javascript")) // "I Love JavaScript"

/////////////////////////////////////////////////////////////////////////////

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("i love javascript")); // "I Love JavaScript"

///////////////////////////////////////////////////////////////////////////////

function capitalizeWords(str) {
    const words = str.split(" ");
    let capitalized = [];
    for (let word of words) {
        capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return capitalized.join(" ");
}

console.log(capitalizeWords("i love javascript")); // "I Love JavaScript"

/////////////////////////////////////////////////////////////////////

function capitalizeWords(str) {
    if (!str) return "";
    
    const [firstWord, ...restWords] = str.split(" ");
    const capitalizedFirst = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    
    return restWords.length > 0
        ? capitalizedFirst + " " + capitalizeWords(restWords.join(" "))
        : capitalizedFirst;
}

console.log(capitalizeWords("i love javascript")); // "I Love JavaScript"

