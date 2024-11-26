import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add("1,2")).toBe(3);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
    });
    
    test('should handle newlines as delimiters', () => {
        expect(add("1\n2,3")).toBe(6);
    });
    test('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });
    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });
    
    test('should show all negative numbers in the error message', () => {
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
    test('should ignore number grater than or equal to 1000', () => {
        expect(add("2,1000,3,1001")).toBe(5);
    });
    test('should handle input with mixed delimiter', () => {
        expect(add("//;\n1;2,3\n4")).toBe(10);
    });
});
