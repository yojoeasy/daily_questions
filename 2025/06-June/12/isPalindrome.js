function isPalindrome(str){
    str = str.toLowerCase();
    let str1= str.split('').reverse().join(''); 

    if(str == str1) return true;
    else return false;
}
console.log(isPalindrome("A man a plan a canal Panama")); 
console.log(isPalindrome("Naman")); 

/////////////////////////////////////////////////////////////////////////

function isPalindromeLoop(str) {
    str = str.toLowerCase();
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindromeLoop("A man a plan a canal Panama")); 
console.log(isPalindromeLoop("Naman")); 

////////////////////////////////////////////////////////////////////////////

function isPalindromeClean(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}
console.log(isPalindromeClean("A man a plan a canal Panama")); 
console.log(isPalindromeClean("Naman")); 

///////////////////////////////////////////////////////////////////////////////

function isPalindromeRecursive(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindromeRecursive(str.slice(1, -1));
}
console.log(isPalindromeRecursive("A man a plan a canal Panama"));
console.log(isPalindromeRecursive("Naman"));

////////////////////////////////////////////////////////////////////////////////

function isPalindromeEvery(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}
console.log(isPalindromeEvery("A man a plan a canal Panama"));
console.log(isPalindromeEvery("Naman"));