/**
 * File: backpack-demo.js
 * Practice with object properties and DOM updates
 * Author: Luis Carrillo
 */

const updateBackpack = (msg) => {
    const main = document.querySelector("main");
    main.innerHTML = render(backpack);
    console.info(msg);
  };
  
  const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (status) {
      this.lidOpen = status;
      updateBackpack("Lid toggled.");
    },
    newStrapLength: function (left, right) {
      this.strapLength.left = left;
      this.strapLength.right = right;
      updateBackpack("Straps updated.");
    },
  };
  
  const render = (bp) => `
    <div>
      <h3>${bp.name}</h3>
      <ul>
        <li>Volume: ${bp.volume}L</li>
        <li>Color: ${bp.color}</li>
        <li>Pockets: ${bp.pocketNum}</li>
        <li>Strap length - Left: ${bp.strapLength.left}, Right: ${bp.strapLength.right}</li>
        <li>Lid: ${bp.lidOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  `;
  
  const main = document.createElement("main");
  main.innerHTML = render(backpack);
  document.body.appendChild(main);
  