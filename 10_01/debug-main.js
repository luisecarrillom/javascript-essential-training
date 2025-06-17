import widgetArray from "./components/widget-data.js";

/**
 * Function to inspect elements and simulate errors
 */
function renderWidgets() {
  console.log("Widget array:", widgetArray); // Check array in console

  widgetArray.forEach((widget) => {
    const card = document.createElement("article");
    card.classList.add("widget");
    card.setAttribute("id", widget.id);

    card.innerHTML = `
      <h2>${widget.name}</h2>
      <p>Type: ${widget.type}</p>
      <p>Status: <span>${widget.status}</span></p>
    `;

    // Button to trigger update
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Toggle Status";

    // Add event with debug points
    toggleBtn.addEventListener("click", () => {
      debugger; // Set a manual breakpoint
      toggleStatus(widget, card); // Step through this in DevTools
    });

    card.appendChild(toggleBtn);
    document.querySelector(".maincontent").appendChild(card);
  });

  // Intentional error to show syntax issue
  // console.log("Oops!"  // <- uncomment to trigger a SyntaxError
}

/**
 * Toggle status and update display
 */
function toggleStatus(widget, element) {
  widget.status = widget.status === "active" ? "inactive" : "active";
  element.querySelector("span").innerText = widget.status;
}

renderWidgets();
