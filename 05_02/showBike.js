// File: showBike.js
// This file uses querySelector and querySelectorAll to insert bike info into HTML

import Bike from "./bike.js";

// Create a new Bike object
const myBike = new Bike(
  "Giant",
  "Escape 3",
  21,
  true,
  2021,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Giant_Escape_bike.jpg/320px-Giant_Escape_bike.jpg"
);

// Get main container
const main = document.querySelector(".main-display");

// Build the content
const bikeHTML = `
  <article class="bike__card">
    <figure class="bike__image">
      <img src="${myBike.image}" alt="Bike image" width="300" />
    </figure>
    <h1 class="bike__title">${myBike.brand} ${myBike.model}</h1>
    <ul class="bike__info">
      <li>Gear Count: <span>${myBike.gearCount}</span></li>
      <li>Has Bell: <span>${myBike.hasBell}</span></li>
      <li>Year: <span>${myBike.year}</span></li>
      <li>Age: <span>${myBike.bikeAge()} years</span></li>
    </ul>
  </article>
`;

// Insert the content into the page
main.innerHTML = bikeHTML;

// Use querySelectorAll to color all <span> elements
document.querySelectorAll("span").forEach((el) => {
  el.style.color = "darkgreen";
});