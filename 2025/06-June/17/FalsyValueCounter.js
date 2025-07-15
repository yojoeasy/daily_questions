function countFalsy(arr){
    let count = 0;
    for(let val of arr){
        if(!val) count += 1;
    }
    return count;
}
console.log(countFalsy([0, "hi", false, 3, "", undefined]));         // 4
console.log(countFalsy([0, "hi", false, 3, "", undefined]));         // 4
console.log(countFalsy([true, "hello", 1, {}, []]));                 // 0
console.log(countFalsy([false, null, "", NaN, undefined, 0]));       // 6
console.log(countFalsy([1, 2, 3, "text", true]));                    // 0
console.log(countFalsy([false, "", 0, "0", "false", null]));         // 4
console.log(countFalsy([[], {}, " ", "0", true, 42]));               // 0
console.log(countFalsy([undefined, NaN, "", false, 0, null, "a"]));  // 6

////////////////////////////////////////////////////////////

function countFalsy(arr) {
    return arr.filter(item => !item).length;
}

//////////////////////////////////////////////////////////////////

function countFalsy(arr) {
    return arr.reduce((count, val) => !val ? count + 1 : count, 0);
}

//////////////////////////////////////////////////////////////////////

function countFalsy(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) count++;
    }
    return count;
}

/////////////////////////////////////////////////////////////////////////

function countFalsy(arr) {
    let count = 0;
    arr.forEach(item => {
        if (!item) count++;
    });
    return count;
}

//////////////////////////////////////////////////////////////////////////////

function countFalsy(arr) {
    let count = 0;
    arr.map(val => { if (!val) count++; });
    return count;
}
