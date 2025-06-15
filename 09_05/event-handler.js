/**
 * Advanced event handler demo using function declaration for `this` context.
 */
import itemArray from "./components/inventory.js";

function toggleStatus() {
  // Update item object status
  const currentItem = itemArray.find(({ id }) => id === this.parentElement.id);
  currentItem.available = !currentItem.available;

  // Update button text
  this.innerText = currentItem.available ? "Mark as Unavailable" : "Mark as Available";

  // Update visual status
  const statusSpan = this.parentElement.querySelector(".gear__status span");
  statusSpan.innerText = currentItem.available ? "Available" : "Unavailable";
}

const itemCards = itemArray.map((item) => {
  const card = document.createElement("article");
  card.classList.add("gear");
  card.setAttribute("id", item.id);

  card.innerHTML = `
    <figure class="gear__image">
      <img src="${item.image}" alt="${item.name}" />
    </figure>
    <h2 class="gear__name">${item.name}</h2>
    <ul class="gear__details">
      <li>Category: <span>${item.category}</span></li>
      <li>Weight: <span>${item.weight}g</span></li>
      <li class="gear__status">Status: <span>${item.available ? "Available" : "Unavailable"}</span></li>
    </ul>
    <button class="toggle-status">
      ${item.available ? "Mark as Unavailable" : "Mark as Available"}
    </button>
  `;

  // Attach event listener using traditional function to enable `this`
  card.querySelector(".toggle-status").addEventListener("click", toggleStatus);

  return card;
});

const main = document.querySelector(".maincontent");
itemCards.forEach((card) => main.append(card));
