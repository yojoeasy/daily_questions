// Write a function mutation(arr) that returns true if all the letters of the second string are present in the first string (case-insensitive)

function mutation(arr) {
    let [str1, str2] = arr.map(s => s.toLowerCase());
    return [...str2].every(char => str1.includes(char));
}
console.log(mutation(["hello", "Hey"])) // false  
console.log(mutation(["hello", "Hello"])) // true  
console.log(mutation(["Mary", "Army"])) // true

/////////////////////////////////////////////////////////////////////////

function mutation(arr) {
    let [str1, str2] = arr.map(s => s.toLowerCase());
    return [...str2].every(char => str1.includes(char));
}

//////////////////////////////////////////////////////////////////////////////

function mutation(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    
    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            return false;
        }
    }
    return true;
}

/////////////////////////////////////////////////////////////////////

function mutation(arr) {
    let str1Set = new Set(arr[0].toLowerCase());
    let str2 = arr[1].toLowerCase();
    
    for (let char of str2) {
        if (!str1Set.has(char)) return false;
    }
    return true;
}

/////////////////////////////////////////////////////////////////////////////////

function mutation(arr) {
    let [str1, str2] = arr.map(s => s.toLowerCase());
    let matches = [...str2].filter(char => str1.includes(char));
    return matches.length === str2.length;
}


///////////////////////////////////////////////////////////////////////

function mutation(arr) {
    let [str1, str2] = arr.map(s => s.toLowerCase());
    
    function check(index) {
        if (index === str2.length) return true;
        if (!str1.includes(str2[index])) return false;
        return check(index + 1);
    }

    return check(0);
}


console.log(mutation(["hello", "hey"]));     // false
console.log(mutation(["hello", "Hello"]));   // true
console.log(mutation(["Mary", "Army"]));     // true
console.log(mutation(["floor", "for"]));     // true
console.log(mutation(["hello", "yellow"]));  // false