/**
 * File: language-basics.js
 * Chapter: 01_05
 * Description: JavaScript language basics example
 * Author: Luis Carrillo
 */

// This function updates the screen and writes to the console
const updateBackpack = (message) => {
    let main = document.querySelector("main"); // Get the <main> element
    main.innerHTML = markup(backpack);         // Show the backpack object
    console.info(message);                     // Show a message in the console
  };
  
  // Create a backpack object
  const backpack = {
    name: "Everyday Backpack",     // String
    volume: 30,                    // Number
    color: "grey",                 // String
    pocketNum: 15,                 // Number
    strapLength: {
      left: 26,                    // Number
      right: 26,                   // Number
    },
    lidOpen: false,                // Boolean
  
    // Method to open or close the lid
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
      updateBackpack("Lid status changed.");  // Call update
    },
  
    // Method to change strap lengths
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
      updateBackpack("Strap lengths updated.");  // Call update
    },
  };
  
  // This function builds the HTML using backpack data
  const markup = (backpack) => {
    return `
    <div>
      <h3>${backpack.name}</h3>
      <ul>
        <li>Volume: ${backpack.volume}</li>
        <li>Color: ${backpack.color}</li>
        <li>Number of pockets: ${backpack.pocketNum}</li>
        <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${backpack.strapLength.right}</li>
        <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
    `;
  };
  
  // Create a <main> element and show the backpack data
  const main = document.createElement("main");
  main.innerHTML = markup(backpack);
  document.body.appendChild(main);
  
  // Test: open the lid to show message in console
  backpack.toggleLid(true);
  