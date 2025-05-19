// File: book-show.js
// Show book info and play with element attributes

import Book from "./Book.js";

// 1) Create a book object
const myBook = new Book(
  "Cien años de soledad",
  "Gabriel García Márquez",
  1967,
  "https://upload.wikimedia.org/wikipedia/en/3/3b/Cien_años_de_soledad_%281967%29.jpg"
);

// 2) Select <main> tag
const main = document.querySelector(".book-content");

// 3) Build the HTML with template literals
const bookHTML = `
  <article class="book">
    <img src="${myBook.cover}" alt="" />
    <h1>${myBook.title}</h1>
    <p><strong>Autor:</strong> ${myBook.author}</p>
    <p><strong>Año:</strong> ${myBook.year}</p>
  </article>
`;

// 4) Insert the HTML inside <main>
main.innerHTML = bookHTML;

// 5) Select the <img> element
const coverImg = document.querySelector(".book img");

// === Attribute practice ===

// A) Check if <img> has "alt"
console.log("Has alt:", coverImg.hasAttribute("alt")); // true

// B) Read the src value
console.log("Cover src:", coverImg.getAttribute("src"));

// C) Change the alt text
coverImg.setAttribute("alt", "Portada del libro Cien años de soledad");

// D) Add a new custom attribute
coverImg.setAttribute("data-note", "Edición conmemorativa");

// E) Verify and remove the new attribute
if (coverImg.hasAttribute("data-note")) {
  console.log("Has data-note, removing it...");
  coverImg.removeAttribute("data-note");
}
