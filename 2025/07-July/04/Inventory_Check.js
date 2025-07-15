// Inventory Check
// Scenario: You store cake stock in an array like below.

// ✅ Task:
// Write a function getAvailableCakes(inventory) that returns an array of cake names that are in stock (quantity > 0).


const inventory = [
    { name: "Chocolate Cake", quantity: 5 },
    { name: "Vanilla Cake", quantity: 0 },
    { name: "Red Velvet", quantity: 2 }
];

function getAvailableCakes(arr){
    const inStock = [];
    for(val of arr){
        if(val["quantity"] > 0){
            inStock.push(val["name"])
        }
    }
    return inStock;
}

console.log(getAvailableCakes(inventory));