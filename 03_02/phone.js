/**
 * File: phone.js
 * Description: Create a Phone object with properties and methods
 */

// Create a Phone object
const phone = {
    brand: "Samsung",
    model: "Galaxy S22",
    color: "black",
    storage: "256GB",
    isOn: false, // The phone is off at the start
  
    // Method to turn the phone on or off
    togglePower: function (powerStatus) {
      this.isOn = powerStatus;
    },
  
    // Method to change the color of the phone
    changeColor: function (newColor) {
      this.color = newColor;
    },
  };
  
  // Example: turn the phone on
  phone.togglePower(true);
  
  // Example: change the color
  phone.changeColor("blue");
  
  // Show the phone object in the console
  console.log(phone);
  