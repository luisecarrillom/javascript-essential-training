/**
 * File: object-dom-demo.js
 * Chapter: 01_04
 * Description: Show object information on the page and update it
 * Author: Luis Carrillo
 */

// This is an object. It has properties (name, capacity, color, etc.)
const item = {
  name: "Reusable Water Bottle",      // Name of the item
  capacity: "750ml",                  // How much it can hold
  color: "blue",                      // Color of the bottle
  isFull: false,                      // Is the bottle full? No (false)

  // This function sets isFull to true
  fill: function () {
    this.isFull = true;
    updateUI("The bottle is now full.");
  },

  // This function sets isFull to false
  empty: function () {
    this.isFull = false;
    updateUI("The bottle is now empty.");
  },
};

// This function returns (gives) HTML content with the object info
const render = (obj) => `
  <div>
    <h3>${obj.name}</h3>
    <ul>
      <li>Capacity: ${obj.capacity}</li>
      <li>Color: ${obj.color}</li>
      <li>Status: ${obj.isFull ? "Full" : "Empty"}</li>
    </ul>
  </div>
`;

// This function updates what you see on the page
const updateUI = (message) => {
  const main = document.querySelector("main");  // Find the <main> element
  main.innerHTML = render(item);                // Show the object info
  console.log(message);                         // Show the message in the console
};

// Create a <main> element in the HTML
const main = document.createElement("main");

// Add the object info into the <main> element
main.innerHTML = render(item);

// Put the <main> element on the page (inside <body>)
document.body.appendChild(main);
