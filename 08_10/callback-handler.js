/**
 * Demo: Using callback functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Helper function: generates a greeting based on the user's name
const createGreeting = (name) => {
  return `Hello, ${name}! Welcome back.`;
};

// Callback function: takes a message and prints it inside the DOM
const printMessage = (message) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  document.querySelector("main").append(paragraph);
};

// Main function: processes the user's name and calls a callback
const processUser = (userName, callback) => {
  const greeting = createGreeting(userName);
  callback(greeting); // Execute the callback with the result
};

// Usage example
processUser("Luis", printMessage);
