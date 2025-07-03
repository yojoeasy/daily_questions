function factorialize(num){
    if(num == 1 || num == 0) return 1;
    return num * factorialize(num -1);
}

console.log(factorialize(3));

///////////////////////////////////////////////////////////////////

function factorialIterative(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

/////////////////////////////////////////////////////////////////////////

function factorialReduce(num) {
    if (num === 0) return 1;
    return Array.from({length: num}, (_, i) => i + 1)
        .reduce((acc, val) => acc * val, 1);
}

////////////////////////////////////////////////////////////////////////////

function factorialWhile(num) {
    let result = 1;
    let i = num;
    while (i > 1) {
        result *= i;
        i--;
    }
    return result;
}

////////////////////////////////////////////////////////////////////////////////////

const factorialMemo = (function() {
    const cache = {};
    return function f(num) {
        if (num === 0 || num === 1) return 1;
        if (cache[num]) return cache[num];
        return cache[num] = num * f(num - 1);
    }
})();

