# String Calculator

This project implements a string calculator that processes a string of numbers and performs addition. The calculator supports various features such as custom delimiters and handles errors for negative numbers. It is built using JavaScript and tested using Jest.

## Introduction

The String Calculator project provides a simple way to perform addition on numbers provided as a string. It supports:
- Basic addition of comma-separated numbers.
- Handling newlines as delimiters.
- Custom delimiters.
- Error handling for negative numbers.

## Run Project

To run this project, ensure you have the following installed:
- **Node.js**: A JavaScript runtime environment.
- **npm**: Node Package Manager (comes with Node.js).

Download Node.js from [nodejs.org](https://nodejs.org/). npm will be installed automatically with Node.js.

## Installation

 **Clone the Repository**

   Open a terminal or command prompt and execute:

  - git clone <repository-url>
  - cd <repository-directory>

## Install Dependencies
- npm install

## Run Tests
- npm test

## Run the Code
 
  **Build the Project** 
    - npm run build
  **Run the Compiled Code**  
    - node dist/index.js

## Modify the code

 **Edit the Code** 
    You can modify the main logic in the index.ts file located in the root directory and the stringCalculator.ts file located in the src folder.

 **Rebuild After Changes**
    After making changes, rebuild the project to see the effects:
    - npm run build
 **Rerun Tests**
    - npm test


## Outpout of - (npm test) 
PASS  tests/stringCalculator.test.ts
  String Calculator
    √ should return 0 for an empty string (6 ms)
    √ should return the number itself for a single number (1 ms)
    √ should return the sum of two numbers (1 ms)
    √ should return the sum of multiple numbers (1 ms)
    √ should handle newlines as delimiters
    √ should support custom delimiters
    √ should throw an error for negative numbers (21 ms)
    √ should show all negative numbers in the error message (2 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        4.904 s, estimated 6 s
Ran all test suites.