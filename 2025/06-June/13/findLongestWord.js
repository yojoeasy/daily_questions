function findLongestWord(str){
    let eachWord = str.split(" ");
    let maxLength = 0;
    let longestWord = "";
    for (let i = 0; i < eachWord.length; i++) {
        if (eachWord[i].length > maxLength) {
            maxLength = eachWord[i].length;
            longestWord = eachWord[i];
        }
    }
    return longestWord;
    
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//////////////////////////////////////

function findLongestWord(str) {
    return str.split(" ").reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}

/////////////////////////////////////////////////////////

function findLongestWord(str) {
    let longest = "";
    for (let word of str.split(" ")) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}


////////////////////////////////////////////////

function findLongestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
}


//////////////////////////////////////////////////////

function findLongestWord(str) {
    let words = str.split(" ");
    let maxLength = Math.max(...words.map(word => word.length));
    return words.find(word => word.length === maxLength);
}


//////////////////////////////////////////////

function findLongestWord(str) {
    const words = str.split(" ");
    if (words.length === 1) return words[0];
    const [first, ...rest] = words;
    const longestOfRest = findLongestWord(rest.join(" "));
    return first.length >= longestOfRest.length ? first : longestOfRest;
}


///////////////////////////////////////////

function findLongestWord(str) {
    const words = str.split(" ");
    if (words.length === 1) return words[0];
    const [first, ...rest] = words;
    const longestOfRest = findLongestWord(rest.join(" "));
    return first.length >= longestOfRest.length ? first : longestOfRest;
}

//////////////////////////////////////////////////////

const findLongestWord = str => str.split(" ").reduce((a, b) => b.length > a.length ? b : a);
