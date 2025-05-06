/**
 * File: object-methods.js
 * Description: Practice using object methods
 */

// Create a Backpack object
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    // Method to toggle lid open or closed
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    // Method to update strap length
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  
  // Show object in console
  console.log("The backpack object:", backpack);
  
  // Show a simple property
  console.log("The pocketNum value:", backpack.pocketNum);
  
  // Call a method to open the lid
  backpack.toggleLid(true);
  console.log("Is the lid open?", backpack.lidOpen);
  
  // Call a method to change the strap lengths
  backpack.newStrapLength(30, 30);
  console.log("New strap lengths:", backpack.strapLength);
  