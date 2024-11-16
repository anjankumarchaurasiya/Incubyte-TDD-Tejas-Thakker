"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringCalculator_1 = require("./src/stringCalculator");
console.log((0, stringCalculator_1.add)("1,2,3")); // Output: 6
console.log((0, stringCalculator_1.add)("")); // Output: 0
console.log((0, stringCalculator_1.add)("//;\n1;2")); // Output: 3
console.log((0, stringCalculator_1.add)("1\n2,3")); // Output: 6
