// File: movie-show.js
// Show movie info and play with element attributes

import Movie from "./Movie.js";

// 1) Create a movie object
const myMovie = new Movie(
  "Interstellar",
  "Christopher Nolan",
  2014,
  "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
);

// 2) Select <main> tag
const main = document.querySelector(".movie-content");

// 3) Build the HTML with template literals
const movieHTML = `
  <article class="movie">
    <img src="${myMovie.poster}" alt="" />
    <h1>${myMovie.title}</h1>
    <p><strong>Director:</strong> ${myMovie.director}</p>
    <p><strong>Year:</strong> ${myMovie.year}</p>
  </article>
`;

// 4) Insert the HTML inside <main>
main.innerHTML = movieHTML;

// 5) Select the <img> element
const posterImg = document.querySelector(".movie img");

// === Attribute practice ===

// A) Check if <img> has "alt"
console.log("Has alt:", posterImg.hasAttribute("alt")); // true

// B) Read the src value
console.log("Poster src:", posterImg.getAttribute("src"));

// C) Change the alt text
posterImg.setAttribute("alt", "Interstellar movie poster");

// D) Add a new custom attribute
posterImg.setAttribute("data-hover", "Tap to zoom");

// E) Verify and remove the new attribute
if (posterImg.hasAttribute("data-hover")) {
  console.log("Has data-hover, removing it...");
  posterImg.removeAttribute("data-hover");
}
