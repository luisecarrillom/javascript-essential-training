/**
 * Demonstrating local block scope with let
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

// Global variable with let
let blockColor = "red";

// First block gets the global color
document.querySelector(".box1").style.backgroundColor = blockColor;
document.querySelector(".box1").textContent = blockColor;

function updateHeadingColor() {
  // Local variable with same name using let
  let blockColor = "blue";
  console.log("Inside function:", blockColor);
  document.querySelector(".title").style.color = blockColor;
}

updateHeadingColor();

// Second block still uses the original global color
document.querySelector(".box2").style.backgroundColor = blockColor;
document.querySelector(".box2").textContent = blockColor;

// Try to log the local variable outside its scope
try {
  console.log("Outside function:", blockColorLocal); // This will fail
} catch (error) {
  console.warn("Error accessing local variable outside scope:", error.message);
}
