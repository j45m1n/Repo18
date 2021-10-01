let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let unionSet = new Set([1, 2, 3, 4, 5, 6, 4, 3, 2]);
let intersectionSet = new Set([]);
let differenceSet = new Set([]);

module.exports = { unionSet, intersectionSet, differenceSet};