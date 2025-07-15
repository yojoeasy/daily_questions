// Check Delivery Status
// Scenario: You want to show the delivery status of an order based on its status code.

// ✅ Task:
// Write a function getDeliveryStatus(code) that returns:
// "Pending" if code is 0
// "Shipped" if code is 1
// "Delivered" if code is 2
// "Cancelled" if code is 3
// "Unknown Status" for anything else

function getDeliveryStatus(code){
    switch (code) {
        case 0:
            return "Pending";
            break;
        case 1:
            return "Shipped";
            break;
        case 2:
            return "Delivered";
            break;
        case 3:
            return "Cancelled";
            break;
        default:
            return "Unknown Status";
            break;
    }
}

console.log(getDeliveryStatus(1)); // "Shipped"
console.log(getDeliveryStatus(5)); // "Unknown Status"





function getDeliveryStatus1(code) {
    const statusMap = {
        0: "Pending",
        1: "Shipped",
        2: "Delivered",
        3: "Cancelled"
    };
    
    return statusMap[code] ?? "Unknown Status";
}

console.log(getDeliveryStatus1(1)); // "Shipped"
console.log(getDeliveryStatus1(5)); // "Unknown Status"