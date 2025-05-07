/**
 * File: Car.js
 * Description: A simple class to describe a car.
 */

class Car {
    constructor(brand, model, year, color, isRunning) {
      this.brand = brand;         // Car brand (e.g. Toyota)
      this.model = model;         // Model name (e.g. Corolla)
      this.year = year;           // Year of the car
      this.color = color;         // Color of the car
      this.isRunning = isRunning; // Is the engine running?
    }
  
    // Method to start or stop the engine
    toggleEngine(status) {
      this.isRunning = status;
    }
  
    // Method to change the car color
    repaint(newColor) {
      this.color = newColor;
    }
  }
  
  export default Car;
  