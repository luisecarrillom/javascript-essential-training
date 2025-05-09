// File: Smartphone.js

// Define base class for smartphones
class Smartphone {
    constructor(brand, model, ram, storage, battery) {
      this.brand = brand;
      this.model = model;
      this.ram = ram; // in GB
      this.storage = storage; // in GB
      this.battery = battery; // in mAh
      this.poweredOn = false;
    }
  
    // Method to turn on/off the phone
    togglePower() {
      this.poweredOn = !this.poweredOn;
      console.log(this.poweredOn ? "Phone is now ON." : "Phone is now OFF.");
    }
  
    // Method to simulate a software update
    updateSystem() {
      console.log(`${this.brand} ${this.model} is updating...`);
    }
  }
  
  export default Smartphone;
  