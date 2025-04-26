/**
 * File: laptop-object.js
 * Description: Show Laptop properties on the page
 */

// Update function
const updateLaptop = (msg) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(laptop);
    console.info(msg);
  };
  
  // Laptop object
  const laptop = {
    brand: "TechPro",
    model: "X200",
    ram: "16GB",
    storage: "512GB SSD",
    poweredOn: true,
  
    togglePower: function (status) {
      this.poweredOn = status;
      updateLaptop("Power status changed.");
    },
  
    upgradeStorage: function (newStorage) {
      this.storage = newStorage;
      updateLaptop("Storage upgraded.");
    },
  };
  
  // Template for HTML
  const markup = (laptop) => `
    <div>
      <h3>${laptop.brand} ${laptop.model}</h3>
      <ul>
        <li>RAM: ${laptop.ram}</li>
        <li>Storage: ${laptop.storage}</li>
        <li>Power: ${laptop.poweredOn ? "On" : "Off"}</li>
      </ul>
    </div>
  `;
  
  // Add content to the page
  const main = document.createElement("main");
  main.innerHTML = markup(laptop);
  document.body.appendChild(main);
  