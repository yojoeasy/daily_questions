function chunkArray1(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
console.log(chunkArray1([1, 2, 3, 4, 5], 2));

//////////////////////////////////////////////////////////

function chunkArray2(arr, n) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + n));
        i += n;
    }
    return result;
}
console.log(chunkArray2([1, 2, 3, 4, 5], 2));

///////////////////////////////////////////////////

function chunkArray3(arr, n) {
    return arr.reduce((acc, val) => {
        if (!acc.length || acc[acc.length - 1].length === n) {
            acc.push([val]);
        } else {
            acc[acc.length - 1].push(val);
        }
        return acc;
    }, []);
}
console.log(chunkArray3([1, 2, 3, 4, 5], 3));

//////////////////////////////////////

function chunkArray4(arr, n) {
    if (arr.length === 0) return [];
    return [arr.slice(0, n)].concat(chunkArray4(arr.slice(n), n));
}
console.log(chunkArray4([1, 2, 3, 4, 5], 2));
