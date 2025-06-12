/**
 * Typical DOM events example
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

const inputField = document.querySelector(".input-field");
const button = document.querySelector(".color-button");
const logMessage = document.querySelector(".log-message");

// Track key presses and show the key
window.addEventListener("keydown", (event) => {
  logMessage.textContent = `You pressed: ${event.key}`;
});

// Change button color on double click
button.addEventListener("dblclick", () => {
  button.classList.toggle("red");
  console.log("Button was double-clicked!");
});

// Show focus/blur on input field
inputField.addEventListener("focus", () => {
  logMessage.textContent = "Input field is focused.";
});

inputField.addEventListener("blur", () => {
  logMessage.textContent = "Input field lost focus.";
});
