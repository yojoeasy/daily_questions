function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(titleCase("i'm a little tea pot")) // "I'm A Little Tea Pot"

////////////////////////////////////////////////////////////////

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

/////////////////////////////////////////////////////

function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

////////////////////////////////////////////////////////

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .reduce((acc, word) => {
            return acc + (acc ? ' ' : '') + word.charAt(0).toUpperCase() + word.slice(1);
        }, '');
}

////////////////////////////////////////////////////

function titleCase(str) {
    let words = str.toLowerCase().split(' ');
    let result = [];

    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(' ');
}

/////////////////////////////////////////////////

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(([first, ...rest]) => first.toUpperCase() + rest.join(''))
        .join(' ');
}

