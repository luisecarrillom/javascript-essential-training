/**
 * File: cript-custom.js
 * Description: Luis Carrillo custom version of external JS
 */

const device = {
    type: "Smartphone",
    brand: "TechPlus",
    battery: "85%",
    isOn: true,
    togglePower: function (status) {
      this.isOn = status;
      updateDevice("Power status changed.");
    },
  };
  
  const updateDevice = (message) => {
    const main = document.querySelector("main");
    main.innerHTML = markup(device);
    console.log(message);
  };
  
  const markup = (device) => `
    <div>
      <h3>${device.brand} ${device.type}</h3>
      <ul>
        <li>Battery: ${device.battery}</li>
        <li>Status: ${device.isOn ? "On" : "Off"}</li>
      </ul>
    </div>
  `;
  
  const main = document.createElement("main");
  main.innerHTML = markup(device);
  document.body.appendChild(main);
  