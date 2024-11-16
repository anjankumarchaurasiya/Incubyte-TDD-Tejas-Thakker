import { add } from './src/stringCalculator';

console.log(add("1,2,3")); // Output: 6
console.log(add("")); // Output: 0
console.log(add("//;\n1;2")); // Output: 3
console.log(add("1\n2,3")); // Output: 6