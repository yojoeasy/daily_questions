// Mask the Middle Digits of a Phone Number
// 🧩 Problem:
// You need to hide customer privacy info. Write a function to mask the middle digits of a phone number.

function maskNumber(num){
    if(typeof num != "string") num = num.toString();
    if (num.length < 4) return "Invalid number";
    return num.slice(0,2) + '#'.repeat(num.length-4) + num.slice(-2);
}

console.log(maskNumber("9876543210"));
console.log(maskNumber(9876543210));
console.log(maskNumber(+9876543210));
console.log(maskNumber(98));