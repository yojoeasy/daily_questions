// Discount Price Calculator
// Scenario: You run a cake shop. You're offering a 10% discount on orders above ₹500.

// ✅ Task:
// Write a function getFinalPrice(orderAmount) that returns the final amount after applying the discount if applicable.

function getFinalPrice(amt, dis = 10){
    if (typeof amt !== 'number' || isNaN(amt)) {
        return "You entered a wrong amount.";
    }
    if(amt>500){
        finalAmt = amt * (1 - (dis/100));
        return finalAmt;
    }
    return amt;
}


console.log(getFinalPrice(600)); // 540
console.log(getFinalPrice(450)); // 450
console.log(getFinalPrice(600, 20)); // 480
console.log(getFinalPrice("600", 20)); // 480