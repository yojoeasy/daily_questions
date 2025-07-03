function confirmEnding(str1, str2){
    str2L = str2.length;
    str1L = str1.length;

    if((str1.slice(str1L - str2L)) == str2) return true;
    else return false;
}
console.log(confirmEnding("Bastian", "n")) // true  
console.log(confirmEnding("OpenAI", "AI")) // true 

////////////////////////////////////////////////////////

function confirmEnding2(str1, str2){
    str2L = str2.length;
    str1L = str1.length;

    if(str1.slice(-str2.length) === str2) return true;
    else return false;
}
console.log(confirmEnding2("Bastian", "n")) // true  
console.log(confirmEnding2("OpenAI", "AI")) // true 
////////////////////////////////////////////////////////////

function confirmEnding3(str1, str2){
    if(str1.endsWith(str2)) return true;
    else return false;
}
console.log(confirmEnding3("Bastian", "n")) // true  
console.log(confirmEnding3("OpenAI", "AI")) // true 

/////////////////////////////////////////

function confirmEnding4(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str1[str1.length - str2.length + i] !== str2[i]) {
            return false;
        }
    }
    return true;
}

////////////////////////////////////////////////

function confirmEnding5(str1, str2) {
    return str1.substring(str1.length - str2.length) === str2;
}

////////////////////////////////////////////////////////////////

function confirmEnding6(str1, str2) {
    let regex = new RegExp(str2 + '$');
    return regex.test(str1);
}


////////////////////////////////////////

function confirmEnding7(str1, str2) {
    let revStr1 = str1.split('').reverse().join('');
    let revStr2 = str2.split('').reverse().join('');
    
    return revStr1.startsWith(revStr2);
}


//////////////////////////////////////////////

function confirmEnding8(str1, str2) {
    if (str2.length > str1.length) return false;

    for (let i = 0; i < str2.length; i++) {
        if (str1.charAt(str1.length - str2.length + i) !== str2.charAt(i)) {
            return false;
        }
    }
    return true;
}

////////////////////////////////////////////////

function confirmEnding9(str1, str2) {
    return str1.lastIndexOf(str2) === str1.length - str2.length;
}
