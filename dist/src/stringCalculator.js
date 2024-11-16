"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (!numbers)
        return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
    return numArray.reduce((acc, num) => acc + num, 0);
}
