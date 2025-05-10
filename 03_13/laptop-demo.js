/**
 * Use the global Date() object to calculate how many days ago a laptop was bought.
 */

import Laptop from "./Laptop.js"; // Import the class

// Create a new laptop object
const myLaptop = new Laptop(
  "Dell",
  "XPS 13",
  16,
  512,
  "2021-06-20T10:00:00"
);

console.log("Laptop info:", myLaptop);
console.log("Purchased:", myLaptop.purchasedDate);
console.log("Days since purchase:", myLaptop.getAgeInDays());
