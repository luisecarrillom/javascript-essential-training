/**
 * Add toggle details functionality using event listeners.
 */

import itemArray from "./modules/items.js";

const gearList = itemArray.map((gear) => {
  let gearCard = document.createElement("article");
  gearCard.classList.add("gear");
  gearCard.setAttribute("id", gear.id);

  gearCard.innerHTML = `
    <figure class="gear__image">
      <img src="${gear.image}" alt="${gear.name}" />
    </figure>
    <h1 class="gear__name">${gear.name}</h1>
    <ul class="gear__info">
      <li>Category: <span>${gear.category}</span></li>
      <li>Weight: <span>${gear.weight}g</span></li>
      <li class="gear__extra" style="display: none;">
        Condition: <span>${gear.condition}</span><br />
        Acquired: <span>${gear.dateAcquired}</span>
      </li>
    </ul>
    <button class="toggle-details">Show Details</button>
  `;

  const toggleBtn = gearCard.querySelector(".toggle-details");
  const extraInfo = gearCard.querySelector(".gear__extra");

  toggleBtn.addEventListener("click", () => {
    const isVisible = extraInfo.style.display === "block";
    extraInfo.style.display = isVisible ? "none" : "block";
    toggleBtn.textContent = isVisible ? "Show Details" : "Hide Details";
  });

  return gearCard;
});

const main = document.querySelector(".maincontent");
gearList.forEach((item) => main.append(item));
