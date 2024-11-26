
export function add(numbers: string): number {
    if (!numbers) return 0;
    let delimiter = /,|\n/;
    ({ numbers, delimiter } = parseAndNumber(numbers, delimiter));

    const numArray = splitNumber(numbers, delimiter);

    validatNumber(numArray);

    return numArray.reduce((acc, num) => acc + num, 0);
}

function parseAndNumber(numbers: string, delimiter: RegExp) {
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }
    return { numbers, delimiter };
}

function splitNumber(numbers: string, delimiter: RegExp) {
    return numbers.split(delimiter).map(num => parseInt(num, 10));
}

function validatNumber(numArray: number[]) {
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
}
