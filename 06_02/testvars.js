/**
 * Practicing with JavaScript var
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

// Declare a single variable
var color = "green";
console.log("Initial color:", color);

// Change the value (mutability)
color = "yellow";
console.log("Updated color:", color);

// Declare multiple variables at once
var width = 20, height = 30, label = "Box";
console.log("Width:", width);
console.log("Height:", height);
console.log("Label:", label);

// Declare a variable without assigning a value
var emptyBox;
console.log("Empty box value:", emptyBox); // undefined

// Assign a value later
emptyBox = 100;
console.log("Now empty box holds:", emptyBox);

// Bad practice: undeclared variable (will still work, but not recommended)
mystery = "Secret";
console.log("Mystery value (undeclared):", mystery);
