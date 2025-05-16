// File: viewer.js
// This file shows the phone and changes class styles

import SmartPhone from "./SmartPhone.js";

// Create one phone object
const myPhone = new SmartPhone(
  "Samsung",
  "Galaxy S21",
  "128GB",
  "black",
  false,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Samsung_Galaxy_S21_Ultra.png/300px-Samsung_Galaxy_S21_Ultra.png"
);

// Select the <main> tag
const main = document.querySelector(".phone-display");

// Create HTML content
const phoneHTML = `
  <article class="phone" id="samsung">
    <img src="${myPhone.image}" alt="${myPhone.model}" />
    <h1 class="phone-name">${myPhone.brand} ${myPhone.model}</h1>
    <ul>
      <li>Storage: <span>${myPhone.storage}</span></li>
      <li>Color: <span>${myPhone.color}</span></li>
      <li>Status: <span id="status">${myPhone.isOn ? "On" : "Off"}</span></li>
    </ul>
    <button class="toggle">Turn On/Off</button>
  </article>
`;

// Put the HTML into the page
main.innerHTML = phoneHTML;

// Select the button
const button = document.querySelector(".toggle");

// When button is clicked, change phone power
button.addEventListener("click", function () {
  // Toggle phone status
  myPhone.togglePower(!myPhone.isOn);

  // Update the status text
  const statusText = document.querySelector("#status");
  statusText.textContent = myPhone.isOn ? "On" : "Off";

  // Add or remove CSS class
  const phoneCard = document.querySelector(".phone");
  phoneCard.classList.toggle("highlight");
});
