/**
 * Different ways to define functions in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

// Function declaration
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Function expression with default parameter
const square = function (n = 2) {
  return n * n;
};

// Call functions
console.log(greetUser("Luis"));
console.log("Square of 4:", square(4));
console.log("Square with default:", square());

// Immediately Invoked Function Expression (IIFE)
(function () {
  const result = greetUser("Auto");
  console.log("IIFE result:", result);
})();
