/**
 * File: car-class-demo.js
 * Description: Import and use the Car class.
 */

import Car from "./Car.js";

// Create a new Car object
const myCar = new Car("Toyota", "Corolla", 2022, "blue", false);

// Show the object in the console
console.log("My car:", myCar);

// Access a property
console.log("Car color:", myCar.color);

// Change the color
myCar.repaint("red");
console.log("New color:", myCar.color);

// Start the engine
myCar.toggleEngine(true);
console.log("Is the engine on?", myCar.isRunning);
