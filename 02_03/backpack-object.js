/**
 * File: backpack-object.js
 * Description: Show Backpack properties on the page
 */

// Update function
const updateBackpack = (msg) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(msg);
  };
  
  // Backpack object
  const backpack = {
    name: "Travel Backpack",
    volume: 40,
    color: "black",
    pocketNum: 8,
    strapLength: {
      left: 30,
      right: 30,
    },
    lidOpen: false,
  
    toggleLid: function (open) {
      this.lidOpen = open;
      updateBackpack("Lid toggled.");
    },
  
    newStrapLength: function (left, right) {
      this.strapLength.left = left;
      this.strapLength.right = right;
      updateBackpack("Strap length updated.");
    },
  };
  
  // Template for HTML
  const markup = (bag) => `
    <div>
      <h3>${bag.name}</h3>
      <ul>
        <li>Volume: ${bag.volume}</li>
        <li>Color: ${bag.color}</li>
        <li>Number of pockets: ${bag.pocketNum}</li>
        <li>Strap Lengths: Left ${bag.strapLength.left}, Right ${bag.strapLength.right}</li>
        <li>Lid: ${bag.lidOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  `;
  
  // Add content to the page
  const main = document.createElement("main");
  main.innerHTML = markup(backpack);
  document.body.appendChild(main);
  