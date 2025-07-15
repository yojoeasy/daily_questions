function repeatString(str,n){
    if(n == 0) return "";
    let finalString = "";
    // if(n != 0){
        for(let i= 0; i<n; i++){
            finalString += str;
        }
        return finalString;
    // }
}
console.log(repeatString("abc", 3)) // "abcabcabc"  
console.log(repeatString("xyz", 0)) // ""

////////////////////////////////////////////////////

function repeatString(str, n) {
    return str.repeat(n);
}

/////////////////////////////////////////

function repeatString(str, n) {
    if (n <= 0) return "";
    return str + repeatString(str, n - 1);
}


//////////////////////////////////////////

function repeatString6(str, n) {
    return new Array(n + 1).join(str);
}

console.log(repeatString6("abc", 3)) // "abcabcabc"  
console.log(repeatString6("xyz", 0)) // ""

//////////////////////////////////////

function repeatString(str, n) {
    return Array(n).fill(str).join('');
}

////////////////////////////////

function repeatString(str, n) {
    return Array(n).fill().reduce(acc => acc + str, "");
}

//////////////////////////////////////////////

if (!String.prototype.repeat) {
    String.prototype.repeat = function(n) {
        return Array(n + 1).join(this);
    };
}


