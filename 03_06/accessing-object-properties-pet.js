/**
 * File: accessing-object-properties-pet.js
 * Description: Create a Pet object and access its properties
 */

// Create a Pet object
const pet = {
    name: "Buddy",
    type: "Dog",
    breed: "Labrador",
    age: 3,
    vaccinated: true,
    owner: {
      name: "Luis",
      city: "Calgary",
    },
  };
  
  // Access properties using dot notation
  console.log("Pet's name:", pet.name);
  console.log("Pet's type:", pet.type);
  console.log("Pet's breed:", pet.breed);
  console.log("Pet's age:", pet.age);
  
  // Access nested object property
  console.log("Owner's name:", pet.owner.name);
  console.log("Owner's city:", pet.owner.city);
  
  // Access property using bracket notation
  console.log("Vaccinated?", pet["vaccinated"]);
  