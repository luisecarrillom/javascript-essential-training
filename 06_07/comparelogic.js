/**
 * Assignment vs. Comparison operators in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
 */

// Assignment
let x = "10";     // string
let y = 10;       // number

console.log(`x = ${x} (${typeof x})`);
console.log(`y = ${y} (${typeof y})`);

// Loose comparison (==)
if (x == y) {
  console.log("x == y → true (loose equality)");
} else {
  console.log("x == y → false");
}

// Strict comparison (===)
if (x === y) {
  console.log("x === y → true (strict equality)");
} else {
  console.warn("x === y → false (type mismatch)");
}

// Not equal (!=)
if (x != y) {
  console.warn("x != y → true");
} else {
  console.log("x != y → false");
}

// Strict not equal (!==)
if (x !== y) {
  console.warn("x !== y → true (strict inequality)");
}

// Greater than / less than
let a = 15;
let b = 20;

console.log(`a = ${a}, b = ${b}`);
console.log("a > b:", a > b);   // false
console.log("a < b:", a < b);   // true
console.log("a >= b:", a >= b); // false
console.log("a <= b:", a <= b); // true
