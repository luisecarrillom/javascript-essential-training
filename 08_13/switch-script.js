/**
 * Using switch with range logic.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

import Luggage from "./luggage.js";

// Create a new luggage instance
const userLuggage = new Luggage("Luis", 70, 23, "March 1, 2022");

// Generate DOM output
const main = document.querySelector(".maincontent");

const storageDays = userLuggage.getStorageTime();
let storageCategory;

switch (true) {
  case storageDays < 15:
    storageCategory = "Recently stored";
    break;
  case storageDays >= 15 && storageDays < 90:
    storageCategory = "Stored short-term";
    break;
  case storageDays >= 90 && storageDays < 365:
    storageCategory = "Stored medium-term";
    break;
  case storageDays >= 365:
    storageCategory = "Long-term storage";
    break;
  default:
    storageCategory = "Unknown";
}

const output = `
  <section>
    <h2>${userLuggage.owner}'s Luggage</h2>
    <ul>
      <li>Size: ${userLuggage.size}L</li>
      <li>Weight: ${userLuggage.weight}kg</li>
      <li>Days in storage: ${storageDays}</li>
      <li>Category: ${storageCategory}</li>
    </ul>
  </section>
`;

main.innerHTML = output;
