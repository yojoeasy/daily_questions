function reverseString(str){
    if(str.length === 0) return str;
    let revStr = "";
    for(let i=str.length-1; i>=0; i--){
        revStr = revStr + str[i];
    }
    return revStr;
}
console.log(reverseString("hello"));

///////////////////////////////////////////////////////////////////////////////////////////////////

function reverseString(str) {
    return str.split('').reverse().join('');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseStringRecursive(str) {
    if (str === "") return "";
    return reverseStringRecursive(str.substr(1)) + str[0];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseStringReduce(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}