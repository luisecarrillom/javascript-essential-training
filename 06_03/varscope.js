/**
 * Demonstrating scope problems with var
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

// Global var
var boxColor = "orange";

// First box gets the global color
document.querySelector(".box1").style.backgroundColor = boxColor;
document.querySelector(".box1").textContent = boxColor;

// Function that changes the global var (bad practice)
function changeColor() {
  boxColor = "cyan"; // This affects the global variable!
}

changeColor(); // Invoke the function

// Second box also gets the new color because 'boxColor' was changed globally
document.querySelector(".box2").style.backgroundColor = boxColor;
document.querySelector(".box2").textContent = boxColor;
