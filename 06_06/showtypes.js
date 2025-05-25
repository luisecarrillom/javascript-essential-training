/**
 * Exploring JavaScript data types
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// Text type (String)
const username = "Alice";
console.log("String:", username, "| Type:", typeof username);

// Number types
const age = 28;
console.log("Integer:", age, "| Type:", typeof age);

const rating = 4.9;
console.log("Float:", rating, "| Type:", typeof rating);

// Boolean type
const isOnline = false;
console.log("Boolean:", isOnline, "| Type:", typeof isOnline);

// Null value
const address = null;
console.log("Null:", address, "| Type:", typeof address); // still returns "object" (quirk)

// Undefined value
let token;
console.log("Undefined:", token, "| Type:", typeof token);

let notSet = undefined;
console.log("Undefined (explicit):", notSet, "| Type:", typeof notSet);

// Object type
const user = {
  name: "Alice",
  loggedIn: true,
  age: 28,
};
console.log("Object:", user, "| Type:", typeof user);

// Array type
const fruits = ["apple", "banana", "cherry"];
console.log("Array:", fruits, "| Type:", typeof fruits); // returns "object" (arrays are objects)
