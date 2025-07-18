// Find Customers Who Ordered More Than Once
// 🧩 Problem:
// You're given an array of order records. Find the customer names who appear more than once.

const orders = [
  { id: 1, customer: "Yogesh" },
  { id: 2, customer: "Ankit" },
  { id: 3, customer: "Yogesh" },
  { id: 4, customer: "Ravi" },
  { id: 5, customer: "Ankit" }
];

function repeatCustomers(orders) {
    const customerCount = {};
    for (let order of orders) {
        customerCount[order.customer] = (customerCount[order.customer] || 0) + 1;
    }
    return Object.keys(customerCount).filter(customer => customerCount[customer] > 1);
}
console.log(repeatCustomers(orders)); // [ 'Yogesh', 'Ankit' ]









// Alternative using Map

const findFrequentCustomers = (orderList) => {
  const customerMap = new Map();

  orderList.forEach((order) => {
    customerMap.set(order.customer, (customerMap.get(order.customer) || 0) + 1);
  });

  return [...customerMap.entries()].filter(([, count]) => count > 1).map(([customer]) => customer);
};

const frequentCustomers = findFrequentCustomers(orders);
console.log(frequentCustomers); // [ 'Yogesh', 'Ankit' ]





// Alternative using reduce
const findFrequentCustomersWithReduce = (orderList) => {
  const customerCounts = orderList.reduce((acc, order) => {
    acc[order.customer] = (acc[order.customer] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(customerCounts).filter((customer) => customerCounts[customer] > 1);
};

const frequentCustomersWithReduce = findFrequentCustomersWithReduce(orders);
console.log(frequentCustomersWithReduce); // [ 'Yogesh', 'Ankit' ]