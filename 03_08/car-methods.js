/**
 * File: car-methods.js
 * Description: Practice creating methods to update object properties
 */

// Create a car object
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    isRunning: false,
  
    // Method to change the brand
    changeBrand: function (newBrand) {
      this.brand = newBrand;
    },
  
    // Method to change the model
    changeModel: function (newModel) {
      this.model = newModel;
    },
  
    // Method to change the year
    changeYear: function (newYear) {
      this.year = newYear;
    },
  
    // Method to change the color
    changeColor: function (newColor) {
      this.color = newColor;
    },
  
    // Method to start or stop the car
    toggleEngine: function (status) {
      this.isRunning = status;
    },
  };
  
  // Show car object
  console.log("Original car:", car);
  
  // Call methods to change properties
  car.changeBrand("Honda");
  car.changeModel("Civic");
  car.changeYear(2024);
  car.changeColor("red");
  car.toggleEngine(true);
  
  // Show updated car
  console.log("Updated car:", car);
  