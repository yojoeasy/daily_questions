function findLargest(arr){
    return Math.max(...arr);
}

console.log(findLargest([3, 7, 2, 9, 5])); // 9

//////////////////////////////////////////////////////////////////////////////////////////

function findLargest1(arr){
    let max = 0;
    for(let val of arr){
        if(val > max){
            max = val;
        }
    }
    return max;
}

console.log(findLargest1([3, 7, 2, 9, 5, 0, 12])); // 12

///////////////////////////////////////////////////////////////////////////////////////////////////

function findLargest2(arr) {
    return arr.reduce((max, val) => val > max ? val : max, arr[0]);
}

console.log(findLargest2([3, 7, 2, 9, 5, 0, 12])); // 12

/////////////////////////////////////////////////////////////////////////////////////////////////////

function findLargest3(arr) {
    return arr.sort((a, b) => b - a)[0];
}

console.log(findLargest3([3, 7, 2, 9, 5, 0, 12])); // 12

/////////////////////////////////////////////////////////////////////////////////////////////////////

function findLargest4(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findLargest4([3, 7, 2, 9, 5, 0, 12])); // 12

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function findLargest5(arr) {
    return Math.max.apply(null, arr);
}

console.log(findLargest5([3, 7, 2, 9, 5, 0, 12])); // 12

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findLargest6(arr, n = arr.length) {
    if (n === 1) return arr[0];
    return Math.max(arr[n - 1], findLargest6(arr, n - 1));
}

console.log(findLargest6([3, 7, 2, 9, 5, 0, 12])); // 12

