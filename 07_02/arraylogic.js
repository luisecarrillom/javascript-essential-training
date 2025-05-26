/**
 * Exploring arrays in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

// A string variable used in the array
let tool = "hammer";

// Creating an array with different data types
const toolbox = ["wrench", tool, 42, false];

console.log("Original array:", toolbox);

// Accessing array items
console.log("First item:", toolbox[0]);     // "wrench"
console.log("Second item:", toolbox[1]);    // "hammer"

// Replacing an item (index 2)
toolbox[2] = "screwdriver";
console.log("Updated index 2:", toolbox[2]);

// Checking array length
console.log("Array length:", toolbox.length);

// Adding item at the end using length
toolbox[toolbox.length] = "pliers";
console.log("After adding to end:", toolbox);

// Adding an item to an index that doesn't exist yet
toolbox[8] = "tape";
console.log("After adding at index 8:", toolbox);

// Checking undefined slots
console.log("Slot 5:", toolbox[5]); // undefined
console.log("Slot 6:", toolbox[6]); // undefined
console.log("Slot 7:", toolbox[7]); // undefined

// Total array length after gaps
console.log("Final array length:", toolbox.length);
