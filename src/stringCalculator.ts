export function add(numbers: string): number {
    if (!numbers) return 0;
    
    let delimiterString = ',|\n';
    let delimiter;
    ({ numbers, delimiter } = parseAndNumber(numbers, delimiterString));

    const numArray = splitNumber(numbers, delimiter);
    const filteredNumbers = ignoreNumberGreaterThan100(numArray); 
    validateNumber(filteredNumbers);

    return filteredNumbers.reduce((acc, num) => acc + num, 0);
}

function ignoreNumberGreaterThan100(numArray: number[]) {
    return numArray.filter(num => num < 1000);
}

function parseAndNumber(numbers: string, delimiterString: string) {
    let delimiter = new RegExp(delimiterString);

    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        const customDelimiter = parts[0].slice(2);

        if (customDelimiter.startsWith('\\')) {
            const delimiterChar = customDelimiter.slice(1);
            delimiter = new RegExp(delimiterChar);
        } else {
            delimiter = new RegExp(customDelimiter + '|' + delimiterString);
        }

        numbers = parts.slice(1).join('\n');
    }

    return { numbers, delimiter };
}

function splitNumber(numbers: string, delimiter: RegExp) {
    return numbers.split(delimiter).map(num => parseInt(num, 10));
}

function validateNumber(numArray: number[]) {
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
}
