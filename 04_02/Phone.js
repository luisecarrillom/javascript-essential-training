// File: Phone.js
// This file contains a class for a mobile phone

class Phone {
    constructor(brand, model, releaseYear, screenSize, batteryLife) {
      this.brand = brand;
      this.model = model;
      this.releaseYear = releaseYear;
      this.screenSize = screenSize;
      this.batteryLife = batteryLife;
    }
  
    phoneAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.releaseYear;
    }
  }
  
  export default Phone;
  