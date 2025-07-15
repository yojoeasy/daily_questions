// Convert Number to Indian Currency Format
// 🧩 Problem:
// You need to display a number as Indian currency format (i.e., lakhs and crores system).

function currencyFormat(num){
    return num.toLocaleString('en-IN');
}

console.log(currencyFormat(12345678));




function currencyFormat1(num) {
    return num.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });
}

console.log(currencyFormat1(12345678)); // "₹1,23,45,678"



function currencyFormat2(num) {
    let str = num.toString();
    let lastThree = str.slice(-3);
    let other = str.slice(0, -3);

    if (other !== '') {
        lastThree = ',' + lastThree;
    }

    return other.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

console.log(currencyFormat2(12345678)); // "1,23,45,678"