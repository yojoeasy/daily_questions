// Calculate Average Order Value
// 🧩 Problem:
// You're given an array of orders. Write a function to calculate the average order value.

const orders = [
  { orderId: 1, amount: 250 },
  { orderId: 2, amount: 450 },
  { orderId: 3, amount: 300 }
];


function avgOrderValue(order){
    // let total = order.reduce((acc, cur) => acc + cur.amount, 0);
    let total = order.reduce((acc, cur) => {
        return acc + Number(cur['amount'])
    },0);
    return (total / orders.length).toFixed(2);
}

console.log(avgOrderValue(orders));