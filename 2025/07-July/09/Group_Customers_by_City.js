//  Group Customers by City
// 🧩 Problem:
// You have a list of customer data. Group the customers by their city into an object.

const customers = [
  { name: "Yogesh", city: "Delhi" },
  { name: "Ankit", city: "Mumbai" },
  { name: "Priya", city: "Delhi" },
  { name: "Neha", city: "Mumbai" },
  { name: "Ravi", city: "Pune" }
];

function groupByCity(customers){
    const result = {};

  for (let customer of customers) {
    const city = customer.city;
    const name = customer.name;

    if (!result[city]) {
      result[city] = [];
    }

    result[city].push(name);
  }

  return result;
}
console.log(groupByCity(customers));
// {
//   Delhi: ["Yogesh", "Priya"],
//   Mumbai: ["Ankit", "Neha"],
//   Pune: ["Ravi"]
// }





function groupByCity(customers) {
  return customers.reduce((acc, curr) => {
    acc[curr.city] = acc[curr.city] || [];
    acc[curr.city].push(curr.name);
    return acc;
  }, {});
}
