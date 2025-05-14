// File: Bike.js
// This file defines a Bike class with properties and methods

class Bike {
    constructor(brand, model, gearCount, hasBell, year, image) {
      this.brand = brand;
      this.model = model;
      this.gearCount = gearCount;
      this.hasBell = hasBell;
      this.year = year;
      this.image = image;
    }
  
    bikeAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  
    toggleBell(status) {
      this.hasBell = status;
    }
  }
  
  export default Bike;
  