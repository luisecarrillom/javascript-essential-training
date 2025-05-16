// File: SmartPhone.js
// This file contains the SmartPhone class

class SmartPhone {
    constructor(brand, model, storage, color, isOn, image) {
      this.brand = brand;
      this.model = model;
      this.storage = storage;
      this.color = color;
      this.isOn = isOn;
      this.image = image;
    }
  
    togglePower(status) {
      this.isOn = status;
    }
  }
  
  export default SmartPhone;
  