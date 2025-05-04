/**
 * File: practice-build-object-laptop.js
 * Description: Create a Laptop object and access its properties
 */

// Create a Laptop object
const laptop = {
    brand: "Dell",
    model: "XPS 13",
    year: 2022,
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD"
    },
    isOn: false,
    // Method to turn the laptop on or off
    togglePower: function (powerStatus) {
      this.isOn = powerStatus;
      console.log("Laptop is now", this.isOn ? "On" : "Off");
    },
    // Method to update RAM and storage
    updateSpecs: function (newRam, newStorage) {
      this.specs.ram = newRam;
      this.specs.storage = newStorage;
      console.log("Specs updated:", this.specs);
    }
  };
  
  // Access properties using dot notation
  console.log("Laptop brand:", laptop.brand);
  console.log("Laptop model:", laptop.model);
  console.log("Processor:", laptop.specs.processor);
  
  // Access properties using bracket notation
  console.log("RAM:", laptop["specs"]["ram"]);
  console.log("Storage:", laptop["specs"]["storage"]);
  
  // Call methods
  laptop.togglePower(true);
  laptop.updateSpecs("32GB", "1TB SSD");
  