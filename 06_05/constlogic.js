/**
 * Demonstrating const scope and immutability
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

// Define a constant color
const baseColor = "teal";

// Use const to color first box
document.querySelector(".box1").style.backgroundColor = baseColor;
document.querySelector(".box1").textContent = baseColor;

// This will cause an error if uncommented
// baseColor = "orange"; // ❌ Uncaught TypeError: Assignment to constant variable

function setTitleColor() {
  const titleColor = "purple"; // Local constant
  document.querySelector(".title").style.color = titleColor;

  console.log("Inside function:", titleColor);
}

// Call the function
setTitleColor();

// Safe usage of const in another context
const finalColor = "darkred";
document.querySelector(".box2").style.backgroundColor = finalColor;
document.querySelector(".box2").textContent = finalColor;

// Try accessing a function's const from outside (will throw ReferenceError if uncommented)
// console.log(titleColor); // ❌ Uncaught ReferenceError: titleColor is not defined
