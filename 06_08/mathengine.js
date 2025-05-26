/**
 * Arithmetic operations in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let x = 10;
let y = 3;

console.log(`x = ${x}, y = ${y}`);

// Basic arithmetic
console.log("Addition:", x + y);            // 13
console.log("Subtraction:", x - y);         // 7
console.log("Multiplication:", x * y);      // 30
console.log("Division:", x / y);            // 3.333...
console.log("Modulus (remainder):", x % y); // 1
console.log("Exponentiation:", x ** y);     // 1000

// Combined operations
let z = (x + y) * 2;
console.log("Combined (x + y) * 2:", z);     // 26

// Increment / Decrement
let counter = 5;
console.log("Original counter:", counter);
console.log("Pre-increment:", ++counter); // 6
console.log("Post-increment:", counter++); // 6 (then becomes 7)
console.log("After post-increment:", counter); // 7
console.log("Pre-decrement:", --counter); // 6

// Strings + numbers (dangerous!)
let strNum = "4";
console.log("x + '4' =", x + strNum); // "104" (string concatenation)
console.log("x - '4' =", x - strNum); // 6 (string converted to number)
