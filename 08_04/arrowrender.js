/**
 * Example using arrow function to render a user card
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// User object
const user = {
  username: "LuisCoder",
  role: "admin",
  active: true,
};

// Arrow function to generate a user card
const renderUser = (account) => {
  const card = document.createElement("section");
  card.innerHTML = `
    <h2>${account.username}</h2>
    <p>Role: ${account.role}</p>
    <p>Status: ${account.active ? "Active" : "Inactive"}</p>
  `;
  return card;
};

// Insert into the DOM
const main = document.querySelector("main");
main.append(renderUser(user));
