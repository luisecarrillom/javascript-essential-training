/**
 * File: car-info.js
 * Description: Create and export a simple Car object
 */

// Create a Car object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "red",
  isElectric: false,

  toggleElectric: function (status) {
    this.isElectric = status;
  },
};

// Export the car so we can use it in other files
export default car;
