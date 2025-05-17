// File: book-show.js
// Show book info and use attribute methods

import Book from "./Book.js";

// Create a book object
const myBook = new Book(
  "The JavaScript Way",
  "John Smith",
  2022,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Book_icon_2.svg/1200px-Book_icon_2.svg.png"
);

// Select main tag
const main = document.querySelector(".book-content");

// Build HTML content
const bookHTML = `
  <article class="book">
    <img src="${myBook.coverImage}" alt="" />
    <h1>${myBook.title}</h1>
    <p><strong>Author:</strong> ${myBook.author}</p>
    <p><strong>Year:</strong> ${myBook.year}</p>
  </article>
`;

// Put HTML inside main
main.innerHTML = bookHTML;

// Select the image
const bookImg = document.querySelector("img");

// Check if image has "alt"
console.log("Has alt:", bookImg.hasAttribute("alt")); // true

// Get the src value
console.log("Image src:", bookImg.getAttribute("src"));

// Set a new alt value
bookImg.setAttribute("alt", "A book cover image");

// Add a new attribute
bookImg.setAttribute("title", "Click to zoom");

// Check and remove the title attribute
if (bookImg.hasAttribute("title")) {
  console.log("Has title, removing...");
  bookImg.removeAttribute("title");
}
