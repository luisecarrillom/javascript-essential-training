/**
 * Display laptop info with conditional rendering (charged vs not charged)
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 */

import Laptop from "./Laptop.js";

const travelLaptop = new Laptop(
  "Travel Buddy 14",
  "TechNova",
  "16GB",
  "512GB SSD",
  false,
  "2022-08-01",
  "../assets/images/laptop.svg"
);

// Use ternary conditional to evaluate isCharged
const content = `
  <figure class="laptop__image">
    <img src="${travelLaptop.image}" alt="Laptop" />
  </figure>
  <h1 class="laptop__name">${travelLaptop.name}</h1>
  <ul class="laptop__features">
    <li class="feature">Brand:<span> ${travelLaptop.brand}</span></li>
    <li class="feature">RAM:<span> ${travelLaptop.ram}</span></li>
    <li class="feature">Storage:<span> ${travelLaptop.storage}</span></li>
    <li class="feature">Age:<span> ${travelLaptop.ageInDays()} days old</span></li>
    <li class="feature">Charge Status:<span> ${
      travelLaptop.isCharged ? "Charged 🔋" : "Not Charged 🔌"
    }</span></li>
  </ul>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("laptop");
newArticle.setAttribute("id", "travel-laptop");
newArticle.innerHTML = content;

main.append(newArticle);
