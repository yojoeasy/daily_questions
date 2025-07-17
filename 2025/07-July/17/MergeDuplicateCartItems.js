// Merge Duplicate Cart Items
// 🧩 Problem:
// You have a list of cart items. If a product appears more than once, merge it by summing its quantities.

const cart = [
  { productId: 101, name: "Pen", quantity: 2 },
  { productId: 102, name: "Notebook", quantity: 1 },
  { productId: 101, name: "Pen", quantity: 3 }
];

function mergeCartItems(cart) {
  const mergedCart = {};
    cart.forEach(item => {
    if (mergedCart[item.productId]) {   
        mergedCart[item.productId].quantity += item.quantity;
    } else {
        mergedCart[item.productId] = { ...item };
    }
});

return Object.values(mergedCart);
}
const mergedCart = mergeCartItems(cart);
console.log(mergedCart);// [{ productId: 101, name: "Pen", quantity: 5 },{ productId: 102, name: "Notebook", quantity: 1 }]




// Alternative Solution using Map
// This solution uses a Map to handle merging of cart items by productId.
// It ensures that the original cart items are not mutated and provides a clean way to sum quantities.
// This approach is efficient and maintains the original structure of the cart items.
const cart1 = [
  { productId: 1012, name: "Pen", quantity: 2 },
  { productId: 1022, name: "Notebook", quantity: 1 },
  { productId: 1012, name: "Pen", quantity: 3 },
  { productId: 1012, name: "Pen", quantity: 1 },
  { productId: 1022, name: "Notebook", quantity: 4 },
  { productId: 1012, name: "Pen", quantity: 3 }
];

function mergeCartItems1(cart) {
  const map = new Map();

  for (const item of cart) {
    if (map.has(item.productId)) {
      map.get(item.productId).quantity += item.quantity;
    } else {
      map.set(item.productId, { ...item }); // use spread to avoid mutating original
    }
  }

  return Array.from(map.values());
}
console.log(mergeCartItems1(cart1));
