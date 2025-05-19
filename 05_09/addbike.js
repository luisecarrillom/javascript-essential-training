import Bike from "./bike.js";

const mountainBike = new Bike("Trail Blazer", "mountain", "blue", 21, "trailblazer.jpg");

const content = `
  <figure class="bike-image">
    <img src="${mountainBike.image}" alt="Mountain bike">
  </figure>
  <h2 class="bike-name">${mountainBike.name}</h2>
  <ul class="bike-details">
    <li>Type: ${mountainBike.type}</li>
    <li>Color: ${mountainBike.color}</li>
    <li>Gears: ${mountainBike.gearCount}</li>
    <li>Info: ${mountainBike.bikeInfo()}</li>
  </ul>
`;

const newSection = document.createElement("article");
newSection.classList.add("bike-entry");
newSection.setAttribute("id", "trailblazer");
newSection.innerHTML = content;

const contentArea = document.querySelector(".content-area");
contentArea.append(newSection);
