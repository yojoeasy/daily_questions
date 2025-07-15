// Format Customer Names
// Scenario: You want to format customer names before showing them on invoices.
// You receive a list of names in lowercase:
// ✅ Task:
// Write a function capitalizeNames(names) that returns a new array with each name capitalized properly (first letter uppercase).

const names = ["yogesh", "priya", "rahul", "kiran"];

function capitalizeNames(names){
     return names
    .map(name => name.trim()[0].toUpperCase() + name.trim().slice(1).toLowerCase())
}

console.log(capitalizeNames(names));


function capitalizeNames1(names) {
  return names.map(name => {
    const [first, ...rest] = name.trim().toLowerCase();
    return first.toUpperCase() + rest.join('');
  });
}

console.log(capitalizeNames1(names));
// Output: [ 'Yogesh', 'Priya', 'Rahul', 'Kiran' ]

