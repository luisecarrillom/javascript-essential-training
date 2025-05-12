// File: showPhone.js
// This file uses string concatenation (not template literals) to show phone info

import Phone from "./Phone.js";

// Create a new phone object
const myPhone = new Phone("Samsung", "Galaxy S10", 2019, 6.1, "24 hours");

// Build HTML using string concatenation
let phoneInfo =
  "<main>" +
  "<article>" +
  "<h1>" + myPhone.brand + " " + myPhone.model + "</h1>" +
  "<ul>" +
  "<li>Release Year: " + myPhone.releaseYear + "</li>" +
  "<li>Age: " + myPhone.phoneAge() + " years</li>" +
  "<li>Screen Size: " + myPhone.screenSize + " inches</li>" +
  "<li>Battery Life: " + myPhone.batteryLife + "</li>" +
  "</ul>" +
  "</article>" +
  "</main>";

// Insert the HTML into the document
document.body.innerHTML = phoneInfo;

// Console logs
console.log("Phone object:", myPhone);
console.log("Phone age:", myPhone.phoneAge());
