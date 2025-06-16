/**
 * Custom event listener passing arguments manually
 */
import deviceArray from "./components/devices.js";

/**
 * Callback function with multiple arguments
 * @param {Event} event - Native browser event object
 * @param {HTMLElement} button - Target button
 * @param {string} message - Custom argument
 */
function handleToggle(event, button, message) {
  console.log("Custom message:", message);
  console.log("Event type:", event.type);

  const deviceCard = button.parentElement;
  const statusSpan = deviceCard.querySelector(".device__status span");

  const isOn = statusSpan.innerText === "ON";
  statusSpan.innerText = isOn ? "OFF" : "ON";
  button.innerText = isOn ? "Turn ON" : "Turn OFF";
}

const cardList = deviceArray.map((device) => {
  const card = document.createElement("article");
  card.classList.add("device");
  card.setAttribute("id", device.id);

  card.innerHTML = `
    <h2 class="device__name">${device.name}</h2>
    <p class="device__category">Category: ${device.category}</p>
    <p class="device__status">Status: <span>${device.isOn ? "ON" : "OFF"}</span></p>
    <button class="status-btn">${device.isOn ? "Turn OFF" : "Turn ON"}</button>
  `;

  const button = card.querySelector(".status-btn");
  const customMessage = `Toggling device ${device.name}`;

  // Passing arguments through wrapper function
  button.addEventListener("click", (event) => {
    handleToggle(event, button, customMessage);
  });

  return card;
});

const main = document.querySelector(".maincontent");
cardList.forEach((card) => main.append(card));
