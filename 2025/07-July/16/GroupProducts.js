// Group Products by Category
// 🧩 Problem:
// You have a list of products, each with a category. Group them by category into an object.

const products = [
  { name: "Apple", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Banana", category: "Fruits" },
  { name: "Broccoli", category: "Vegetables" },
  { name: "Bread", category: "Bakery" }
];


function groupProductsByCategory(products) {
    const grouped = {};
    for (let product of products) {
        if (!grouped[product.category]) {
            grouped[product.category] = [];
        }
        grouped[product.category].push(product.name);
    }
    return grouped;
}
console.log(groupProductsByCategory(products)); // { Fruits: [ 'Apple', 'Banana' ], Vegetables: [ 'Carrot', 'Broccoli' ], Bakery: [ 'Bread' ] }



function groupProductsByCategory1(products) {
  return products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product.name);
    return acc;
  }, {});
}   
console.log(groupProductsByCategory1(products)); // { Fruits: [ 'Apple', 'Banana' ], Vegetables: [ 'Carrot', 'Broccoli' ], Bakery: [ 'Bread' ] }

