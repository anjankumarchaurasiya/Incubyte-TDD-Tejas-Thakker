export function add(numbers: string): number {
    if (!numbers) return 0;
    const delimiter = /,|\n/;
    return numbers.split(delimiter).map(Number).reduce((sum, num) => sum + num, 0);
}
