// Capitalize the First Letter of Each Word
// Description:
// You receive customer names in lowercase. Write a function to capitalize the first letter of each word in the full name.

function capitalizeFirst(str){
    return str.split(" ")
        // str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase(). // this is not work because str is convet to array 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeFirst("yogesh joshi"));