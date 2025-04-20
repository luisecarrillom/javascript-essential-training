/**
 * File: browser-console-demo.js
 * Chapter: 01_05
 * Description: Practice with console and object in JavaScript
 * Author: Luis Carrillo
 */

// This function updates the screen and shows a message in the console
const updateBackpack = (message) => {
    let main = document.querySelector("main");         // Find <main> element
    main.innerHTML = markup(backpack);                 // Show object info
    console.info(message);                             // Show message in console
  };
  
  // Create an object called backpack
  const backpack = {
    name: "Everyday Backpack",
    volume: 30,               // Liters
    color: "grey",
    pocketNum: 15,            // How many pockets
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,           // Is the lid open?
  
    // Function to open/close the lid
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
      updateBackpack("Lid status changed.");
    },
  
    // Function to update strap lengths
    newStrapLength: function (left, right) {
      this.strapLength.left = left;
      this.strapLength.right = right;
      updateBackpack("Strap lengths updated.");
    },
  };
  
  // Function to return HTML from the object
  const markup = (bag) => {
    return `
      <div>
        <h3>${bag.name}</h3>
        <ul>
          <li>Volume: ${bag.volume}</li>
          <li>Color: ${bag.color}</li>
          <li>Number of pockets: ${bag.pocketNum}</li>
          <li>Strap lengths: L: ${bag.strapLength.left}, R: ${bag.strapLength.right}</li>
          <li>Top lid: ${bag.lidOpen ? "Open" : "Closed"}</li>
        </ul>
      </div>
    `;
  };
  
  // Create a <main> element and add object info
  const main = document.createElement("main");
  main.innerHTML = markup(backpack);
  document.body.appendChild(main);
  
  // Simulate an action to show message in console
  backpack.toggleLid(true); // This line triggers a console message and updates the UI
  