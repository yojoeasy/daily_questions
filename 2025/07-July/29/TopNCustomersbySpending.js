// Find Top N Customers by Spending
// 🧩 Problem:
// You have a list of customer transactions. Find the top N customers based on their total spending.

const transactions = [
  { customer: "Yogesh", amount: 500 },
  { customer: "Ankit", amount: 200 },
  { customer: "Yogesh", amount: 300 },
  { customer: "Yogesh", amount: 500 },
  { customer: "Ankit", amount: 200 },
  { customer: "Yogesh", amount: 300 },
  { customer: "Priya", amount: 700 },
  { customer: "Ankit", amount: 600 }
];
const N = 2;

function findTopNCustomers0(transactions, N){
    const spendingMap = {};
    
    transactions.forEach(({ customer, amount }) => {
        spendingMap[customer] = (spendingMap[customer] || 0) + amount; // Aggregate spending
    });
    console.log(spendingMap); // Debugging line to check the spending map

    // Convert map to array and sort by spending
    const sortedCustomers = Object.entries(spendingMap)
        .sort((a, b) => b[1] - a[1]) // Sort in descending order
        .slice(0, N); // Get top N customers

    return sortedCustomers;
}
console.log(findTopNCustomers0(transactions, N)); // Output: [ [ 'Yogesh', 800 ], [ 'Ankit', 800 ] ]




function findTopNCustomers(transactions, N) {
  const spendingMap = new Map();

  // Aggregate spending for each customer
  for (const { customer, amount } of transactions) {
    spendingMap.set(customer, (spendingMap.get(customer) || 0) + amount);
  }
   console.log(spendingMap); // Debugging line to check the spending map

  // Convert map to array and sort by spending
  const sortedCustomers = Array.from(spendingMap.entries())
    .sort((a, b) => b[1] - a[1]) // Sort in descending order
    .slice(0, N); // Get top N customers

  return sortedCustomers;
}
console.log(findTopNCustomers(transactions, N)); // Output: [ [ 'Yogesh', 800 ], [ 'Ankit', 800 ] ]