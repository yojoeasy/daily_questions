// Write a function slasher(arr, howMany) that removes howMany elements from the beginning of the array and returns the rest.

function slasher(arr,howmany){
    return arr.splice(howmany);
}

console.log(slasher([1, 2, 3], 2)) // [3]
console.log(slasher([1, 2, 3], 0)) // [1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////////////////////

function slasher(arr, howmany) {
    return arr.slice(howmany);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function slasher(arr, howmany) {
    return arr.filter((_, index) => index >= howmany);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function slasher(arr, howmany) {
    let result = [];
    for (let i = howmany; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function slasher(arr, howmany) {
    return arr.reduce((acc, val, index) => {
        if (index >= howmany) acc.push(val);
        return acc;
    }, []);
}


/////////////////////////////////////////////////////////////////////////

function slasher(arr, howmany) {
    return Array.from(arr).slice(howmany);
}
