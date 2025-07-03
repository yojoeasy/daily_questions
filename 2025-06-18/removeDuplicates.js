function removeDuplicates(arr){
    let fArr = [arr[0]];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] != arr[i+1]){
            fArr.push(arr[i+1])
        }
    }
    return fArr;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 6, 6])) // [1, 2, 3, 4, 5, 6]

/////////////////////////////////////////////////////////////////////////////////////

function removeDuplicates1(arr) {
    if (arr.length === 0) return [];
    const result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

///////////////////////////////////////////////////////////////////////////////////////

function removeDuplicates2(arr) {
    return arr.reduce((acc, curr) => {
        if (acc.length === 0 || acc[acc.length - 1] !== curr) {
            acc.push(curr);
        }
        return acc;
    }, []);
}

/////////////////////////////////////////////////////////////////////////////////////////

function removeDuplicates3(arr) {
    return arr.filter((val, i) => i === 0 || val !== arr[i - 1]);
}

////////////////////////////////////////////////////////////////////////////////////////

function removeDuplicates4(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr[i]);
        while (arr[i] === arr[i + 1]) {
            i++;
        }
        i++;
    }
    return result;
}

//////////////////////////////////////////////////////////////////////

