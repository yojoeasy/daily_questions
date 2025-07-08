// Find the Most Frequent Item in an Array
// 🧩 Problem:
// You have a list of product IDs sold today. Write a function to find the most frequently sold product ID.

function mostFrequent(arr){
    let freqMap = {};         // To store frequency of each value
    let maxFreq = 0;
    let mostFreqItem = null;
    for (let val of arr) {
        freqMap[val] = (freqMap[val] || 0) + 1;

        if (freqMap[val] > maxFreq) {
            maxFreq = freqMap[val];
            mostFreqItem = val;
        }
    }
    return mostFreqItem;

}
console.log(mostFrequent([101, 203, 101, 405, 101, 203, 502, 203, 203])); // 203

function mostFrequent1(arr) {
    const freqMap = new Map();
    let maxFreq = 0;
    let mostFreqItem = null;

    arr.forEach(val => {
        const count = freqMap.get(val) || 0;
        freqMap.set(val, count + 1);

        if (freqMap.get(val) > maxFreq) {
            maxFreq = freqMap.get(val);
            mostFreqItem = val;
        }
    });

    return mostFreqItem;
}

console.log(mostFrequent1([101, 203, 101, 405, 101, 203, 502, 203, 203])); // 203
