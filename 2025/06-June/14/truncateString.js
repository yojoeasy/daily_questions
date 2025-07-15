function truncateString(str,n){
    return str = str.substr(0,n) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))// "A-tisket..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0))// "A-tisket..."

/////////////////////////////////////

function truncateString(str, n){
    return str = str.substr(0, n) + "...";
}

///////////////////////////////////

function truncateString(str, n) {
    return str.slice(0, n) + "...";
}


/////////////////////////////////////////////

function truncateString(str, n) {
    return str.length > n ? str.slice(0, n) + "..." : str;
}


/////////////////////////////////////////////////////

const truncateString = (str, n) => str.length > n ? str.slice(0, n) + "..." : str;

////////////////////////////////////////////////////////////////////////////

function truncateString(str, n) {
    return `${str.slice(0, n)}...`;
}

///////////////////////////////////////////////////////////////////////////

function truncateString(str, n) {
    if (!str || n <= 0) return "...";
    return str.length > n ? str.slice(0, n) + "..." : str;
}

/////////////////////////////////////////////////////

function smartTruncate(str, n) {
    if (str.length <= n) return str;
    let sub = str.slice(0, n);
    let lastSpace = sub.lastIndexOf(" ");
    return (lastSpace > 0 ? sub.slice(0, lastSpace) : sub) + "...";
}
