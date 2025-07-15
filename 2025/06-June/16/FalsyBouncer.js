function bouncer0(arr){
    let arr0 = [];
    for(let val of arr){
        if(val){
            arr0.push(val);
        }
    }
    return arr0;
}
console.log(bouncer0([7, "ate", "", false, 9])); // [7, "ate", 9]

/////////////////////////////////////////

function bouncer1(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer1([7, "ate", "", false, 9])); // [7, "ate", 9]

///////////////////////////////////////////////////////////////

function bouncer2(arr) {
    return arr.filter(val => !!val); // Double negation to convert to boolean
}
console.log(bouncer2([7, "ate", "", false, 9]));

//////////////////////////////////////////////////////////////////

function bouncer3(arr) {
    return arr.reduce((acc, val) => {
        if (val) acc.push(val);
        return acc;
    }, []);
}
console.log(bouncer3([7, "ate", "", false, 9]));

////////////////////////////////////////////////////

function bouncer4(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(bouncer4([7, "ate", "", false, 9]));

/////////////////////////////////////////////////////////////////////

function bouncer5(arr) {
    return arr.map(val => val ? [val] : []).flat();
}
console.log(bouncer5([7, "ate", "", false, 9]));


////////////////////////////////////////////////

function bouncer6(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i]) result.push(arr[i]);
        i++;
    }
    return result;
}
console.log(bouncer6([7, "ate", "", false, 9]));

