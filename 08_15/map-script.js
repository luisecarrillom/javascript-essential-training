/**
 * Using map() to create a new array of list items.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

import { movies } from "./map-data.js";

const container = document.getElementById("movie-list");
const list = document.createElement("ul");

// Transform movie objects into <li> elements using map()
const movieItems = movies.map((movie) => {
  const li = document.createElement("li");
  li.textContent = `${movie.title} (${movie.year})`;
  return li;
});

// Append each <li> to the <ul> using forEach()
movieItems.forEach((li) => list.appendChild(li));

container.appendChild(list);
