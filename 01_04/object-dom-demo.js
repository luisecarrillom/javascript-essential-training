/**
 * File: object-dom-demo.js
 * Description: Practice with object properties and DOM updates
 * Author: Luis Carrillo
 */

// Create an object with information about a water bottle
const item = {
    name: "Reusable Water Bottle",      // The name of the item
    capacity: "750ml",                  // How much it can hold
    color: "blue",                      // The color of the bottle
    isFull: false,                      // Is the bottle full? false = no
  
    // Function to fill the bottle
    fill: function () {
      this.isFull = true;                       // Set isFull to true
      updateUI("The bottle is now full.");      // Show message and update screen
    },
  
    // Function to empty the bottle
    empty: function () {
      this.isFull = false;                      // Set isFull to false
      updateUI("The bottle is now empty.");     // Show message and update screen
    },
  };
  
  // This function creates HTML to show the object info
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
  
  // This function updates the screen and logs a message
  const updateUI = (message) => {
    const main = document.querySelector("main");  // Find the <main> element
    main.innerHTML = render(item);                // Show the object info
    console.log(message);                         // Write message in console
  };
  
  // Create the <main> element
  const main = document.createElement("main");
  
  // Add the HTML content inside <main>
  main.innerHTML = render(item);
  
  // Add the <main> element to the web page (in the body)
  document.body.appendChild(main);
  