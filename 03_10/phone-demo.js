// File: phone-demo.js

// Import the GamingPhone class
import GamingPhone from "./GamingPhone.js";

// Create an instance of GamingPhone
const myGamingPhone = new GamingPhone(
  "Razer",
  "Phone 5",
  16,
  512,
  6000,
  "liquid",
  120
);

// Use the methods and log to console
console.log("Gaming phone object:", myGamingPhone);
myGamingPhone.togglePower();
myGamingPhone.enableGamingMode();
myGamingPhone.updateSystem();
