// Days Since Order
// Scenario: You want to show customers how many days have passed since they placed an order.

// ✅ Task:
// Write a function daysSinceOrder(orderDate) where orderDate is a string in the format "YYYY-MM-DD". It should return how many days have passed from that date to today.

function daysSinceOrder(orderDate){
    const today = new Date();
    const order = new Date(orderDate);
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.floor((today - order) / msInDay);
}
console.log(daysSinceOrder("2025-06-30")); // Example output: 4 (if today is 2025-07-04)
