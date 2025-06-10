/**
 * Looping through arrays and objects
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

import { essentials, travelItems } from "./loop-data.js";

const sectionArray = document.getElementById("array-list");
const sectionObject = document.getElementById("object-list");

// Create list for essentials using for loop
const listFor = document.createElement("ul");
listFor.innerHTML = "<strong>Essentials (for loop):</strong>";
for (let i = 0; i < essentials.length; i++) {
  const li = document.createElement("li");
  li.textContent = essentials[i];
  listFor.appendChild(li);
}
sectionArray.appendChild(listFor);

// Create list for essentials using for...of loop
const listForOf = document.createElement("ul");
listForOf.innerHTML = "<strong>Essentials (for...of loop):</strong>";
for (const item of essentials) {
  const li = document.createElement("li");
  li.textContent = item;
  listForOf.appendChild(li);
}
sectionArray.appendChild(listForOf);

// Create list using forEach
const listForEach = document.createElement("ul");
listForEach.innerHTML = "<strong>Essentials (forEach method):</strong>";
essentials.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listForEach.appendChild(li);
});
sectionArray.appendChild(listForEach);

// Create list from travelItems using for...in
const listObject = document.createElement("ul");
listObject.innerHTML = "<strong>Travel Items (for...in):</strong>";
for (const key in travelItems) {
  const li = document.createElement("li");
  li.textContent = `${travelItems[key].name} — ${travelItems[key].category}`;
  listObject.appendChild(li);
}
sectionObject.appendChild(listObject);
