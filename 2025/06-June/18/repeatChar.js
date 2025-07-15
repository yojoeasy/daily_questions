// Write a function repeatChar(char, n) that repeats a given character char, n times.
function repeatChar(char, n){
    return char.repeat(n);
}

console.log(repeatChar("*", 5)) // "*****"
console.log(repeatChar("a", 0))
console.log(repeatChar("a", 3))// "aaa"

///////////////////////////////////////////////////////////////////////////////////////

function repeatChar1(char, n){
    if(n<=0) return "";
    return char + repeatChar1(char, n-1);
}
console.log(repeatChar1("*", 5)) // "*****"
console.log(repeatChar1("a", 0))
console.log(repeatChar1("a", 3))// "aaa"

//////////////////////////////////////////////////////////////////////////////////////

function repeatChar2(char, n) {
    let result = "";
    for(let i = 0; i < n; i++) {
        result += char;
    }
    return result;
}

console.log(repeatChar2("*", 5)); // "*****"
console.log(repeatChar2("a", 0)); // ""
console.log(repeatChar2("a", 3)); // "aaa"


///////////////////////////////////////////////////////////////////////////////////////

function repeatChar3(char, n) {
    return Array(n + 1).join(char);
}

console.log(repeatChar3("*", 5)); // "*****"
console.log(repeatChar3("a", 0)); // ""
console.log(repeatChar3("a", 3)); // "aaa"


//////////////////////////////////////////////////////////////////////////////////////

function repeatChar4(char, n) {
    return Array(n).fill(char).join('');
}

console.log(repeatChar4("*", 5)); // "*****"
console.log(repeatChar4("a", 0)); // ""
console.log(repeatChar4("a", 3)); // "aaa"

///////////////////////////////////////////////////////////////////////////////////////////

function repeatChar5(char, n) {
    let result = "";
    while (n-- > 0) {
        result += char;
    }
    return result;
}

console.log(repeatChar5("*", 5)); // "*****"
console.log(repeatChar5("a", 0)); // ""
console.log(repeatChar5("a", 3)); // "aaa"

//////////////////////////////////////////////////////////////////////////////////////

function repeatChar6(char, n) {
    return ''.padStart(n, char);
}

console.log(repeatChar6("*", 5)); // "*****"
console.log(repeatChar6("a", 0)); // ""
console.log(repeatChar6("a", 3)); // "aaa"
