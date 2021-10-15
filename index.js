// Code your solution here

function findMatching(arr, str) {
    return arr.filter(d => d.toLowerCase() === str.toLowerCase());
};

function fuzzyMatch(arr, str) {
    return arr.filter(d => d.substring(0, 2).toLowerCase() === str.toLowerCase() )
};

function matchName(arr, str) {
    return arr.filter(d => d.name === str );
};