/**
 * File: object-containers-laptop.js
 * Description: Create a Laptop object with nested specs object
 */

// Create a Laptop object
const laptop = {
    brand: "Dell",
    model: "XPS 15",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
    },
    isOn: false, // Initially the laptop is off
  
    // Method to turn the laptop on or off
    togglePower: function (status) {
      this.isOn = status;
    },
  
    // Method to upgrade RAM
    upgradeRam: function (newRam) {
      this.specs.ram = newRam;
    },
  };
  
  // Example usage:
  laptop.togglePower(true);       // Turn the laptop ON
  laptop.upgradeRam("32GB");      // Upgrade RAM to 32GB
  
  // Display the laptop object in the console
  console.log(laptop);
  