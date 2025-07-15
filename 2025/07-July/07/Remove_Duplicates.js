// Remove Duplicates from an Array
// Description:
// You have a list of customer IDs that contains duplicates. Write a function to remove the duplicates and return only unique IDs.

function removeDuplicates(arr){
    return [...new Set(arr)];
}

function removeDuplicates1(arr){
    let unique =[];
    for(val of arr){
        if (!unique.includes(val)) {
            unique.push(val);
        }
    }
    return unique;
}

function removeDuplicates2(arr) {
  const seen = {};
  const result = [];
  for (let val of arr) {
    if (!seen[val]) {
      seen[val] = true;
      result.push(val);
    }
  }
  return result;
}

console.log(removeDuplicates([101, 203, 101, 405, 203, 502]));
console.log(removeDuplicates1([101, 203, 101, 405, 203, 502]));
console.log(removeDuplicates2([101, 203, 101, 405, 203, 502]));
