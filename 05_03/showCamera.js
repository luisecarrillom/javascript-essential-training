// File: showCamera.js
// This file uses querySelector() to show camera info in the HTML

import Camera from "./Camera.js";

// Create one Camera object
const myCamera = new Camera(
  "Canon",
  "EOS R50",
  "24.2MP",
  true,
  2022,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Canon_EOS_R50.jpg/320px-Canon_EOS_R50.jpg"
);

// Select the HTML container
const main = document.querySelector(".camera-display");

// Make the HTML content
const cameraHTML = `
  <article class="camera">
    <img src="${myCamera.image}" alt="Camera photo" />
    <h1>${myCamera.brand} ${myCamera.model}</h1>
    <ul>
      <li>Resolution: ${myCamera.resolution}</li>
      <li>Flash: ${myCamera.hasFlash}</li>
      <li>Year: ${myCamera.year}</li>
      <li>Age: ${myCamera.cameraAge()} years</li>
    </ul>
  </article>
`;

// Insert the content in the HTML
main.innerHTML = cameraHTML;
