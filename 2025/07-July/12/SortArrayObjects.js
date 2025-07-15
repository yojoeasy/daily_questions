// sort an Array of Objects by a Field
// 🧩 Problem:
// You have a list of products. Sort them by price in ascending order.

const products = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 50 },
  { name: "Pencil", price: 10 }
];

function sortArry(product){
    return product.sort((a, b) => a.price - b.price);
}
console.log(sortArry(products));


///////////////////////////////////////////////////////////////////////////////
const sortByNameAsc = products.slice().sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(sortByNameAsc);



////////////////////////////////////////////////////////////////////////////////////////////
const sortByNameDesc = products.slice().sort((a, b) =>
  b.name.localeCompare(a.name)
);
console.log(sortByNameDesc);


/////////////////////////////////////////////////////////////////////////////////////////////
const sortByPriceDesc = products.slice().sort((a, b) => b.price - a.price);
console.log(sortByPriceDesc);
