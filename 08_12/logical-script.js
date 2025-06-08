/**
 * Display bag info and use logical operators for conditions.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 */

import Bag from "./bag.js";

const travelBag = new Bag("Travel Pro", 25, 6, "April 15, 2024");

const main = document.querySelector(".maincontent");

const age = travelBag.getAgeInDays();
const isUsed = age >= 30 ? "used" : "new";
const isBig = travelBag.volume > 20 && travelBag.pockets >= 5;
const bagSize = isBig ? "Big bag" : "Small bag";

const section = document.createElement("section");
section.innerHTML = `
  <h2>${travelBag.name}</h2>
  <ul>
    <li>Volume: ${travelBag.volume}L</li>
    <li>Pockets: ${travelBag.pockets}</li>
    <li>Age: ${age} days</li>
    <li>Status: ${isUsed}</li>
    <li>Classification: ${bagSize}</li>
  </ul>
`;

main.append(section);
