// Convert an Array of Objects into a Lookup Object
// 🧩 Problem:
// You’re given a list of users. Convert it into a lookup object where each key is the user’s ID and the value is the user object.

const users = [
  { id: 1, name: "Yogesh" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Ravi" }
];

function arrayToObject(userArray){
    return userArray.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

console.log(arrayToObject(users));
// {
//   1: { id: 1, name: "Yogesh" },
//   2: { id: 2, name: "Priya" },
//   3: { id: 3, name: "Ravi" }
// }