// Validate Email Address
// 🧩 Problem:
// Write a function to validate whether a given string is a valid email address. (Just basic validation, not full RFC standard.)

function validateEmail(email){
    // const regex = /^[a-z0-9]+@.*\./i;
    // const regex = /^[^@.]+@[^@.]+\.[^@.]+$/;
    // const regex = /^\S+@\S+\.\S+$/;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(validateEmail("yogesh@example.com"));
console.log(validateEmail("yogesh.com"));
console.log(validateEmail("yogesh@"));
console.log(validateEmail("yo@jo.com"));
console.log(validateEmail("yogesh@example.com"));       // true
console.log(validateEmail("yo.jo+test@mail.domain.in")); // true
console.log(validateEmail("yo@domain"));                // false
console.log(validateEmail("@domain.com"));              // false
console.log(validateEmail("yo@.com"));                  // false