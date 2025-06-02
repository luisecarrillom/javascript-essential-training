/**
 * Function Types Practice
 * - Function declaration
 * - Function expression
 * - Arrow function
 */

// Function Declaration: Change headline text
function updateHeadline() {
  const title = document.querySelector("#headline");
  title.innerText = "Updated by function declaration!";
}
updateHeadline();

// Function Expression: Add class to paragraph
const emphasizeDescription = function () {
  const desc = document.querySelector("#description");
  desc.classList.add("highlight");
};
emphasizeDescription();

// Arrow Function: Add click event to button
const activateButton = () => {
  const button = document.querySelector("#actionBtn");
  button.addEventListener("click", () => {
    alert("Arrow function says: Button clicked!");
  });
};
activateButton();
