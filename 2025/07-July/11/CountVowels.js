// Count Vowels in a String
// 🧩 Problem:
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string (case-insensitive).

function countVowel(str){
    let count = 0;
    str = str.toLowerCase();
    for(i=0 ; i < str.length; i++){
        if(str[i] =='a' || str[i] =='e' || str[i] =='i' || str[i] =='o' || str[i] =='u'){
            count++
        }
    }
    return count;
}
console.log(countVowel("Yogesh Joshi"));


function countVowel1(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowel1("Yogesh Joshi"));


function countVowel2(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) count++;
    }
    return count;
}
console.log(countVowel2("Yogesh Joshi")); // 4
console.log(countVowel2("AEIOUaeiou"));   // 10
console.log(countVowel2("xyz123"));       // 0
