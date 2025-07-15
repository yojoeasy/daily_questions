// Flatten a Nested Array
// 🧩 Problem:
// You have a nested array with multiple levels of depth. Write a function to flatten it into a single-level array.

function flattenArray(arr){
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));



function flattenArray1(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray1(item)); // recursive flattening
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flattenArray1([1, [2, [3, 4], 5], 6]));
