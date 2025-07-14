// Find Top N Expensive Products
// 🧩 Problem:
// You have a list of products. Write a function that returns the top N most expensive products.

const products = [
  { name: "Mouse", price: 800 },
  { name: "Charger", price: 500 },
  { name: "Tablet", price: 30000 },
  { name: "Monitor", price: 15000 },
  { name: "Laptop", price: 80000 },
  { name: "Phone", price: 50000 },
  { name: "Table", price: 40000 },
  { name: "TV", price: 17000 }
];

const n = 2;

function expensiveProduct(product, n){
    return product.sort((a,b)=> b.price - a.price).slice(0,n);
}

console.log(expensiveProduct(products, n));
console.log(expensiveProduct(products, 4));