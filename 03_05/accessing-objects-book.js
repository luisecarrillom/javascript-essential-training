/**
 * File: accessing-objects-book.js
 * Description: Create a Book object and access its properties
 */

// Create a Book object
const book = {
    title: "JavaScript Basics",
    author: "Luis Carrillo",
    pages: 220,
    publisher: "CodeBooks",
    available: true,
    location: {
      shelf: "A2",
      row: 3,
    },
  };
  
  // Access properties using dot notation
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Pages:", book.pages);
  
  // Access nested object property
  console.log("Shelf location:", book.location.shelf);
  
  // Access properties using bracket notation
  console.log("Publisher:", book["publisher"]);
  console.log("Available:", book["available"]);
  
  // Change a property value
  book.available = false;
  console.log("Now available?", book.available);
  