/**
 * This script creates a book and displays it using template literals
 * Template literals allow mixing text and variables in HTML
 */

import Book from "./Book.js";

// Create a new book object
const myBook = new Book("The Alchemist", "Paulo Coelho", 208, "Fiction", 1988);

// Create HTML using template literals and values from the book
const bookDetails = `
  <main>
    <article>
      <h1>${myBook.title}</h1>
      <ul>
        <li>Author: ${myBook.author}</li>
        <li>Pages: ${myBook.pages}</li>
        <li>Genre: ${myBook.genre}</li>
        <li>Year Published: ${myBook.yearPublished}</li>
        <li>Book Age: ${myBook.bookAge()} years</li>
      </ul>
    </article>
  </main>
`;

// Add the new HTML to the body
document.body.innerHTML = bookDetails;
