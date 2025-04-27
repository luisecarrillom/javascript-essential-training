/**
 * File: car-main.js
 * Description: Import the Car object and show it on the web page
 */

// Import the Car object
import car from "./car-info.js";

// Create the HTML template to show car information
const createCarMarkup = (car) => `
  <div>
    <h2>${car.brand} ${car.model}</h2>
    <ul>
      <li>Year: ${car.year}</li>
      <li>Color: ${car.color}</li>
      <li>Electric: ${car.isElectric ? "Yes" : "No"}</li>
    </ul>
  </div>
`;

// Create a <main> element
const main = document.createElement("main");

// Add the car information inside <main>
main.innerHTML = createCarMarkup(car);

// Add <main> to the page
document.body.appendChild(main);
