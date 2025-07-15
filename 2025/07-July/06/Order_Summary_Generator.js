// Order Summary Generator
// Scenario: You received a list of cake orders for the day.
// ✅ Task:
// Write a function getOrderSummary(orders) that returns the total number of cakes and the total bill amount.


const orders = [
  { name: "Chocolate Cake", qty: 2, price: 250 },
  { name: "Red Velvet", qty: 1, price: 300 },
  { name: "Vanilla Cake", qty: 3, price: 200 }
];

function getOrderSummary(orders){
    let qtyT = 0;
    let amtT = 0;
    for(val of orders){
        qtyT += val.qty;
        amtT += val.qty * val.price;
    }
    return [{ totalQty: qtyT,
  totalAmount: amtT}]
}
console.log(getOrderSummary(orders));




function getOrderSummary1(orders) {
  return orders.reduce(
    (summary, order) => {
      summary.totalQty += order.qty;
      summary.totalAmount += order.qty * order.price;
      return summary;
    },
    { totalQty: 0, totalAmount: 0 }
  );
}
console.log(getOrderSummary1(orders));
