// Search Cake by Keyword
// Scenario: A user types a keyword in a search bar. You want to return cake names that include that keyword (case-insensitive).
// ✅ Task:
// Write a function searchCakes(cakeList, keyword) that returns an array of matching cake names.

const cakeList = ["Chocolate Cake", "Red Velvet", "Vanilla Cake", "Black Forest"];

function searchCakes(cakeList, keyword) {
  const lowerKeyword = keyword.toLowerCase();

  return cakeList.filter(cake =>
    cake.toLowerCase().includes(lowerKeyword)
  );
}

console.log(searchCakes(cakeList, "cake"));     // ["Chocolate Cake", "Vanilla Cake"]
console.log(searchCakes(cakeList, "red"));      // ["Red Velvet"]
console.log(searchCakes(cakeList, "forest")); // ["Black Forest"]
console.log(searchCakes(cakeList, "piNe"));   // []