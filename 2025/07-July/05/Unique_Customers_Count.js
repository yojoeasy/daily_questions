// Unique Customers Count
// Scenario: You receive multiple orders a day and want to know how many unique customers ordered from your shop.

const orders = [
  { id: 1, customer: "Amit" },
  { id: 2, customer: "Priya" },
  { id: 3, customer: "Amit" },
  { id: 4, customer: "Kiran" }
];


function countUniqueCustomers(arr){
    const cust = [];
    for(val of arr){
        if(!cust.includes(val['customer'])){
            cust.push(val['customer']);
        }
    }
    return [cust , cust.length];
}

console.log(countUniqueCustomers(orders)); // 3


function countUniqueCustomers1(orders) {
  const unique = new Set();

  for (const order of orders) {
    unique.add(order.customer);
  }

  return unique.size;
}
console.log(countUniqueCustomers1(orders)); 


function getUniqueCustomerNames2(orders) {
  return [...new Set(orders.map(order => order.customer))];
}
console.log(getUniqueCustomerNames2(orders)); 
// Output: ["Amit", "Priya", "Kiran"]

