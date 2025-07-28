// Calculate Total Revenue by Category
// 🧩 Problem:
// You have sales data with product categories. Calculate total revenue for each category.

const salesData = [
    { category: "Electronics", revenue: 100 },
    { category: "Clothing", revenue: 50 },
    { category: "Electronics", revenue: 150 },
    { category: "Clothing", revenue: 75 },
];

const totalRevenueByCategory = salesData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.revenue;
    return acc;
}, {});

console.log(totalRevenueByCategory);

function getTotalRevenueByCategory(data) {
    let items = [];
    data.forEach(item => {
        if (items[item.category]) {
            items[item.category] += item.revenue;
        } else {
            items[item.category] = item.revenue;
        }
    });
    return items;   
}

console.log(getTotalRevenueByCategory(salesData));